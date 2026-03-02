# Deployment Guide for Hostinger

This guide provides step-by-step instructions for deploying the **WeBuy** project (a Vite-based React application) to Hostinger.

## Prerequisites
- Access to your Hostinger hPanel.
- Node.js and npm installed on your local machine.

---

## Step 1: Generate the Production Build

Before uploading, you must create a minified production build of your project.

1. Open your terminal in the project root directory.
2. Run the following command:
   ```bash
   npm run build
   ```
3. Once the command finishes, a folder named `dist` will be created in your project root. This folder contains all the files needed for the website (HTML, CSS, JS, and assets).

---

## Step 2: Upload Files to Hostinger

1. Log in to your **Hostinger hPanel**.
2. Navigate to **Websites** and click **Manage** for your domain.
3. Find and click on **File Manager**.
4. Navigate to the `public_html` directory (this is where your website's public files reside).
5. Delete any default files like `default.php` or `index.php` if they are not yours.
6. Open the `dist` folder on your local computer.
7. **Upload the contents** of the `dist` folder (not the `dist` folder itself, but the files/folders inside it) to the `public_html` directory on Hostinger.

---

## Step 3: Handle Client-Side Routing (Optional but Recommended)

Since this is a React application, if you add subpages in the future using React Router, you will need a `.htaccess` file to handle page refreshes correctly.

1. In the `public_html` folder on Hostinger, create a new file named `.htaccess`.
2. Paste the following code into the file and save it:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Step 4: Verify Deployment

1. Visit your domain in a web browser.
2. Ensure everything loads correctly (images, styles, and animations).
3. Check the **Contact** and **Testimonials** sections to confirm the latest updates are visible.

---

## Troubleshooting
- **Images not loading**: Ensure the `assets` folder from `dist` was uploaded correctly.
- **Vite/Build Errors**: If the build fails locally, ensure all dependencies are installed using `npm install`.
- **Cache**: If you don't see changes after uploading, try clearing your browser cache or Hostinger's server cache.

---
*Created by: Sanket*
