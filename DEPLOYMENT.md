# 🚀 Deployment Guide - HeatShield Nexus

## Prerequisites

✅ Node.js 16+
✅ Firebase account (https://console.firebase.google.com)
✅ Google Maps API key
✅ OpenWeather API key
✅ GitHub account (repo already exists)

---

## Step 1: Firebase Setup (5 minutes)

### 1.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add Project"
3. Name: `heatshield-nexus`
4. Enable Google Analytics (optional)
5. Click "Create Project"

### 1.2 Enable Authentication
1. Go to **Authentication** → **Sign-in method**
2. Enable **Email/Password**
3. Enable **Google** (OAuth)
   - Add your domain (for testing: localhost)
   - Add production domain later (e.g., heatshield-nexus.vercel.app)

### 1.3 Create Firestore Database
1. Go to **Firestore Database**
2. Click **Create Database**
3. Select **Production mode**
4. Choose region: `asia-south1` (closest to Chennai)
5. Click **Create**

### 1.4 Get Your Credentials
1. Go to **Project Settings** (gear icon)
2. Scroll to **Your apps** section
3. Click the web icon `</>` to register your web app
4. Copy the config object:

```javascript
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "YOUR_PROJECT.firebaseapp.com",
  "projectId": "YOUR_PROJECT_ID",
  "storageBucket": "YOUR_PROJECT.appspot.com",
  "messagingSenderId": "YOUR_SENDER_ID",
  "appId": "YOUR_APP_ID"
}
```

---

## Step 2: Get API Keys (5 minutes)

### 2.1 Google Maps API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project named `heatshield-nexus`
3. Enable **Maps JavaScript API**
4. Enable **Places API**
5. Create an API key (Credentials → Create Credentials → API Key)
6. Copy the key

### 2.2 OpenWeather API
1. Sign up at [openweathermap.org](https://openweathermap.org/api)
2. Go to **API keys**
3. Copy your **Default key**

---

## Step 3: Local Development (2 minutes)

```bash
# Clone repo (already done)
cd heatshield-nexus

# Install dependencies
npm install

# Create .env.local
cp .env.local.example .env.local

# Edit .env.local with your credentials
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_MAPS_KEY
NEXT_PUBLIC_OPENWEATHER_API_KEY=YOUR_WEATHER_KEY

# Start dev server
npm run dev

# Open http://localhost:3000
```

---

## Step 4: Deploy to Vercel (3 minutes)

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Confirm project name: heatshield-nexus
# - Confirm directory: ./
# - Override settings: N
```

### Option B: Using GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Paste your repo URL: `https://github.com/Buvanav/heatshield-nexus`
5. Click "Import"
6. Add Environment Variables (from Step 2)
7. Click "Deploy"

---

## Step 5: Configure Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable from your .env.local:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - `NEXT_PUBLIC_OPENWEATHER_API_KEY`
4. Click **Save**
5. Go to **Deployments** → Redeploy latest

---

## Step 6: Update Firebase Authorized Domains

1. Go to Firebase Console → **Authentication** → **Settings**
2. Scroll to **Authorized domains**
3. Add your Vercel URL:
   - Example: `heatshield-nexus-buvanav.vercel.app`
   - Find this in Vercel dashboard → **Domains**

---

## ✅ Deployment Checklist

- [ ] Firebase project created
- [ ] Firestore database enabled
- [ ] Authentication (Email + Google OAuth) enabled
- [ ] API keys generated (Maps, OpenWeather)
- [ ] .env.local configured locally
- [ ] `npm run dev` works without errors
- [ ] Login page accessible at `/login`
- [ ] Dashboard loads after login
- [ ] Vercel project created
- [ ] Environment variables set on Vercel
- [ ] Vercel deployment successful
- [ ] Live URL accessible
- [ ] Firebase authorized domains updated
- [ ] Google OAuth works on production URL

---

## 🔗 Useful Links

- **Firebase Console**: https://console.firebase.google.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Cloud Console**: https://console.cloud.google.com
- **OpenWeather API**: https://openweathermap.org/api

---

## 🐛 Troubleshooting

### "Firebase API key not found"
- ✅ Check .env.local file exists
- ✅ Verify all NEXT_PUBLIC_* variables are set
- ✅ Restart `npm run dev`

### "Authentication not working"
- ✅ Verify Google OAuth provider enabled in Firebase
- ✅ Check authorized domains in Firebase
- ✅ Test in incognito mode

### "Maps not loading"
- ✅ Verify Google Maps API key is correct
- ✅ Check API is enabled in Google Cloud Console
- ✅ Verify authorized domains in Google Cloud

### "404 on production"
- ✅ Verify routes exist (pages/ directory)
- ✅ Rebuild: `vercel --prod`
- ✅ Check build logs in Vercel dashboard

---

## 📊 Production Monitoring

### Firebase Analytics
- **Realtime**: Firebase Console → Analytics → Realtime
- **Traffic**: Firebase Console → Analytics → All events
- **Crashes**: Firebase Console → Crashlytics

### Vercel Analytics
- **Performance**: Dashboard → Analytics
- **Deployments**: Dashboard → Deployments
- **Logs**: Dashboard → Functions

---

## 🔐 Security Best Practices

✅ **Never commit .env.local** - Use .gitignore
✅ **Rotate API keys monthly**
✅ **Use environment-specific keys** - Dev vs Production
✅ **Enable rate limiting** on Firebase
✅ **Monitor Vercel logs** for errors
✅ **Set up alerts** for Firebase quota exceeded

---

**Your HeatShield Nexus is now live! 🛡️🚀**
