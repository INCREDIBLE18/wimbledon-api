# 🚀 Google Cloud Platform Deployment Guide

## Prerequisites

1. **Google Cloud Account**: https://cloud.google.com/
2. **Google Cloud CLI**: https://cloud.google.com/sdk/docs/install
3. **Docker** (for Cloud Run): https://docs.docker.com/get-docker/

## Quick Setup

### 1. Install Google Cloud CLI

**Windows:**
```powershell
# Download and install from: https://cloud.google.com/sdk/docs/install-sdk#windows
# Or use PowerShell:
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe
```

**macOS:**
```bash
curl https://sdk.cloud.google.com | bash
```

### 2. Setup Google Cloud Project

```bash
# Login to Google Cloud
gcloud auth login

# Create new project (replace with your preferred project ID)
gcloud projects create wimbledon-api-2025 --name="Wimbledon API"

# Set current project
gcloud config set project wimbledon-api-2025

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable appengine.googleapis.com
```

## Deployment Options

### Option 1: Google Cloud Run (Recommended) 🔥

**Advantages:**
- Pay-per-use (very cost-effective)
- Auto-scaling to zero
- HTTPS by default
- Easy to deploy

```bash
# Deploy directly from source code
gcloud run deploy wimbledon-api \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080

# Expected URL: https://wimbledon-api-[hash]-uc.a.run.app
```

### Option 2: Google App Engine

**Advantages:**
- Fully managed
- Built-in monitoring
- Easy scaling

```bash
# Deploy to App Engine
gcloud app deploy app.yaml

# Expected URL: https://wimbledon-api-2025.uc.r.appspot.com
```

### Option 3: Cloud Build + Cloud Run (CI/CD)

**For automated deployments:**

```bash
# Build and deploy using Cloud Build
gcloud builds submit --config cloudbuild.yaml

# This creates a CI/CD pipeline that:
# 1. Builds Docker image
# 2. Pushes to Container Registry
# 3. Deploys to Cloud Run
```

## Step-by-Step Deployment (Cloud Run)

### Step 1: Prepare Your Environment

```bash
# Verify gcloud is installed
gcloud version

# Login (opens browser)
gcloud auth login

# Set your project ID (replace with yours)
export PROJECT_ID="wimbledon-api-2025"
gcloud config set project $PROJECT_ID
```

### Step 2: Enable APIs

```bash
# Enable required Google Cloud APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### Step 3: Deploy to Cloud Run

```bash
# Navigate to your project directory
cd d:\wimbledon-api

# Deploy (this will build and deploy automatically)
gcloud run deploy wimbledon-api \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10

# Follow prompts and get your live URL!
```

### Step 4: Test Your Deployment

After deployment, you'll get a URL like:
`https://wimbledon-api-[random-id]-uc.a.run.app`

Test it:
```bash
# Health check
curl https://your-cloud-run-url.com/health

# API endpoint
curl "https://your-cloud-run-url.com/wimbledon?year=2021"
```

## Expected Response

```json
{
  "year": 2021,
  "champion": "Novak Djokovic",
  "runner_up": "Matteo Berrettini",
  "score": "6–7(4–7), 6–4, 6–4, 6–3",
  "sets": 4,
  "tiebreak": true
}
```

## Configuration Files Created

- ✅ `app.yaml` - App Engine configuration
- ✅ `Dockerfile.gcp` - Optimized Docker for GCP
- ✅ `cloudbuild.yaml` - CI/CD pipeline configuration

## Cost Estimation

### Cloud Run (Recommended)
- **Free Tier**: 2 million requests/month, 400K GB-seconds/month
- **Cost**: $0/month for light usage (perfect for this API)
- **Scaling**: Automatically scales to zero when not in use

### App Engine
- **Free Tier**: 28 instance hours/day
- **Cost**: $0/month for light usage

## Monitoring & Management

```bash
# View logs
gcloud run services logs read wimbledon-api --region us-central1

# View service details
gcloud run services describe wimbledon-api --region us-central1

# Delete service (if needed)
gcloud run services delete wimbledon-api --region us-central1
```

## Custom Domain (Optional)

```bash
# Map custom domain
gcloud run domain-mappings create \
  --service wimbledon-api \
  --domain your-domain.com \
  --region us-central1
```

## Security Features Included

- ✅ HTTPS by default
- ✅ Rate limiting (100 req/15min per IP)
- ✅ CORS protection
- ✅ Security headers (Helmet)
- ✅ Input validation
- ✅ Non-root user in container

## Troubleshooting

### Common Issues:

1. **Port Configuration**: Cloud Run uses PORT=8080 (handled automatically)
2. **Memory Limits**: Increase if needed with `--memory 1Gi`
3. **Cold Starts**: Use `--min-instances 1` to avoid cold starts
4. **Permissions**: Ensure APIs are enabled and you have proper IAM roles

### Debug Commands:

```bash
# Check service status
gcloud run services list

# View detailed service info
gcloud run services describe wimbledon-api --region us-central1

# Check logs
gcloud run services logs tail wimbledon-api --region us-central1
```

## Update Your Submission

Once deployed, update your submission email with:

```
REST API Endpoint: https://wimbledon-api-[random]-uc.a.run.app/wimbledon?year={year}
GitHub Repository: https://github.com/INCREDIBLE18/wimbledon-api
```

**Total deployment time: ~5-10 minutes** ⏱️

Ready to deploy? Run the Cloud Run deployment command above! 🚀
