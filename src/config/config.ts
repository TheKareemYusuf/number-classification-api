import dotenv  from "dotenv";

dotenv.config();

export const CONFIG = {
    PORT: process.env.PORT,
    NUMBERS_API_URL: process.env.NUMBERS_API_URL,
};