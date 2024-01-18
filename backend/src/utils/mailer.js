const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  pool: true,
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "bboudrioux@gmail.com",
    pass: "xbYrkzmpwC3U2MRv",
  },
});

mailer.verify((error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("Mailer server is ready to take our messages");
  }
});

const sendConfirmationMail = async (dest, token) => {
  const message = {
    from: "bboudrioux@gmail.com",
    to: dest,
    subject: "OriginDigital : confirmer votre email",
    html: `<a href="http://localhost:3310/api/users/validate?token=${token}">Confirmer votre email</a>`,
  };
  await mailer.sendMail(message);
};

module.exports = {
  sendConfirmationMail,
};
