# FiveMinuteEdge — Deployment Guide
Follow these steps exactly, in order. Each step links to the right place.

---

## Step 1: Set up Supabase database

1. Go to supabase.com → your project → **SQL Editor** → **New Query**
2. Open the file `SUPABASE_SETUP.sql` from this folder
3. Copy the entire contents and paste into the SQL Editor
4. Click **Run**
5. You should see "Success" — your database tables are created

**Get your Supabase keys:**
- Go to your Supabase project → **Settings** → **API**
- Copy: `Project URL` → this is your `NEXT_PUBLIC_SUPABASE_URL`
- Copy: `anon public` key → this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Copy: `service_role` key → this is your `SUPABASE_SERVICE_ROLE_KEY`

---

## Step 2: Set up Stripe

1. Go to stripe.com → **Developers** → **API keys**
2. Copy your `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Copy your `Secret key` → `STRIPE_SECRET_KEY`

**Create your subscription product:**
1. Go to Stripe → **Products** → **Add product**
2. Name: "FiveMinuteEdge Monthly"
3. Price: $19.00 / month (recurring)
4. Click **Save** — copy the **Price ID** (starts with `price_`) → `STRIPE_PRICE_ID`

---

## Step 3: Push code to GitHub

1. Go to github.com → **New repository**
2. Name it `fiveminuteedge` → **Create repository**
3. Follow GitHub's instructions to push this folder to your new repo
   (GitHub will show you the exact commands to run)

---

## Step 4: Deploy to Vercel

1. Go to vercel.com → **New Project**
2. Import your `fiveminuteedge` GitHub repository
3. Click **Deploy** — Vercel will detect it's a Next.js app automatically

**Add your environment variables:**
1. In Vercel → your project → **Settings** → **Environment Variables**
2. Add each variable from `.env.local.example` with your real values
3. Click **Redeploy** after adding variables

---

## Step 5: Connect your domain

1. In Vercel → your project → **Settings** → **Domains**
2. Add `fiveminuteedge.com`
3. Vercel will give you DNS records to add
4. Go to Namecheap → your domain → **Advanced DNS**
5. Add the records Vercel gives you
6. Wait 10–30 minutes for DNS to propagate

---

## Step 6: Set up Stripe webhook

1. Go to Stripe → **Developers** → **Webhooks** → **Add endpoint**
2. URL: `https://fiveminuteedge.com/api/stripe/webhook`
3. Events to listen for: `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
4. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`
5. Add this to Vercel environment variables and redeploy

---

## You're live. 🎉

Your app is now running at fiveminuteedge.com with:
- ✅ User authentication
- ✅ Daily lesson unlocking
- ✅ Progress tracking and streaks
- ✅ Stripe subscription payments
- ✅ Secure database with row-level security

**Test it:**
1. Go to fiveminuteedge.com
2. Click "Start free trial"
3. Create an account
4. Complete Day 1
5. Check your dashboard — your progress should be saved

---

## Getting help

If anything doesn't work, copy the error message and share it. Claude will tell you exactly what to fix.
