import DBConnector from "./connector";

export default class ChannelService {
  async save(newPost) {
    const db = new DBConnector();
    const client = await db.getConnection();
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
