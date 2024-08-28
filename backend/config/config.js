import { config as conf } from "dotenv";

conf();

const _config = {
    port: process.env.PORT,
    cloudinaryClientName: process.env.CLOUDINARY_CLIENT_NAME,
    cloudinaryClientApi: process.env.CLOUDINARY_CLIENT_API,
    cloudinaryClientSecret: process.env.CLOUDINARY_CLIENT_SECRET,
    frontendUrl: process.env.FRONTEND_URL,
    mongoUri: process.env.MONGO_URI,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    jwtExpire: process.env.JWT_EXPIRE,
    cookieExpire: process.env.COOKIE_EXPIRE,
}

export const config = Object.freeze(_config);