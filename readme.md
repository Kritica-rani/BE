# CrUX Analyzer Backend

A Node.js backend using Express to fetch Chrome UX Report (CrUX) metrics from Google's `chromeuxreport.googleapis.com` API.

---

## Features

- Accepts a list of URLs via POST request
- Fetches web performance metrics:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - Interaction to Next Paint (INP)
  - Time to First Byte (TTFB)
- Gracefully handles success and error responses
- Dockerized for easy deployment

---

## 🛠 Tech Stack

- Node.js
- Express
- Axios
- Docker

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/crux-analyzer-backend.git
cd crux-analyzer-backend
```

## Install dependencies

- npm install

## .env file in root directory

- CRUX_API_KEY=your_google_crux_api_key
- PORT=3000

## Docker Setup

- docker build -t crux-analyzer-backend
- docker run -p 3000:3000

## API Usage

- Request Body
  {
  "urls": [
  "https://www.example.com",
  "https://www.anotherexample.com"
  ]
  }

- Response
  {
  "results": [
  {
  "url": "https://www.example.com",
  "status": "success",
  "data": {
  // CrUX metrics data
  }
  },
  {
  "url": "https://www.anotherexample.com",
  "status": "error",
  "error": "Invalid URL"
  }
  ]
  }

## Postman or cURL:

curl 'https://be-ajov.onrender.com/api/crux' \
 -H 'accept: _/_' \
 -H 'accept-language: en-US,en;q=0.9,te;q=0.8,hi;q=0.7' \
 -H 'content-type: application/json' \
 -H 'origin: https://my-react-app-nine-pied.vercel.app' \
 -H 'priority: u=1, i' \
 -H 'referer: https://my-react-app-nine-pied.vercel.app/' \
 -H 'sec-ch-ua: "Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"' \
 -H 'sec-ch-ua-mobile: ?0' \
 -H 'sec-ch-ua-platform: "macOS"' \
 -H 'sec-fetch-dest: empty' \
 -H 'sec-fetch-mode: cors' \
 -H 'sec-fetch-site: cross-site' \
 -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \
 --data-raw '{"urls":["https://www.youtube.com/","https://www.google.com/"]}'
