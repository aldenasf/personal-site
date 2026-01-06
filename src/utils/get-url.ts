export const getBaseUrl = () => {
    // 1. Check for the specific branch URL (e.g., aldenasf-git-dev...)
    if (process.env.VERCEL_BRANCH_URL) {
        return `https://${process.env.VERCEL_BRANCH_URL}`;
    }

    // 2. Check for the generic Vercel deployment URL
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // 3. Localhost fallback
    return `http://localhost:4321`;
};
