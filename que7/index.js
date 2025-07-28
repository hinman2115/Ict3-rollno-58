const fetch = require('node-fetch');
async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com',{
        Headers:{"User-Agent":"Mozilla/5.0"}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const body = await response.text();
    console.log("Fetched Google homepage content:");
    console.log(body.slice(0, 500)); // Show only first 500 characters
  } catch (error) {
    console.error("Error fetching Google page:", error.message);
  }
}

fetchGoogleHomePage();
