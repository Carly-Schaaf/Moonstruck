const express = require("express");
const app = express();
const path = require('path');
const mailchimp = require('./keys').mailchimp;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})
app.use(express.static("./"));

app.get('/key', (req, res) => {
    return res.json({ key: mailchimp })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));
