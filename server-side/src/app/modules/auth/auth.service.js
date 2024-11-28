import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {User} from "../user/user.model.js";
import {createToken, verifyToken} from "../../../utils/token.js";
import config from "../../../config/index.js";

//user login
export const loginUserService = async (payload) => {
  const {email, password} = payload;
  //creating instance of user
  const user = new User();
  //checking user existence
  const isUserExist = await user.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "user doesn't found");
  }
  //checking password match
  if (isUserExist.password && !user.isPasswordMatched(password, isUserExist.password)) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "password is incorrect");
  }
  //create accesstoken
  const {email: userEmail, role} = isUserExist;
  const token = createToken({userEmail, role}, config.jwt.secret, {
    expiresIn: config.jwt.expires_in,
  });

  const refreshToken = createToken({userEmail, role}, config.jwt.refresh_secret, {expiresIn: config.jwt.refresh_expires_in});

  return {
    accessToken: token,
    refreshToken,
  };
};

///create refreshtoken
export const refreshTokenService = async (token) => {
  let verifiedToken = null;
  try {
    verifiedToken = verifyToken(token, config.jwt.refresh_secret);
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid refresh token");
  }
  const {email} = verifiedToken;
  const user = new User();
  const isUserExist = await user.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "user doesn't found");
  }
  const newAccessToken = createToken({email: isUserExist.email, role: isUserExist.role}, config.jwt.secret, {expiresIn: config.jwt.expires_in});
  return {
    accessToken: newAccessToken,
  };
};
