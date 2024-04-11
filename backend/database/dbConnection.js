import mongoose from "mongoose";

const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_STACK_JOB_APPLY"
    }).then(()=>{
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log(`Some error occur while connecting to database: ${error}`);
    });
};

export {dbConnection};