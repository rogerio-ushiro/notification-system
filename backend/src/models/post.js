export default class Post {
    constructor(to, message, category, channel) {
        this.created = new Date();
        this.to = to;
        this.message = message;
        this.category = category;
        this.channel = channel;
    }

    get ID() { return this._ID }
    set ID(ID) { this._ID = ID }

    get to() { return this._to }
    set to(to) { this._to = to }

    get created() { return this._created }
    set created(created) { this._created = created }

    get message() { return this._message }
    set message(message) { this._message = message }

    get category() { return this._category }
    set category(category) { this._category = category }

    get channel() { return this._channel }
    set channel(channel) { this._channel = channel }

}