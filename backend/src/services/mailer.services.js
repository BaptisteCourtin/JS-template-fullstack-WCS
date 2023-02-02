require("dotenv").config();

const adminTemplate = require("./admin.template.services");

const transporter = require("./transporteur.mailer.services");

const sendMessageByMail = async (
    prenom, nom, mail, texte
) => {
    transporter.sendMail(
        {
            from: process.env.SMTP_USER,
            to: process.env.MY_MAIL,
            subject: "vous avez un nouveau message de votre site",
            text: texte,
            html: adminTemplate(prenom, nom, mail, texte),
        },
        (err, info) => {
            if (err) console.log(err);
            else {
                console.log("Email sent successfully");
                console.log("Message ID : ", info.messageId);
            }
        }
    );
};

module.exports = {
    sendMessageByMail,
};
