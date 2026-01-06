// src/utils/get-url.ts
export const getBaseUrl = () => {
    // Check for Vercel's system variable (provided at build/runtime)
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

    // Fallback for local development
    return `http://localhost:4321`;
};
