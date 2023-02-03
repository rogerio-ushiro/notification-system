import { createClient } from 'redis';
import * as dotenv from 'dotenv';

dotenv.config()
const client = createClient({ socket: { host: process.env.host, port: process.env.port } });
client.connect();
client.on('error', err => console.log('Redis Client Error', err));

export default class notificationService {
    constructor() { }

    async getAll() {
        let result = [];
        let result2 = [];
        const promises = [];
        const listKey = await client.keys("notification:*");
        await listKey.map((key) => promises.push(client.get(key)))
        const items = await Promise.all(promises);
        await items.map((item) => result.push(JSON.parse(item)))
        await items.map((item) => result.push(JSON.parse(item)))
        return result.sort(this.custom_sort).reverse();
    }

    custom_sort(a, b) {
        return new Date(a._created).getTime() - new Date(b._created).getTime();
    }

}