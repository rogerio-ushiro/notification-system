import DBConnector from "./connector";

export default class notificationService {
  constructor() {}

  async getAll() {
    const db = new DBConnector();
    const client = await db.getConnection();
    let result = [];
    const promises = [];
    const listKey = await client.keys("notification:*");
    await listKey.map((key) => promises.push(client.get(key)));
    const items = await Promise.all(promises);
    await items.map((item) => result.push(JSON.parse(item)));
    return result.sort(this.custom_sort).reverse();
  }

  custom_sort(a, b) {
    return new Date(a._created).getTime() - new Date(b._created).getTime();
  }
}
