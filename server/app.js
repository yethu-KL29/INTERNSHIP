 const express = require( 'express' );
 const mongoose = require( 'mongoose' );
    const cors = require( 'cors' );
   
    const app = express();
    const userRouter = require("./routers/userRouter")
    
    app.use(cors())
    app.use(express.json())
   
    
    app.use("/user",userRouter)
   
   
    // Connect to MongoDB
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.kgkgfnn.mongodb.net/?retryWrites=true&w=majority")  
        .then ( () => console.log( 'MongoDB connected...' ))
        .then(app.listen(5000,()=>console.log("server running on port 5000")))
        .catch ( err => console.log( err ));
