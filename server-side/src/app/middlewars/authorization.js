import httpStatus from "http-status";
import config from "../../config/index.js";
import { ApiError } from "../../handleError/apiError.js";
import { verifyToken } from "../../utils/token.js";
import { getSingleUserService } from "./../../app/modules/user/user.service.js";

export const authorization =
  (...roles) =>
  async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1]; // Extract token
      if (!token) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "You are not Authenticated"
        );
      }

      const verifiedUser = verifyToken(token, config.jwt.secret);
      const user = await getSingleUserService(verifiedUser.userEmail);
      req.user = user; // Attach user to request

      const userRole = verifiedUser.role;
      if (roles.length > 0 && !roles.includes(userRole)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Request Forbidden");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
