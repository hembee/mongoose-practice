const mongoose = require("mongoose");

const MySchema = new mongoose.Schema({
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

const User = mongoose.model("Person", MySchema);

module.exports = { User };
