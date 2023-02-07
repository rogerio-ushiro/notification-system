import NotificationService from "../services/notificationService";
import UserService from "../services/userService";
import SmsService from "../services/channel_services/sms_service";
import PushNotificationService from "../services/channel_services/sms_service";
import EmailService from "../services/channel_services/email_service";
import { SMS, EMAIL, PUSH_NOTIFICATION } from "../models/constants/channel";
import Post from "../models/post";

const notificationService = new NotificationService();
const userService = new UserService();
const smsService = new SmsService();
const emailService = new EmailService();
const pushNotificationService = new PushNotificationService();

export const sendNotification = async (req) => {
  const category = req.body.category;
  const message = req.body.message;

  console.log(req.body);
  console.log(category, message);

  const promises = [];

  let users = await userService.getByCategory(category);

  await users.map((user) => {
    if (user._channels.includes(SMS.name))
      promises.push(
        smsService.save(new Post(user._email, message, category, SMS.name))
      );

    if (user._channels.includes(EMAIL.name))
      promises.push(
        emailService.save(new Post(user._email, message, category, EMAIL.name))
      );

    if (user._channels.includes(PUSH_NOTIFICATION.name))
      promises.push(
        pushNotificationService.save(
          new Post(user._email, message, category, PUSH_NOTIFICATION.name)
        )
      );
  });

  await Promise.all(promises)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getAll = async (req, res, next) => {
  try {
    return await notificationService.getAll();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};
