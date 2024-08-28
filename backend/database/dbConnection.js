import mongoose from "mongoose";
import { config } from "../config/config.js";

const dbConnection =()=>{
    mongoose.connect(config.mongoUri,{
        dbName: "MERN_STACK_JOB_APPLY"
    }).then(()=>{
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log(`Some error occur while connecting to database: ${error}`);
    });
};

export {dbConnection};