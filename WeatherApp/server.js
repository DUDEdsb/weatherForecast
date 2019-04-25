const express = require('express');
const server = express();


server.use(express.json());
server.use(express.urlencoded({ 
    extended: true 
}));
server.use('/',
express.static(__dirname + '/public/dist/WeatherForecast')
);
const PORT = process.env.PORT || 4200;
server.listen(PORT);