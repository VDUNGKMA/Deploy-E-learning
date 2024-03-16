import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // host của email server
  port: 465, // cổng
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "daithehh04@gmail.com",
    pass: "kxfw zbgw cmne ulol",
  },
})
export const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: "daithehh04@gmail.com", // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  })
  return info
}
