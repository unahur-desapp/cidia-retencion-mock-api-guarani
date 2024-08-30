const express = require('express');
const app = express();
const morgan = require('morgan');
const CareersRouter = require('./routes/careers.routes');

const port = 4000;
app.set('port', port);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/carreras', CareersRouter);

app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'));
});
