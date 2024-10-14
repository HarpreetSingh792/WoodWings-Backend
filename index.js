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
    host:"p3plzcpnl503493.prod.phx3.secureserver.net",
    port: 465, // TLS port
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "info@woodwings.com.au",
      pass: "23@Woodwings",
    },

  });


  const mailOptions = {
    from: "'WoodWings Team' <info@woodwings.com.au>",
    to: "info@woodwings.com.au",
    subject: `New Message from ${name}`,
    html: `Dear Amandeep Singh,
    <p style="text-align:justify;">You have received a new inquiry from ${name} via the website contact form. Below are the details of the message:</p>
    <p>Name: <b>${name}</b></p><p></p></br>
    <p>Email: <b>${mail}</b></p></br>
    <p>Message:</p></br>
    <p>${mssg}</p></br></br>


    <p>Please follow up with this user at your earliest convenience.</p></br>
    <p>Best regards,</p></br>
   
    <!-- Logo and Text Default Alignment -->
      <table style="margin: 0;">
        <tr>
          <td style="padding: 5px;">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9Wy8QA9phzfROD3602a9BEmP5gTFKJurs4pCw" style="width: 50px; height: auto;" alt="WoodWings Logo"/>
          </td>
          <td style="padding: 5px;">
            <p><b>WoodWings</b></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 5px;">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9CDvT47sd45tj79u3iMWyHblXCz86QKBwNZgc" style="width: 30px; height: auto;" alt="Website Logo"/>
          </td>
          <td style="padding: 5px;">
            <p><b>woodwings.com.au</b></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 5px; width:50px">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9ksCO0Xrqupw79mIBnSQMrhGyUotzZi2E6KTv" style="width: 30px; height: auto;" alt="mail-icon"/>
          </td>
          <td style="padding: 5px;">
            <p><b>info@woodwings.com.au</b></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 5px; width:50px">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9nNOVfNZzPKoaVyQ1jAierfdtmzMLOZ3hBI84" style="width: 30px; height: auto;" alt="phone-icon"/>
          </td>
          <td style="padding: 5px;">
            <p><b>+61 0403-597-672</b></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 5px; width:50px">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9nNOVfNZzPKoaVyQ1jAierfdtmzMLOZ3hBI84" style="width: 30px; height: auto;" alt="phone-icon"/>
          </td>
          <td style="padding: 5px;">
            <p><b>+61 0477-631-520</b></p>
          </td>
        </tr>
      </table>`,
  };

  try {
    // Send email to the organization

    await transporter.sendMail(mailOptions);

    // Send a "Thank You" email back to the user

    const thankYouMailOptions = {

      from: "'WoodWings Team' <info@woodwings.com.au>",
      to: mail,

      subject: "Thank You for Your Message!",

      html: `Dear ${name},
      <p style="text-align:justify">Thank you for reaching out to us at WoodWings. We have received your message and truly appreciate your interest in our services. Your inquiry is important to us, and one of our representatives will get back to you as soon as possible.</p></br>
      <p style="text-align:justify">In the meantime, if you have any further questions or need additional information, feel free to reply to this email or visit our website at <b>${"woodwings.com.au"}</b>.</p></br>
      <p style="text-align:justify">Thank you once again for your message, and we look forward to assisting you!</p></br></br>
      <p>Best regards,</p></br>

      <!-- Logo and Text Default Alignment -->
      <table style="margin: 0;">
        <tr>
          <td style="padding: 5px;">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9Wy8QA9phzfROD3602a9BEmP5gTFKJurs4pCw" style="width: 50px; height: auto;" alt="WoodWings Logo"/>
          </td>
          <td style="padding: 5px;">
            <p><b>WoodWings</b></p>
          </td>
        </tr>
        <tr>
        <td style="padding: 5px;">
          <img src="https://utfs.io/f/TRmbMxI5Lwa9CDvT47sd45tj79u3iMWyHblXCz86QKBwNZgc" style="width: 30px; height: auto;" alt="Website Logo"/>
        </td>
        <td style="padding: 5px;">
          <p><b>woodwings.com.au</b></p>
        </td>
      </tr>
        <tr>
          <td style="padding: 5px; width:50px">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9ksCO0Xrqupw79mIBnSQMrhGyUotzZi2E6KTv" style="width: 30px; height: auto;" alt="mail-icon"/>
          </td>
          <td style="padding: 5px;">
            <p><b>info@woodwings.com.au</b></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 5px; width:50px">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9nNOVfNZzPKoaVyQ1jAierfdtmzMLOZ3hBI84" style="width: 30px; height: auto;" alt="phone-icon"/>
          </td>
          <td style="padding: 5px;">
            <p><b>+61 0403-597-672</b></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 5px; width:50px">
            <img src="https://utfs.io/f/TRmbMxI5Lwa9nNOVfNZzPKoaVyQ1jAierfdtmzMLOZ3hBI84" style="width: 30px; height: auto;" alt="phone-icon"/>
          </td>
          <td style="padding: 5px;">
            <p><b>+61 0477-631-520</b></p>
          </td>
        </tr>
      </table>`,
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
