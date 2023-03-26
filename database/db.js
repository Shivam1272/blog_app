import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-6foe8rt-shard-00-00.amye6ns.mongodb.net:27017,ac-6foe8rt-shard-00-01.amye6ns.mongodb.net:27017,ac-6foe8rt-shard-00-02.amye6ns.mongodb.net:27017/?ssl=true&replicaSet=atlas-9fv7zd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
