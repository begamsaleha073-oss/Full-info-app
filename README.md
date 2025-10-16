    # Kali-style LeakOSINT Web App

    This project is a minimal Next.js web app (Kali dark theme) that forwards phone number queries to the LeakOSINT API via a server-side API route.

## How to deploy (mobile-friendly)
1. Create a new GitHub repo and upload the files and folders exactly as they are.
2. On Vercel (vercel.com) choose "Import Git Repository" and pick this repo.
3. In Vercel, set Environment Variable: `LEAKOSINT_API_TOKEN` to your real token.
4. Deploy. The API URL and token remain hidden from users (server-side).

## Local dev (optional)
- `npm install`
- Create `.env.local` with `LEAKOSINT_API_TOKEN=...`
- `npm run dev`

**Warning shown in app:**
⚠️ This tool was created by Happy. It is for investigation and educational purposes only. Misuse of this tool is strictly prohibited. You will be responsible for any illegal use.
