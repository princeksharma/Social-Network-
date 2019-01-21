const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

router.post('/send-details', (req, res) => {
  const data = req.body;
  const { parameters } = data.result;
  const newData = new DataModel(parameters);
  newData.save().then(() => {
    res.status(200).send('Success');
  });
});

module.exports = router;
