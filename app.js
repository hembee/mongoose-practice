const mongoose = require("mongoose");
const { User } = require("./src/models/people.model");

mongoose
  .connect("mongodb://127.0.0.1/TonyDB")
  .then(console.log("DATABASE CONNECTED"))
  .catch((e) => console.log(e.message));
run();

async function run() {

//   const tony = await User.create({
//     username: "Blax",
//     firstname: "Mubarak",
//     lastname: "Asagba",
//     age: 23,
//     address: {
//       street: "femi Phillips",
//       lga: "Ifo",
//       houseNumber: 14,
//       country: "Naija",
//     },
//     gender: "male",
//     hobbies: ["coding", "movies", "football", "music"],
//   });
  const Mujeeb = await User.create({
    username: "Uduswe",
    firstname: "Mujeeb",
    lastname: "Jeleel",
    age: 17,
    address: {
      street: "femi Phillips",
      lga: "Ifo",
      houseNumber: 112,
      country: "Togo",
    },
    gender: "male",
    hobbies: ["Garri", "movies", "football", "music"],
  });

  console.log("User saved successfully");
}
