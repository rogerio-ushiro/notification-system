import { createClient } from "redis";
import * as dotenv from "dotenv";

dotenv.config();
const client = createClient({
  socket: { host: process.env.host, port: process.env.port },
});
client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));

export default class SmsService {
  async save(newPost) {
    return await client.set(
      "notification:" +
        newPost.category +
        ":" +
        new Date(newPost.created).getTime() +
        ":" +
        newPost.ID,
      JSON.stringify(newPost)
    );
  }
}
