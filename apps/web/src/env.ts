import { z } from "zod";

// Client-side env (only NEXT_PUBLIC_*)
const ClientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .optional(), // optional to allow preview fallback via VERCEL_URL
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z
    .string()
    .url()
    .default("https://us.i.posthog.com"),
});

// Server-only env (never expose to client)
const ServerEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  VERCEL: z.string().optional(),
  VERCEL_URL: z.string().optional(), // e.g. my-app.vercel.app (no protocol)
  OPENAI_API_KEY: z.string().min(1).optional(), // optional at build; features can assert at runtime
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(), // optional at build
  SENTRY_DSN: z.string().optional(),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
});

// Parse client env unconditionally (safe to embed)
export const clientEnv = ClientEnvSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

// Guard server env so that accessing it on the client throws and avoids bundling secrets
export const serverEnv: Readonly<z.infer<typeof ServerEnvSchema>> = ((): Readonly<
  z.infer<typeof ServerEnvSchema>
> => {
  if (typeof window !== "undefined") {
    // In the browser: create a proxy that throws on access, preventing accidental usage
    return new Proxy({} as z.infer<typeof ServerEnvSchema>, {
      get() {
        throw new Error("Attempted to access server-only env on the client");
      },
    });
  }

  return ServerEnvSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    VERCEL_URL: process.env.VERCEL_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SENTRY_DSN: process.env.SENTRY_DSN,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
})();

export const isProd = serverEnv.NODE_ENV === "production";

// Compute site URL with sensible defaults for Vercel preview and local dev
export function getSiteUrl(): string {
  if (typeof window !== "undefined") {
    // On the client, trust the configured value or fallback to current origin
    return (clientEnv.NEXT_PUBLIC_SITE_URL ?? window.location.origin).replace(/\/$/, "");
  }

  const fromEnv = clientEnv.NEXT_PUBLIC_SITE_URL;
  const vercel = serverEnv.VERCEL_URL;

  const resolved = fromEnv
    ? fromEnv
    : vercel
    ? vercel.startsWith("http")
      ? vercel
      : `https://${vercel}`
    : "http://localhost:3000";

  return resolved.replace(/\/$/, "");
}

export const SITE_URL = getSiteUrl();
