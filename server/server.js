const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

const adminRouter = require('./routes/admin.router');
const drawingRouter = require('./routes/drawing.router');
const eventRouter = require('./routes/event.router');
const requestRouter = require('./routes/request.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

app.use('/api/admin', adminRouter);
app.use('/api/drawing', drawingRouter);
app.use('/api/event', eventRouter);
app.use('/api/event', requestRouter);

//s3 dropzone uploader image upload route
app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'drawbyyoubucket', // required
    region: 'us-east-2', // optional
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: 'public-read', // this is the default - set to `public-read` to let anyone view uploads
  })
);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
