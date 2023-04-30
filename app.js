const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/TonyDB")
  .then(console.log("DATABASE CONNECTED"))
  .catch((e) => console.log(e.message));
run();

async function run() {
  const MySchema = await new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    address: {
      street: {
        type: String,
      },
      lga: {
        type: String,
      },
      houseNumber: Number,
      country: {
        type: String,
      },
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "LGBTV"],
    },
    hobbies: [{ type: String }],
  });

  const User = await mongoose.model("Person", MySchema);

  const tony = User.create({
    username: "Blax",
    firstname: "Mubarak",
    lastname: "Asagba",
    age: 23,
    address: {
      street: "femi Phillips",
      lga: "Ifo",
      houseNumber: 14,
      country: "Naija",
    },
    gender: "male",
    hobbies: ["coding", "movies", "football", "music"],
  });

  console.log("User saved successfully");
}
