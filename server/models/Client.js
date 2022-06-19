const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  manager: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ]
  ,
});

const Client = model("Client", clientSchema);

module.exports = Client;
