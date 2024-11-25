import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join(process.cwd(), ".env")});
const {NODE_ENV, PORT, DATABASE_URL, DEFAULT_USER_PASS, BCRYPT_SALT_ROUNDS, JWT_SECRET, JWT_REFRESH_SECRET, JWT_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN, COM_EMAIL, COM_PASS, CROSSMINT_PROJECT_ID, CROSSMINT_CLIENT_SECRET, STRIPE_SECRET_KEY} = process.env;
export default {
  env: NODE_ENV,
  port: PORT,
  database_url: DATABASE_URL,
  default_user_pass: DEFAULT_USER_PASS,
  bcrypt_salt_rounds: BCRYPT_SALT_ROUNDS,
  company_email: COM_EMAIL,
  company_pass: COM_PASS,
  crossmint_project_id: CROSSMINT_PROJECT_ID,
  crossmint_client_secret: CROSSMINT_CLIENT_SECRET,
  stripe_secret_key: STRIPE_SECRET_KEY,
  jwt: {
    secret: JWT_SECRET,
    refresh_secret: JWT_REFRESH_SECRET,
    refresh_expires_in: JWT_REFRESH_EXPIRES_IN,
    expires_in: JWT_EXPIRES_IN,
  },
};
