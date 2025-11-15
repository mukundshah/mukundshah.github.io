---
title: "Cloudflare www Redirect"
description: "Redirect 'https://www' URLs to 'https://' with Cloudflare 301 Redirect, post page rule deprecation"
date: 2024-06-10 3:00:00
readingMins: 5
---

Since many websites prioritize a clean, non-www domain for user experience and SEO (Search Engine Optimization), redirects from www subdomains are commonplace. Previously, Cloudflare's Page Rules offered a straightforward solution. However, with Page Rules being deprecated, here's how to achieve www redirects using Cloudflare's alternative methods.

## Using "Redirect Rules"

![cloudflare-www-redirect](/content/cloudflare-www-redirect.png)

1. **Log in to Cloudflare** and select the desired domain.

1. Navigate to the **"Rules"** tab.

1. Click **"Create Redirect Rule"**.

1. In the **"If the URL matches"** field, enter `*www.example.com/*` (replace `example.com` with your domain).

1. In the **"Then the settings are"** field, select **"301 - Permanent Redirect"** and enter `https://example.com/$1` (replace `example.com` with your domain).

1. Click **"Save and Deploy"**.

## Using "Workers"

1. **Log in to Cloudflare** and select the desired domain.

1. Navigate to the **"Workers"** tab.

1. Click **"Create a Worker"**.

1. In the editor, replace the existing code with the following:

    ```javascript
    addEventListener('fetch', (event) => {
      event.respondWith(handleRequest(event.request))
    })

    async function handleRequest(request) {
      const url = new URL(request.url)
      if (url.hostname.startsWith('www.')) {
        url.hostname = url.hostname.replace('www.', '')
        return Response.redirect(url, 301)
      }
      return fetch(request)
    }
    ```

1. Click **"Save and Deploy"**.

By following these steps, you can effectively redirect www subdomains to non-www domains using Cloudflare's "Redirect Rules" or "Workers." This ensures a seamless transition for users and maintains SEO benefits associated with a clean domain structure.
