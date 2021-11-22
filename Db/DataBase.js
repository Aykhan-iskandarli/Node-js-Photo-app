const mongoose = require("mongoose");
const connectDataBase = ()=>{
    mongoose.connect(
        "mongodb+srv://pcat:pcat@cluster0.377pn.mongodb.net/Pcat?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          // useFindAndModify:false,
        }
      )
      .then(()=>console.log("Successfully connect DataBase"))
      .catch((err)=>console.log(err))
}

module.exports = connectDataBase