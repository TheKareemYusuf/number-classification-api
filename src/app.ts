import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/errorController";



import numberRoutes from './routes/classifyNumberRoutes';
import AppError from "./utils/appError";




const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
    res.json({
        status: "Success",
        message:
          "Welcome to Number Classification API, kindly visit the following links for information about usage",
        Documentation_link: "Link to documentations will go here",

      });
  });

  
// classifyNumber route
app.use("/api", numberRoutes);


// unknown routes/endpoints
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  return next(
    new AppError(`unknown route!, ${req.originalUrl}  does not exist`, 404)
  );
});



app.use(globalErrorHandler);


export default app; 
