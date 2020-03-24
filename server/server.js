const express = require('express');
const cors = require('cors')
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors())
app.use(require('./routes'))

const server = app.listen(PORT, function(){
    console.info('listening on port ' + server.address().port);
});