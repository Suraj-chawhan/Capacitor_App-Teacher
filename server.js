const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h2>AI Teacher App Backend</h2>
    <p>Go to <a href="/privacy-policy">Privacy Policy</a></p>
  `);
});

// Privacy Policy route
app.get("/privacy-policy", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Privacy Policy - AI Teacher App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 900px;
      margin: auto;
      line-height: 1.6;
    }
    h1, h2 {
      color: #222;
    }
  </style>
</head>
<body>

<h1>Privacy Policy</h1>
<p>Effective Date: ${new Date().toDateString()}</p>

<h2>1. Introduction</h2>
<p>
This AI Teacher App ("we", "our", "us") respects your privacy and is committed to protecting your personal data.
</p>

<h2>2. Information We Collect</h2>
<ul>
  <li>Personal info (name, email - if provided)</li>
  <li>Educational data (learning progress, subjects, interactions with AI tutor)</li>
  <li>Device info (device type, OS, app usage logs)</li>
</ul>

<h2>3. How We Use Data</h2>
<ul>
  <li>To provide personalized learning experiences</li>
  <li>To improve AI teaching responses and content</li>
  <li>To enhance app performance and user experience</li>
</ul>

<h2>4. AI & Learning Data Usage</h2>
<p>
Learning data is used داخل the app to improve educational recommendations and AI responses. We do not sell your personal or learning data.
</p>

<h2>5. Data Sharing</h2>
<p>
We do not sell your data. Data may be shared only with:
</p>
<ul>
  <li>Cloud services (for storage and processing)</li>
  <li>AI service providers (to generate responses)</li>
  <li>Legal authorities if required</li>
</ul>

<h2>6. Data Security</h2>
<p>
We use industry-standard security practices to protect your data.
</p>

<h2>7. User Rights</h2>
<p>
You can request to access, correct, or delete your data anytime.
</p>

<h2>8. Contact</h2>
<p>
Email: support@yourapp.com
</p>

</body>
</html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
