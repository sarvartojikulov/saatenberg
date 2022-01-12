import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { env } from "process";

const createHTMLTemplate = (
  name: string,
  company: string,
  firmBID: string,
  productName: string,
  quantity: string,
  message: string
) => {
  return `<table style="border: 1px solid #9d9d9d;width:100%;" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding: 8px; background: #dfdfdf; width:20%;"><span style="font-family: arial, helvetica, sans-serif; font-weight: bold;">Name:</span></td>
  <td style="padding: 8px; background: #f7f7f7;"><span style="font-family: arial, helvetica, sans-serif;">${name}</span></td>
  </tr>
  <tr>
  <td style="padding: 8px; background: #f7f7f7; width:20%;"><span style="font-family: arial, helvetica, sans-serif; font-weight: bold;">Company:</span></td>
  <td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">${company}</span></td>
  </tr>
  <tr>
  <td style="padding: 8px; background: #f7f7f7; width:20%;"><span style="font-family: arial, helvetica, sans-serif; font-weight: bold;">Firm BID:</span></td>
  <td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">${firmBID}</span></td>
  </tr>
  <tr>
  <td style="padding: 8px; background: #f7f7f7; width:20%;"><span style="font-family: arial, helvetica, sans-serif; font-weight: bold;">Product:</span></td>
  <td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">${productName}</span></td>
  </tr>
  <tr>
  <td style="padding: 8px; background: #f7f7f7; width:20%;"><span style="font-family: arial, helvetica, sans-serif; font-weight: bold;">Quantity:</span></td>
  <td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">${quantity}</span></td>
  </tr>
  <tr>
  <td style="padding: 8px; background: #dfdfdf; width:20%;"><span style="font-family: arial, helvetica, sans-serif; font-weight: bold;">Message:</span></td>
  <td style="padding: 8px; background: #f7f7f7;"><span style="font-family: arial, helvetica, sans-serif;">${message}</span></td>
  </tr>
  </tbody>
  </table>`;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, company, firmBID, productName, quantity, message } = req.body;

  if (!name || !company || !firmBID || !productName || !quantity || !message)
    return res.status(400).json({ status: "BAD", message: "Inputs Error" });
  const HTMLMessage = createHTMLTemplate(
    name,
    company,
    firmBID,
    productName,
    quantity,
    message
  );

  let transporter = nodemailer.createTransport({
    host: `${env.EMAIL_HOST}`,
    port: Number(env.EMAIL_PORT),
    secure: false,
    auth: {
      user: `${env.EMAIL_USER}`,
      pass: `${env.EMAIL_PASS}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(
    {
      from: `${"website@saatenberg.com"} <${"website@saatenberg.com"}>`,
      to: "test@saatenberg.com",
      subject: "Request from website",
      text: `${message}`,
      html: HTMLMessage,
    },
    (err, info) => {
      if (err) return res.status(501).json({ status: "BAD", message: err });
      return res
        .status(200)
        .json({ status: "OK", message: "Success! Email send successfully" });
    }
  );
};
