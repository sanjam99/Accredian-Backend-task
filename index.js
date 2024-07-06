const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const referralRouter = require('./routes/referral');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', referralRouter);

// Define the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
