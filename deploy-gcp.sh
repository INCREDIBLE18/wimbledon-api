#!/bin/bash

# Quick Google Cloud Deployment Script for Wimbledon API
echo "🚀 Deploying Wimbledon API to Google Cloud Platform..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud CLI not found. Please install it first:"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

echo "✅ Google Cloud CLI found"

# Login check
echo "🔑 Checking authentication..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "🔐 Please login to Google Cloud..."
    gcloud auth login
fi

# Set project
echo "📋 Setting up project..."
read -p "Enter your Google Cloud Project ID (or press Enter for 'wimbledon-api-2025'): " PROJECT_ID
PROJECT_ID=${PROJECT_ID:-wimbledon-api-2025}

# Create project if it doesn't exist
if ! gcloud projects describe $PROJECT_ID &>/dev/null; then
    echo "🔨 Creating new project: $PROJECT_ID"
    gcloud projects create $PROJECT_ID --name="Wimbledon API"
fi

# Set current project
gcloud config set project $PROJECT_ID
echo "✅ Using project: $PROJECT_ID"

# Enable APIs
echo "🔧 Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
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

echo ""
echo "🎉 Deployment Complete!"
echo ""
echo "Your API is now live! Test it:"
echo "Health Check: https://wimbledon-api-[random]-uc.a.run.app/health"
echo "API Endpoint: https://wimbledon-api-[random]-uc.a.run.app/wimbledon?year=2021"
echo ""
echo "Use this URL in your submission email! 📧"
