import { createClient } from 'redis';
import * as dotenv from 'dotenv';

dotenv.config()
const client = createClient({ socket: { host: process.env.host, port: process.env.port } });

export default class PostFactory {
    constructor() {
        try {
            client.connect();
            client.flushAll();
            client.on('error', err => console.log('Redis Client Error', err));
        } catch (error) {
            console.error(error);
        }
    }

    async save(newPost) {
        await client.set(
            "post:" + newPost.category + ":" + newPost.created,
            JSON.stringify(newPost));
    }

    async findAll() {
        const promises = [];
        const usersKey = await client.keys("post:*");
        await usersKey.map((key) => promises.push(client.get(key)))
        return JSON.parse(await Promise.all(promises));
    }

    async findByCategory(category) {
        const promises = [];
        const usersKey = await client.keys("post:" + category + "*");
        await usersKey.map((key) => promises.push(client.get(key)))
        return JSON.parse(await Promise.all(promises));
    }


};