const express = require("express");
const controllers = require("../controllers/contactsControllers");
const validateBody = require("../helpers/validateBody");
const { createContactSchema } = require("../schemas/contactsSchemas.js");
const { updateContactSchema } = require("../schemas/contactsSchemas.js");

const contactsRouter = express.Router();

contactsRouter.get("/", controllers.getAllContacts);

contactsRouter.get("/:id", controllers.getOneContact);

contactsRouter.delete("/:id", controllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  controllers.createContact
);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  controllers.updateContact
);

module.exports = contactsRouter;
