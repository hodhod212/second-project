const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', port);
app.get('/', function (req, res) {
    res.sendStatus(200);
});
app.listen(app.get('port'), () => console.log(`Server startar iport ${port}`));