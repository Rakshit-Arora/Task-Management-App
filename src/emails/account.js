const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rakshitarrora@gmail.com',
        subject: 'Thanks for Joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rakshitarrora@gmail.com',
        subject: 'Sorry to see you Go!',
        text: `Goodbye, ${name}. I hope to see you back soon!!.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}