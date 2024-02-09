const express = require("express");
const controllers = require("../controllers/contactsControllers");
const validateBody = require("../helpers/validateBody");
const { schema } = require("../models/contact");
const isValidId = require("../helpers/isValidId");

const contactsRouter = express.Router();

contactsRouter.get("/", controllers.getAllContacts);

contactsRouter.get("/:id", isValidId, controllers.getOneContact);

contactsRouter.delete("/:id", isValidId, controllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(schema.createContactSchema),
  controllers.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(schema.updateContactSchema),
  controllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schema.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = contactsRouter;
