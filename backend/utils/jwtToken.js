import { config } from "../config/config.js";

export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(
        Date.now() + config.cookieExpire * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Set httpOnly to true
    //   secure: true //for https 
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };
  