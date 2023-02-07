import UserService from "../services/userService";

const userService = new UserService();

export const getAll = async (req, res, next) => {
  try {
    return await userService.getAll();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

export const getOne = async (req, res, next) => {
  const { key } = req.body;
  try {
    res.status(200).send(await userService.getOne(key));
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};
