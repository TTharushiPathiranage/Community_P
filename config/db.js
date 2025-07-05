import mongoose from "mongoose";
export const  connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Fooddb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Locally 🚀");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error);
    process.exit(1);
  }
};

// export default connectDB;

// export const  connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://mohdkhaleeq07:mohdareeb01@cluster0.lrsywjm.mongodb.net/Fooddb').then(()=>console.log("DB Connected"))
// }

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
