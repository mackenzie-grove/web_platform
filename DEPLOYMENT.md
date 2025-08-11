# Google Cloud Run Deployment Guide

This guide will help you deploy the Grove Web Platform to Google Cloud Run with automatic CI/CD.

## Prerequisites

1. **Google Cloud Account** with billing enabled
2. **Google Cloud SDK** installed locally
3. **Git repository** connected to Google Cloud Source Repositories or GitHub

## Step 1: Set up Google Cloud Project

### 1.1 Create a new project or select existing one
```bash
# Create new project (replace PROJECT_ID with your desired ID)
gcloud projects create PROJECT_ID --name="Grove Web Platform"

# Set the project
gcloud config set project PROJECT_ID
```

### 1.2 Enable required APIs
```bash
# Enable necessary Google Cloud APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable sourcerepo.googleapis.com
```

### 1.3 Set up authentication
```bash
# Authenticate with Google Cloud
gcloud auth login

# Set up application default credentials
gcloud auth application-default login
```

## Step 2: Connect Your Repository

### Option A: Using Google Cloud Source Repositories

1. **Create a source repository:**
```bash
gcloud source repos create grove-web-platform
```

2. **Add Google Cloud as a remote:**
```bash
git remote add google https://source.developers.google.com/p/PROJECT_ID/r/grove-web-platform
```

3. **Push your code:**
```bash
git push google main
```

### Option B: Using GitHub (Recommended)

1. **Connect GitHub to Google Cloud:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to Cloud Build > Triggers
   - Click "Connect Repository"
   - Select GitHub and authorize access
   - Choose your repository

## Step 3: Set up Cloud Build Trigger

### 3.1 Create build trigger via Console (Recommended)
1. Go to **Cloud Build > Triggers**
2. Click **"Create Trigger"**
3. Configure:
   - **Name:** `grove-web-platform-deploy`
   - **Event:** Push to a branch
   - **Source:** Your connected repository
   - **Branch:** `^main$` (or your deployment branch)
   - **Configuration:** Cloud Build configuration file
   - **Cloud Build configuration file location:** `cloudbuild.yaml`

### 3.2 Or create via command line
```bash
# For GitHub repositories
gcloud builds triggers create github \
  --repo-name=grove-web-platform \
  --repo-owner=YOUR_GITHUB_USERNAME \
  --branch-pattern=^main$ \
  --build-config=cloudbuild.yaml \
  --name=grove-web-platform-deploy

# For Cloud Source Repositories
gcloud builds triggers create cloud-source-repositories \
  --repo=grove-web-platform \
  --branch-pattern=^main$ \
  --build-config=cloudbuild.yaml \
  --name=grove-web-platform-deploy
```

## Step 4: Grant Cloud Build Permissions

```bash
# Get your project number
PROJECT_NUMBER=$(gcloud projects describe PROJECT_ID --format="value(projectNumber)")

# Grant Cloud Run Admin role to Cloud Build
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

# Grant Service Account User role
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

## Step 5: Deploy Your Application

### 5.1 Automatic Deployment (Recommended)
Simply push to your main branch:
```bash
git add .
git commit -m "Deploy to Cloud Run"
git push origin main
```

The Cloud Build trigger will automatically:
1. Build your Docker image
2. Push to Container Registry
3. Deploy to Cloud Run

### 5.2 Manual Deployment
```bash
# Build and submit to Cloud Build
gcloud builds submit --config cloudbuild.yaml .

# Or deploy directly
gcloud run deploy grove-web-platform \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Step 6: Configure Custom Domain (Optional)

### 6.1 Map custom domain
```bash
# Map your domain to Cloud Run service
gcloud run domain-mappings create \
  --service grove-web-platform \
  --domain your-domain.com \
  --region us-central1
```

### 6.2 Verify domain ownership
Follow the DNS verification steps provided by Google Cloud.

## Environment Configuration

### Production Environment Variables
Add environment variables in `cloudbuild.yaml` or via Cloud Run console:
- `NODE_ENV=production`
- Any API keys or configuration needed

### Custom Configuration
Modify `cloudbuild.yaml` to adjust:
- **Memory allocation:** `--memory 512Mi` (can increase to 1Gi, 2Gi, etc.)
- **CPU allocation:** `--cpu 1` (can increase to 2, 4, etc.)
- **Max instances:** `--max-instances 100`
- **Region:** `--region us-central1` (change as needed)

## Monitoring and Logs

### View deployment logs
```bash
# View Cloud Build logs
gcloud builds list --limit=10

# View specific build
gcloud builds log BUILD_ID
```

### View Cloud Run logs
```bash
# View service logs
gcloud run services logs read grove-web-platform --region=us-central1

# Follow logs in real-time
gcloud run services logs tail grove-web-platform --region=us-central1
```

## Security Best Practices

1. **Use IAM roles** with minimal required permissions
2. **Enable VPC connector** for private network access if needed
3. **Set up SSL certificates** for custom domains
4. **Configure firewall rules** if restricting access
5. **Use Secret Manager** for sensitive configuration

## Troubleshooting

### Common Issues

1. **Build fails:** Check `cloudbuild.yaml` syntax and file paths
2. **Permission denied:** Ensure Cloud Build service account has proper IAM roles
3. **Container won't start:** Check Dockerfile and nginx configuration
4. **Routes not working:** Ensure nginx.conf handles React Router correctly

### Useful Commands
```bash
# Check Cloud Run service status
gcloud run services describe grove-web-platform --region=us-central1

# Update service configuration
gcloud run services update grove-web-platform \
  --memory 1Gi \
  --region us-central1

# Delete service
gcloud run services delete grove-web-platform --region=us-central1
```

## Cost Optimization

1. **Set appropriate resource limits** in `cloudbuild.yaml`
2. **Use Cloud Run's pay-per-use model** - only pay for requests
3. **Monitor usage** in Cloud Console billing section
4. **Set up budget alerts** to avoid unexpected costs

## Next Steps

After successful deployment:
1. Set up monitoring with Google Cloud Monitoring
2. Configure custom domain and SSL certificates
3. Set up staging environment for testing
4. Implement proper CI/CD workflow with testing stages

Your Grove Web Platform should now be accessible at the Cloud Run URL provided after deployment!