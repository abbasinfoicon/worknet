import mongoose from "mongoose";

const ConnectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "worknet",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log(`Connection Successful on ${DATABASE_URL}`);
  } catch (error) {
    console.log("Database Connection Failed...!!!", error);
  }
};

export default ConnectDB;
