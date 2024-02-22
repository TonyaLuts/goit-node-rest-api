const express = require("express");
const validateBody = require("../middlewares/validateBody");
const { schemas } = require("../models/user");
const usersControllers = require("../controllers/usersControllers");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerSchema),
  usersControllers.createUser
);

authRouter.post(
  "/login",
  validateBody(schemas.registerSchema),
  usersControllers.login
);

authRouter.get("/current", authenticate, usersControllers.getCurrent);

authRouter.post("/logout", authenticate, usersControllers.logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersControllers.changeAvatar
);

module.exports = authRouter;
