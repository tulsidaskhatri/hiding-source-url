const express = require('express')
const request = require('request');

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.set('port', 9000);




app.get('/', async (req, res)=>{
    request('https://www.music-knowhow.de/', function (error, response, body) {
  
  if(response && response.statusCode === 200){
    res.json({success: true, body: body});
  }else {
    res.json({success: false, error: error});
  }
 
});

    
})
app.listen(app.get('port'), () => {
    console.log('App is running on http://localhost:%d in %s mode', app.get('port'), app.get('env'));
})