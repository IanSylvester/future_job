const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 25
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      Type: String,
      required: true,
      unique: false,
      minLength: 2,
      maxLength: 25
    },
    lastName: {
      Type: String,
      required: true,
      unique: false,
      minLength: 2,
      maxLength: 25
    },
    Organisation: {
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 255
        }
      })
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema)
