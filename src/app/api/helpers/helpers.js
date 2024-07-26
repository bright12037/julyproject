import nodemailer from "nodemailer"
// send email function
export function sendOTPByEmail(email, otp) {
    try {

        // Create a nodemailer transporter with your email service settings
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use the email service you prefer
            port: 587,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject: 'Verification Code for Registration',
            text: `Your OTP (One-Time Password) for registration is: ${otp}`,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
                
            }
        });
    }
    catch (error) {
        console.log(error)
    }
}

export const generateRandomNumber = () => {
    const otp = Math.floor(Math.random() * 23456)
    return otp
}