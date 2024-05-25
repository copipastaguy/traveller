import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Express from "express";
import location_router from "./controllers/locations";
import connectToMongoDB from "./Database/Database";

dotenv.config();

// INIT APP
const app = Express();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());

// SET UP API ROUTES
app.use("/locations", location_router);

app.listen(process.env.SERVER_PORT, () => {
  // connectToMongoDB();
  console.log(`Server (${process.env.NODE_ENV}) running on port ${process.env.SERVER_PORT}`);
});
