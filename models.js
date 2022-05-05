const mongoose = require("mongoose");

const staff =  mongoose.Schema({
      first_name: {
          type:String,
          required:true
      } , 
      last_name: {
          type:String,
          required:true
      },
      active:{
          type:Boolean,
          required:true
      } , 
      create_date:
      {
          type:String,
          required:true
      }  ,
      
       last_update: {
           type:String,
           required:true
       }
});

module.exports= mongoose.model("staff", staff);

