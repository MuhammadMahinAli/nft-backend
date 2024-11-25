import {createTransport} from "nodemailer";
import config from "../config/index.js";
import {emailTemplate} from "./emailTemplate.js";
// initialize nodemailer
export const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // service: "gmail",
  auth: {
    user: config.company_email,
    pass: config.company_pass,
  },
});
//generating mail options
export const generateMailOptions = (options) => {
  return {
    from: config.company_email, // sender address
    to: options.email,
    subject: `Welcome to My Company, ${options.name}`,
    html: emailTemplate({name: options.name}),
    attachments: [
      {
        filename: "certificate.pdf",
        path: "certificate/certificate.pdf",
      },
    ],
  };
};
