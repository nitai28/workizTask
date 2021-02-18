const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./app/routes/routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/',routes);

app.listen(5000, () => {
    console.info('Listening on port 5000')
})