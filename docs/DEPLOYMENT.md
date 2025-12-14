# Deployment Guide

This guide covers deploying the Khaas Re TV application using **Vercel** (via GitHub) and **Google Cloud Run**.

## Prerequisites

- A valid `package.json` with a build script (e.g., `"build": "vite build"`).
- A `vite.config.ts` file configured for your project.

---

## Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy React/Vite applications directly from GitHub.

### Steps

1. **Push to GitHub**
   - Initialize a git repository if you haven't already: `git init`
   - Commit your code and push it to a new repository on GitHub.

2. **Connect Vercel**
   - Log in to [Vercel](https://vercel.com).
   - Click **"Add New..."** > **"Project"**.
   - Select your GitHub repository.

3. **Configure Build Settings**
   Vercel should automatically detect the settings, but verify the following:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`

4. **Environment Variables**
   - If you re-enable the AI features, add your `API_KEY` in the **Environment Variables** section.

5. **Deploy**
   - Click **Deploy**. Vercel will build your app and provide a live URL.

---

## Option 2: Google Cloud Run

To deploy to Cloud Run, you need to containerize the application using Docker.

### 1. Create Docker Configuration

Create a `Dockerfile` in your project root:

```dockerfile
# Stage 1: Build the application
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Create a default nginx config to handle client-side routing
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create a `.dockerignore` file:
```text
node_modules
dist
.git
.env
```

### 2. Deploy using Google Cloud CLI

Run the following commands in your terminal:

1. **Authenticate** (if not already done):
   ```bash
   gcloud auth login
   gcloud config set project [YOUR_PROJECT_ID]
   ```

2. **Build and Submit the Image**:
   ```bash
   gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/khaas-re-tv
   ```

3. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy khaas-re-tv \
     --image gcr.io/[YOUR_PROJECT_ID]/khaas-re-tv \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

Your app will be live at the URL provided by Cloud Run.