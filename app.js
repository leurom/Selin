const express = require('express');
const path = require('path');
const sendTextMessage = require('./public/js/send-sms');
const app = express();

//import {sendTextMessage} from './public/js/send-sms';


app.use(express.json(), express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //sendTextMessage();
    res.sendFile(path.join(__dirname, './public/html/index.html'));
});
app.get('/letsgo', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/letsgo.html'));
});
const port = process.env.PORT || 8000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});

