const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerCofig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "antoninaluts@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerCofig);

const sendEmail = async (data) => {
  const email = { ...data, from: "antoninaluts@meta.ua" };
  await transport.sendMail(email);
  console.log("Email sent successfully");
  return true;
};

module.exports = sendEmail;
