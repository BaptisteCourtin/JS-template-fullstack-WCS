const { sendMessageByMail } = require('./mailer.services');

const emailSender = async (req, res) => {
    const { prenom, nom, mail, texte } = req.body;
    try {
        let result = await sendMessageByMail(prenom, nom, mail, texte);
        console.log(result);
        res.status(200).json({ sucess: true, msg: "email sent" });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    emailSender,

};