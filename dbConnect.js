const mongoose = require("mongoose")

mongoose.connect(process.env.dbkey)
    
.then(() => console.log("database is connected..."))  
.catch((error)=>console.log(error))