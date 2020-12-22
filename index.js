const express = require('express');
const app = express();
const { dbConnect } = require('./db');
const { errorHandler } = require('./utils/errorHandler');
const CompanyRouter = require('./Routes/companyRoutes');
require('dotenv').config();

process.on('uncaughtException', (err) => {
  console.log({
    ERROR_NAME: err.name,
    ERROR_MESSAGE: err.message,
    ERROR_STACK: err.stack,
  });
  process.exit(1);
});
dbConnect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'server is up' });
});

app.use('/api', CompanyRouter);

app.all('*', (req, res, next) => {
  // res.status(500).json({ status: 'this doesnt work out' });
  const err = new Error('something went wrong');
  err.status = 'fail';
  err.statusCode = '500';
  next(err);
});

app.use(errorHandler);
const server = app.listen(8080, () => console.log('server is up'));

process.on('unhandledRejection', (err) => {
  console.log({
    ERROR_NAME: err.name,
    ERROR_MESSAGE: err.message,
    ERROR_STACK: err.stack,
  });
  server.close(() => process.exit(1));
});
