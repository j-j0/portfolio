# GitHub Actions Debugging Guide

## Common Issues and Solutions

### 1. Tests Fail
**Error**: `npm test` exits with code 1
**Solution**: 
```bash
# Test locally first
npm test -- --watchAll=false
# If tests don't exist, they should pass with --passWithNoTests
```

### 2. Build Fails
**Error**: `npm run build` fails
**Solution**:
```bash
# Test locally
npm run build
# Check for any missing dependencies or syntax errors
```

### 3. Docker Build Fails
**Error**: Docker build step fails
**Solution**:
```bash
# Test Docker build locally
docker build -t test .
# Check Dockerfile syntax and paths
```

### 4. Node Version Issues
**Error**: Node version mismatch
**Solution**: Update the Node version in workflow to match your local version

### 5. Permission Issues
**Error**: Permission denied for GitHub Pages
**Solution**: Enable GitHub Pages in repository settings

## Viewing Detailed Logs

1. Go to Actions tab
2. Click on failed workflow
3. Click on failed job
4. Expand the failed step
5. Read the full error message

## Testing Workflow Changes

1. Make small changes
2. Test locally first
3. Push and monitor
4. Fix issues incrementally

## Useful Commands for Local Testing

```bash
# Install dependencies
npm ci

# Run tests
npm test -- --watchAll=false --passWithNoTests

# Build application
npm run build

# Test Docker
docker build -t portfolio-test .
docker run -p 3000:80 portfolio-test
```