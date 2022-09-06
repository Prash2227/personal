const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route');


const app = express();
const { default: mongoose } = require('mongoose')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


mongoose.connect("mongodb+srv://Prashant-8497:FZjfI0McE6kHa9II@cluster0.rgvnszv.mongodb.net/Prashant8497?retryWrites=true&w=majority", {
    useNewUrlParser: true
    
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});