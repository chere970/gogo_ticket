import { desc } from "framer-motion/client";
import mongoose, { Schema } from "mongoose";

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MONGODB_URI environment variable is not defined");
}
mongoose.connect(mongoUri);
mongoose.Promise=global.Promise;

const ticketSchema = new Schema({
    title:String,
    description:String,
    category: String,
    priority: Number,
    progress: Number,
    status:String,
    active:Boolean
},{
timestamps:true,});
const Ticket=mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;