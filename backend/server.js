import app from './app.js';
import cloudinary from "cloudinary";
import { config } from './config/config.js';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(config.port, ()=>{
    console.log(`Server is running on port number ${config.port}`)
});