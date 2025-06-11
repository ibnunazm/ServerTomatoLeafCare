const express = require("express");
const fs = require("fs");
const https = require("https");

const basicAuth = require("./middleware/authMiddleware")
const classificationRoutes = require("./routes/classificationRoute");
const checkRoutes = require("./routes/checkRoute");

const app = express();
const port = 8000; 

//const sslOptions = {
//    key: fs.readFileSync("./ssl/server.key"),
//    cert: fs.readFileSync("./ssl/server.crt")
//};

app.use("/tomatoleafcare", basicAuth, classificationRoutes);
app.use("/tomatoleafcare", basicAuth, checkRoutes);

//https.createServer(sslOptions, app).listen(port, () => {
//    console.log(`HTTPS Server is running on port ${port}...`);
//});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


