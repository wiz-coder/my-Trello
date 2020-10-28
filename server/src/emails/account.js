import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const verifyUser = (req,res,next)=>{
  const msg = {
    to: `${req.body.email}`, // Change to your recipient
    from: 'uppalapraveen0707@gmail.com', // Change to your verified sender
    subject: 'Verifying the User',
    text: `http://localhost:3000/verifyUser?user=${req.token}`,
    html: `<a href='http://localhost:3000/verifyUser?user=${req.token}' target="_blank">Click on the link to verify your account</a>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.json({success:true,message:"Please go to your mail and click the link to verify"})
    })
    .catch((error) => {
      console.error(error)

    })
}

export const resetPassword = (req,res,next) => {
  const msg = {
    to: `${req.body.email}`, // Change to your recipient
    from: 'uppalapraveen0707@gmail.com', // Change to your verified sender
    subject: 'reset your password',
    text: `http://localhost:3000/resetPassword?user=${req.token}`,
    html: `<a href='http://localhost:3000/resetPassword?user=${req.token}' target="_blank">Click on the link to reset your password</a>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.json({success:true,message:"Please go to your mail and click the reset password link"})
    })
    .catch((error) => {
      console.error(error)

    })
}