import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/dbConnect.js";
import userRoute from "./routes/user.routes.js"

dotenv.config({});
connectDB()

const app = express();

const PORT = process.env.PORT || 3000;

//api
app.use("/api/v1/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
}
  )