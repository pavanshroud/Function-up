const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    'mongodb+srv://functionup-cohort:9Kuhofudet3PqxOY@cluster0.utetgsi.mongodb.net/Pavan3819-DB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => console.log(err));

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000));
});
