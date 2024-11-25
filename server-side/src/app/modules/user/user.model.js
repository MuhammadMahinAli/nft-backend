import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config/index.js";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: 0,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: String,
    },

    role: {
      type: String,
      required: true,
      enum: ["Admin", "Seller", "Buyer", "Designer"],
    },
    
    profileImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
//check user exist
UserSchema.methods.isUserExist = async function (email) {
  const user = await User.findOne({email}, {_id: 1, email: 1, password: 1, role: 1});
  return user;
};

//pass match checking
UserSchema.methods.isPasswordMatched = async function (givenPass, savedPass) {
  return await bcrypt.compare(givenPass, savedPass);
};

//hasing password
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.password) {
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
  }
  next();
});
//create user model
export const User = model("User", UserSchema);
