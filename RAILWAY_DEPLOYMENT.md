# Railway Deployment Guide for Wimbledon API

## 🚀 Deploy to Railway (Recommended Alternative to GCP)

Railway is an excellent cloud platform that deploys directly from GitHub with zero configuration. It's perfect for APIs like this one.

### Prerequisites
- GitHub account with the Wimbledon API repository
- Railway account (free): https://railway.app

### Deployment Steps

1. **Sign up to Railway**: https://railway.app
   - Use "Login with GitHub" for seamless integration

2. **Create New Project**:
   - Click "New Project" 
   - Select "Deploy from GitHub repo"
   - Choose your `wimbledon-api` repository

3. **Configure Environment Variables** (if needed):
   - Railway will automatically detect this is a Node.js app
   - The default PORT environment variable will be set automatically
   - Our `.env` file will be used for development defaults

4. **Deploy**:
   - Railway will automatically:
     - Detect it's a Node.js project
     - Run `npm install`
     - Start the app with `npm start`
     - Provide you with a live URL

### Expected Deployment Time: 2-3 minutes

### Post-Deployment
- You'll get a URL like: `https://wimbledon-api-production.up.railway.app`
- Test the API: `https://your-url.railway.app/wimbledon?year=2023`

## Alternative: Render.com

1. **Sign up to Render**: https://render.com
2. **New Web Service** → Connect GitHub → Select repository
3. **Settings**:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Deploy**

## Alternative: Vercel (Serverless)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

## Testing the Live API

Once deployed, test these endpoints:
- `GET /` - Health check
- `GET /api/docs` - API documentation  
- `GET /wimbledon?year=2023` - Get 2023 Wimbledon finals
- `GET /wimbledon?year=1968` - Get 1968 Wimbledon finals (first year)

## Monitoring and Logs

- **Railway**: Built-in logs and metrics in dashboard
- **Render**: Real-time logs in the dashboard
- **Vercel**: Function logs and analytics

## Cost

- **Railway**: Free tier includes 500 hours/month
- **Render**: Free tier for web services
- **Vercel**: Free tier for hobby projects

All these platforms are more beginner-friendly than Google Cloud and perfect for API deployment!
