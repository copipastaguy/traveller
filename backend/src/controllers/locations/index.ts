import { Request, Response, Router } from "express";
import { ILocation } from "../../types/Location";
import connectToMongoDB from "../../Database/Database";
const location_router = Router();

// mock data for response
import mockdata from "../../../data.json";

location_router.get("/", (req: Request, res: Response) => {
  res.send(mockdata.locations);
});

const create_record = async ({ location, description, ratings }: ILocation) => {
  // try {
  //   const db = await connectToMongoDB();
  //   const collection = db.collection<ILocation>("locations");
  //   const record = {
  //     location,
  //     description,
  //     ratings,
  //   };
  //   const result = await collection.insertOne(record);
  //   console.log("Inserted new entry", result.insertedId);
  //   return result;
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
};

location_router.post("/", (req: Request<{}, {}, ILocation>, res: Response) => {
  const { location, description, ratings } = req.body;

  // UPDATE THE DATABASE
  create_record({ location, description, ratings }).catch(console.dir);
});

export default location_router;
