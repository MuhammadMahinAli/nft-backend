import httpStatus from "http-status";
import config from "../../config/index.js";
import {ApiError} from "../../handleError/apiError.js";
import {verifyToken} from "../../utils/token.js";

// export const authorization =
//   (...roles) =>
//   async (req, res, next) => {
//     let verifiedUser = null;
//     try {
//       //get authorization token
//       const token = req.headers.authorization;
//       if (!token) {
//         throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
//       }
//       //verify token
//       verifiedUser = verifyToken(token, config.jwt.secret);

//       //   req.user = verifiedUser;
//       //   role guard
//       const {role} = verifiedUser;
//       if (roles.length > 0 && !roles.includes(role)) {
//         throw new ApiError(httpStatus.FORBIDDEN, "Request Forbidden");
//       }
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
export const authorization =
  (...roles) =>
  async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1]; // Extract token
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }

      const verifiedUser = verifyToken(token, config.jwt.secret);
      req.user = verifiedUser; // Attach user to request

      console.log(verifiedUser);

      const userRole = verifiedUser.role;
      if (roles.length > 0 && !roles.includes(userRole)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Request Forbidden");
      }

      next();
    } catch (error) {
      next(error);
    }
  };

