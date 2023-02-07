import { createClient } from "redis";
import * as dotenv from "dotenv";

dotenv.config();
const client = createClient({
  socket: { host: process.env.host, port: process.env.port },
});
client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));

export default class userService {
  constructor() {}

  async save(value) {
    await client.set("user:" + value.email, JSON.stringify(value));
  }

  async getAll() {
    const promises = [];
    const usersKey = await client.keys("user:*");
    await usersKey.map((key) => promises.push(this.getOne(key)));
    return await Promise.all(promises);
  }

  async getOne(key) {
    return JSON.parse(
      await client.get(key.startsWith("user:") ? key : "user:" + key)
    );
  }

  async getByCategory(category) {
    const result = [];
    const users = await this.getAll();
    users.map((user) => {
      if (user._subscribed.includes(category)) result.push(user);
    });
    return result;
  }
}
