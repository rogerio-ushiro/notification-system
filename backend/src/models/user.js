export default class User {
    constructor(name, email, phone, subscribed = [], channels = []) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.subscribed = subscribed;
        this.channels = channels;
    }

    get name() { return this._name }
    set name(name) { this._name = name }

    get email() { return this._email }
    set email(email) { this._email = email }

    get phone() { return this._phone }
    set phone(phone) { this._phone = phone }

    get subscribed() { return this._subscribed }
    set subscribed(subscribed) { this._subscribed = subscribed }

    get channels() { return this._channels }
    set channels(channels) { this._channels = channels }

}