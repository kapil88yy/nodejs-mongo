const express = require("express");
const userModel = require("./models");
const app = express();



app.get("/staff", async (request, response) => {
    const staff = await userModel.find({})
  
    try {
      response.send(staff);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;