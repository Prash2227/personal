const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Prashant-8497:FZjfI0McE6kHa9II@cluster0.rgvnszv.mongodb.net/Prashant8497?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

  let assignment = function(req, res, next){
    let currentDate = new Date()
    let ip = req.ip
    let url = req.originalUrl

    console.log(currentDate, ip, url)
    next()
  }
  app.use(assignment)

  
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
