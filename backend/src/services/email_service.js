import { EMAIL } from "../models/constants/channel";
import { createClient } from 'redis';
import * as dotenv from 'dotenv';

dotenv.config()
const client = createClient({ socket: { host: process.env.host, port: process.env.port } });
client.connect();
client.on('error', err => console.log('Redis Client Error', err));

export default class EmailService {
    async save(newPost) {
        await client.set(
            "notification:" +
            ":" + EMAIL.name +
            ":" + newPost.created,
            JSON.stringify(newPost));
        return newPost;
    }

}