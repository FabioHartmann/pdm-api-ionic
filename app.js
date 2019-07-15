const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const logger = require('./config/logger');

const app = express();

app.use(express.json());

app.use('/', routes);

const port = process.env.PORT;


function initApp(){
    try{ 
        app.listen(port, ()=> logger.info(`App listening on port ${port}!`));
    } catch(error){
        logger.error('initApp error:', error);
        process.exit(1);
    }
}

initApp();