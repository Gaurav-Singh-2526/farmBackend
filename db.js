const mongoose=require("mongoose")

 const Database= async () => {
    

 mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.error(err))
    .then(() => console.log("database connected succesfully"))
    .catch((error) => console.log("Database conection error", error));
    };
  
   
    Database();
    module.exports=mongoose;
    
