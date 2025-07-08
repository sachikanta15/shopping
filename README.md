# Price Fetcher API

Scrapes Google Shopping based on query and country.

## Run Locally

```bash
npm install
npm run dev
```

## CURL Test

```bash
curl -X POST http://localhost:3000/search \
-H "Content-Type: application/json" \
-d '{"country": "US", "query": "iPhone 16 Pro, 128GB"}'
```

## Docker

```bash
docker build -t price-fetcher .
docker run -p 3000:3000 price-fetcher
```