import puppeteer from "puppeteer";

export async function getGoogleShoppingResults(query: string, country: string) {
  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.OXYLABS_USERNAME}:${process.env.OXYLABS_PASSWORD}`
        ).toString("base64"),
    },
    body: JSON.stringify({
      source: "google_shopping_search",
      domain: "com",
      geo_location: country,
      query: query,
      parse: true,
      // context: [
      //   { key: "filter", value: "pd" }
      // ],
    }),
  });
  return response.json();
}
