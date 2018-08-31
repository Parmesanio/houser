const express           = require('express'),
      bodyParser        = require('body-parser'),
      massive           = require('massive'),
      hC                = require('./controllers/house_controller'),
      path              = require('path'),
      app               = express();
      require('dotenv').config();



app.use(bodyParser.json());
const projectRoot = path.resolve(__dirname, '../');
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
    }).catch(err => console.log('Err in massive', err));
app.get('/api/homes', hC.getAll);
app.post('/api/homes', hC.create);
app.delete('/api/homes/:id', hC.delete)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

