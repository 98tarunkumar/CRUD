const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5050;

const routes = require('./routes/index');
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(
    'mongodb+srv://tarun:dnzNetqRmIs2HC2e@cluster0.tpcun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on:${PORT} and DB is connected`));
  })
  .catch((err) => console.log(err.message));
