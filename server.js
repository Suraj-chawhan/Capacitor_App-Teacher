const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h2>Workout App Backend</h2>
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
  <title>Privacy Policy - Workout App</title>
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
This Workout App ("we", "our", "us") respects your privacy and is committed to protecting your personal data.
</p>

<h2>2. Information We Collect</h2>
<ul>
  <li>Personal info (name, email - if provided)</li>
  <li>Workout & health data (exercise activity, fitness progress)</li>
  <li>Device info (device type, OS, app usage logs)</li>
</ul>

<h2>3. How We Use Data</h2>
<ul>
  <li>To track and improve your workouts</li>
  <li>To personalize your fitness experience</li>
  <li>To improve app performance</li>
</ul>

<h2>4. Health Data Usage</h2>
<p>
Health-related data is used only داخل the app for tracking workouts and is never sold to third parties.
</p>

<h2>5. Data Sharing</h2>
<p>
We do not sell your data. Data may be shared only with:
</p>
<ul>
  <li>Cloud services (for storage)</li>
  <li>Legal authorities if required</li>
</ul>

<h2>6. Data Security</h2>
<p>
We use industry-standard security practices to protect your data.
</p>

<h2>7. User Rights</h2>
<p>
You can request to access or delete your data anytime.
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
