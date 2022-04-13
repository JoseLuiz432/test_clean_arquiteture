const app = require('./index')()

    //Using 3000 for React.js :)

const http = require('http').createServer(app);

http.listen(app.get('port'), function() {
    console.log('Express Server listen: ' + app.get('port'));
    console.log('Enviroment: ', app.env);
    console.log('Debug: ', app.debug);
});