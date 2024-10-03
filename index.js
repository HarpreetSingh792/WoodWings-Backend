import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/send-mssg", async (req, res) => {
  const { name, mail, mssg } = req.body;

  // Create transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure:true,
    port:465,
    auth: {
      user: "hs.ishu000@gmail.com", // Your organization's Gmail
      pass: "opwaybxcfzqzferx", // Use app password instead of Gmail password
    },
  });

  // Mail options for the organization
  const mailOptions = {
    from: mail,
    to: "hs.ishu000@gmail.com", // Send to organization's Gmail
    subject: `New Message from ${name}`,
    html: `Dear Amandeep Singh,
    <p style="text-align:justify;">You have received a new inquiry from ${name} via the website contact form. Below are the details of the message:</p>
    <p>Name: <b>${name}</b></p><p></p></br>
    <p>Email: <b>${mail}</b></p></br>
    <p>Message:</p></br>
    <p>${mssg}</p></br></br>


    <p>Please follow up with this user at your earliest convenience.</p></br>
    <p>Best regards,</p></br>
    <p><b>WoodWings</b></p></br>
    <p><b>woodwings@gmail.com</b></p></br>
    <p><b>woodwings.com.au</b></p>
`,
  };

  try {
    // Send email to the organization
    await transporter.sendMail(mailOptions);

    // Send a "Thank You" email back to the user
    const thankYouMailOptions = {
      from: "hs.ishu000@gmail.com",
      to: mail,
      subject: "Thank You for Your Message!",
      html: `Dear ${name},
      <p style="text-align:justify">Thank you for reaching out to us at WoodWings. We have received your message and truly appreciate your interest in our services. Your inquiry is important to us, and one of our representatives will get back to you as soon as possible.</p></br>
      <p style="text-align:justify">In the meantime, if you have any further questions or need additional information, feel free to reply to this email or visit our website at <b>${"woodwings.com.au"}</b>.</p></br>
      <p style="text-align:justify">Thank you once again for your message, and we look forward to assisting you!</p></br></br>
      <p>Best regards,</p></br>
      <p><b>WoodWings</b></p>
      <p><b>+61 0403-597-672</b></p>`,
    };

    await transporter.sendMail(thankYouMailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(3000, () => {
  console.log("Server is runing on the port: 3000");
});
