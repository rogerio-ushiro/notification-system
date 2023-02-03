import NotificationService from "../services/notificationService";
import UserService from "../services/userService";
import SmsService from "../services/sms_service";
import PushNotificationService from "../services/push_notification_service";
import EmailService from "../services/email_service";
import { FINANCES, MOVIES, SPORTS } from "../models/constants/categories";
import { SMS, EMAIL, PUSH_NOTIFICATION } from "../models/constants/channel";
import Post from "../models/post";

const notificationService = new NotificationService();
const userService = new UserService();
const smsService = new SmsService();
const pushNotificationService = new PushNotificationService();
const emailService = new EmailService();

export const sendNotification = async (req, res, next) => {

    const category = req.body.category;
    const message = req.body.message;

    const promises = [];

    let users = await userService.getByCategory(category);

    await users.map(user => {

        if (user._channels.includes(SMS.name))
            promises.push(smsService.save(new Post(user._email, message, category, SMS.name)));
        if (user._channels.includes(EMAIL.name))
            promises.push(emailService.save(new Post(user._email, message, category, EMAIL.name)));
        if (user._channels.includes(PUSH_NOTIFICATION.name))
            promises.push(pushNotificationService.save(new Post(user._email, message, category, PUSH_NOTIFICATION.name)));
    });
    return "OK";
}

export const getAll = async (req, res, next) => {
    try {
        return await notificationService.getAll();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

