require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./openapi.yaml');

// Injects the key from .env into the HTML automatically
app.get('/', (req, res) => {
    try {
        let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        
        const apiKey = process.env.GOOGLE_MAPS_API_KEY || "API_KEY_NOT_FOUND_IN_ENV";
        
        const personalizedHtml = html.replace('{GOOGLE_MAP_KEY}', apiKey);
        
        res.send(personalizedHtml);
    } catch (err) {
        res.status(500).send("Error: index.html not found in directory.");
    }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`\nSASE Workshop Server Started!`);
    console.log(`View Map: http://localhost:${PORT}`);
    console.log(`View Swagger: http://localhost:${PORT}/api-docs\n`);
});