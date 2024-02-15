//importing express
import express from "express";
//importing mongodb
import mongoose from "mongoose";
//importing dotenv
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";

const app = express();

dotenv.config();

//middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);
 
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.mtumukv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    () => app.listen(1777),
    () => console.log("Connected to Database and Sever is running")
  )
  .catch(e => console.log(e));


//AVgwGgtBd8bXTX4L  