# SASE API Workshop Demo
Welcome! Follow these steps to spin up the demo.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- A Google Account

## Step 1: Get your Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project: **SASE-Workshop**.
3. Go to **APIs & Services > Library** and search for "Maps JavaScript API". Click **Enable**.
4. Go to **APIs & Services > Credentials**. Click **Create Credentials > API Key**.
5. Copy your key and paste it in `index.html` where it says `YOUR_API_KEY`.

## Step 2: Spin up the Local API
1. Open your terminal in this folder.
2. Run `npm install` to get the tools.
3. Run `node server.js` to start the server.
4. Visit `http://localhost:3000/api-docs` to see Swagger UI!