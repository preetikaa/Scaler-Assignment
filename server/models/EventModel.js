import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    customer_name: {
      type: String,
      required: true,
      //unique : true
    },

    date: {
      type: String,
      requiered: true,
      //default: Date.now,
    },

  
  },

  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
