import UserService from "../services/userService";
import User from "../models/user";
import { FINANCES, MOVIES, SPORTS } from "../models/constants/categories";
import { SMS, EMAIL, PUSH_NOTIFICATION } from "../models/constants/channel";

const userService = new UserService();

export const createDefault = async (req, res, next) => {
    try {
        const user1 = new User("Foo", "foo@email.com", 555111, [FINANCES.name], [SMS.name]);
        const user2 = new User("Bar", "bar@email.com", 555222, [MOVIES.name], [SMS.name, EMAIL.name]);
        const user3 = new User("Baz", "baz@email.com", 555333, [SPORTS.name, MOVIES.name], [EMAIL.name, PUSH_NOTIFICATION.name]);

        await userService.save(user1);
        await userService.save(user2);
        await userService.save(user3);
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

export const getAll = async (req, res, next) => {
    try {
        return await userService.getAll();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

export const getOne = async (req, res, next) => {
    const { key } = req.body;
    try {
        res.status(200).send(await userService.getOne(key))
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

