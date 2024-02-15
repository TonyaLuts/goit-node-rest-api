const express = require("express");
const contactsControllers = require("../controllers/contactsControllers");
const validateBody = require("../middlewares/validateBody");
const { schemas } = require("../models/contact");
const isValidId = require("../middlewares/isValidId");
const authenticate = require("../middlewares/authenticate");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, contactsControllers.getAllContacts);

contactsRouter.get(
  "/:id",
  authenticate,
  isValidId,
  contactsControllers.getOneContact
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  contactsControllers.deleteContact
);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsControllers.updateStatusContact
);

module.exports = contactsRouter;
