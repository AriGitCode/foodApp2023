const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
      firstName: {type: String, required: true},
      lastName: { type: String, required: true }, //A.T
      email: { type: String, required: true, unique: true,},
      password: { type: String, required: true, minlength: 6 },
      orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
      feedbacks: { type: Array }, 
      role: {type: String, required: true, default: "user"},
      
    },

    {timestamps: true,}
  );

  const User = mongoose.model("User", userSchema, "users");

module.exports = User;