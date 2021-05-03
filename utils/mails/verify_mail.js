const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' });

// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
// const link= 'amardeephk.xyz'
// const name = 'amardeep'
// const mail = 'ahk19ms165@iiserkol.ac.in'

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function verify_mail(mail,link,name) {
    // console.log(REFRESH_TOKEN);
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mail.oxynet@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Oxynet<mail.oxynet@gmail.com>',
      to: mail,
      subject: 'Welcome to Oxynet',
      text: 'Authorisation link'+link,
      html: `
         
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
      <meta content="width=device-width" name="viewport">
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible">
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
              body {
                  margin: 0;
                  padding: 0;
              }
      
              table,
              td,
              tr {
                  vertical-align: top;
                  border-collapse: collapse;
              }
      
              * {
                  line-height: inherit;
              }
      
              a[x-apple-data-detectors=true] {
                  color: inherit !important;
                  text-decoration: none !important;
              }
          </style>
      <style id="media-query" type="text/css">
              @media (max-width: 660px) {
      
                  .block-grid,
                  .col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                  }
      
                  .block-grid {
                      width: 100% !important;
                  }
      
                  .col {
                      width: 100% !important;
                  }
      
                  .col_cont {
                      margin: 0 auto;
                  }
      
                  img.fullwidth,
                  img.fullwidthOnMobile {
                      max-width: 100% !important;
                  }
      
                  .no-stack .col {
                      min-width: 0 !important;
                      display: table-cell !important;
                  }
      
                  .no-stack.two-up .col {
                      width: 50% !important;
                  }
      
                  .no-stack .col.num2 {
                      width: 16.6% !important;
                  }
      
                  .no-stack .col.num3 {
                      width: 25% !important;
                  }
      
                  .no-stack .col.num4 {
                      width: 33% !important;
                  }
      
                  .no-stack .col.num5 {
                      width: 41.6% !important;
                  }
      
                  .no-stack .col.num6 {
                      width: 50% !important;
                  }
      
                  .no-stack .col.num7 {
                      width: 58.3% !important;
                  }
      
                  .no-stack .col.num8 {
                      width: 66.6% !important;
                  }
      
                  .no-stack .col.num9 {
                      width: 75% !important;
                  }
      
                  .no-stack .col.num10 {
                      width: 83.3% !important;
                  }
      
                  .video-block {
                      max-width: none !important;
                  }
      
                  .mobile_hide {
                      min-height: 0px;
                      max-height: 0px;
                      max-width: 0px;
                      display: none;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide {
                      display: block !important;
                      max-height: none !important;
                  }
              }
          </style>
      <style id="icon-media-query" type="text/css">
              @media (max-width: 660px) {
                  .icons-inner {
                      text-align: center;
                  }
      
                  .icons-inner td {
                      margin: 0 auto;
                  }
              }
          </style>
      </head>
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f8f8f9;">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table bgcolor="#f8f8f9" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top;" valign="top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f8f8f9"><![endif]-->
      <div style="background-color:#1aa19c;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #1aa19c;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#1aa19c;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1aa19c;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#1aa19c"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#1aa19c;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 4px solid #1AA19C; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      
      <div style="background-color:transparent;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#f8f8f9;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:transparent;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#fff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <div align="center" class="img-container center fixedwidth" style="padding-right: 40px;padding-left: 40px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 40px;padding-left: 40px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center fixedwidth" src="https://amardeephk.xyz/oxynet_utils/images/Img1_2x.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 352px; display: block;" title="I'm an image" width="352">
      <!--[if mso]></td></tr></table><![endif]-->
      </div>
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 50px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
      <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
      <p style="margin: 0; font-size: 30px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 30px; color: #2b303a;"><strong>Verify Your Email Account</strong></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
      <div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.5; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
          <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Hey `+name+`, You are almost ready to use OXYNET. Click on the button to verify your email address.</span></p>
      <!-- <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Note: in case you forget password you can use the same link to sign-in</span></p> -->
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <div align="center" class="button-container" style="padding-top:15px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 15px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:46.5pt;width:204.75pt;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#6f50ff"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]-->
      <a href="`+link+`">
          <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#6f50ff;border-radius:60px;-webkit-border-radius:60px;-moz-border-radius:60px;width:auto; width:auto;;border-top:1px solid #6f50ff;border-right:1px solid #6f50ff;border-bottom:1px solid #6f50ff;border-left:1px solid #6f50ff;padding-top:15px;padding-bottom:15px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:30px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>Confirm Your Email</strong></span></span></div>
      </a>
      <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
      </div>
      <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
      <div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.5; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
          <!-- <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Hey `+name+`, You are almost ready to use OXYNET. Click on the big button to verify your email address.</span></p> -->
      <br>
      <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Note: in case you forget password you can use the same link to sign-in</span></p>
      <br>
      </div>
      </div>
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <!-- <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top"> -->
      </tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </div></div></div></div></div></div></td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      
      <!--<![endif]-->
      
      
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      
      
      
      <div style="background-color:transparent;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#f8f8f9;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:transparent;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #2b303a;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#2b303a;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#2b303a"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#2b303a;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
      
      </td>
      </tr>
      </tbody>
      </table>
      <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center autowidth" src="https://amardeephk.xyz/oxynet_utils/images/footer.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 640px; display: block;" title="I'm an image" width="640">
      <!--[if mso]></td></tr></table><![endif]-->
      </div>
      <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
      <div style="font-size:1px;line-height:40px">&nbsp;</div><img align="center" alt="Alternate text" border="0" class="center autowidth" src="https://amardeephk.xyz/oxynet_utils/images/white_logo.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 149px; display: block;" title="Alternate text" width="149">
      <!--[if mso]></td></tr></table><![endif]-->
      </div>
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
      <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
      <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 18px;">
      <p style="margin: 0; font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;"><span style="color: #95979c;font-size: 24px;">Terms of use:</span></p>
      <ul>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">All the information from your side should be authentic.&nbsp;</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The price of the product should not surpass the standards set by the government.</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">Availability of the stock or any price changes must be update prior</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The product provided to the consumer should be genuine and unadulterated.</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The product provided to the consumer should not have any defects, wear and tears.</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The product should be checked before selling and any issues with the product should be resolved by the seller.</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The seller will be solely responsible for any damage done because of the adulterated product.</li>
      <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">If reported, any malpractice will be liable to legal actions.</li>
      </ul>
      </div>
      <br>
      <div style="color:white">
                  Not able to click button? <a href="`+link+`" style="color:#00bfff; text-decoration: none;"><font style="color:#00bfff; text-decoration: none;">Click here</font></a>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 25px; padding-right: 40px; padding-bottom: 10px; padding-left: 40px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #555961; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 30px; font-family: Tahoma, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:30px;padding-left:40px;">
      <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:transparent;">
      <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
      <div class="col_cont" style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      
      
      
      
      <!--[if (IE)]></div><![endif]-->
      
      
      
      </body></html>
              

        `
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports= verify_mail



// function verify_mail(mail,link,name){

//     const nodemailer = require('nodemailer')
//     const dotenv = require('dotenv')
//     dotenv.config({ path: './../config.env' })


//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL,
//           pass: process.env.EMAIL_PASSWORD,
//         }
//       });
//       var mailOptions = {
//         from: process.env.EMAIL,
//         to: mail,
//         cc: ``,
//         subject: `Welcome to DNM-care`,
//         html: `
         
//         <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
//         <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
//         <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
//         <meta content="width=device-width" name="viewport">
//         <!--[if !mso]><!-->
//         <meta content="IE=edge" http-equiv="X-UA-Compatible">
//         <!--<![endif]-->
//         <title></title>
//         <!--[if !mso]><!-->
//         <!--<![endif]-->
//         <style type="text/css">
//                 body {
//                     margin: 0;
//                     padding: 0;
//                 }
        
//                 table,
//                 td,
//                 tr {
//                     vertical-align: top;
//                     border-collapse: collapse;
//                 }
        
//                 * {
//                     line-height: inherit;
//                 }
        
//                 a[x-apple-data-detectors=true] {
//                     color: inherit !important;
//                     text-decoration: none !important;
//                 }
//             </style>
//         <style id="media-query" type="text/css">
//                 @media (max-width: 660px) {
        
//                     .block-grid,
//                     .col {
//                         min-width: 320px !important;
//                         max-width: 100% !important;
//                         display: block !important;
//                     }
        
//                     .block-grid {
//                         width: 100% !important;
//                     }
        
//                     .col {
//                         width: 100% !important;
//                     }
        
//                     .col_cont {
//                         margin: 0 auto;
//                     }
        
//                     img.fullwidth,
//                     img.fullwidthOnMobile {
//                         max-width: 100% !important;
//                     }
        
//                     .no-stack .col {
//                         min-width: 0 !important;
//                         display: table-cell !important;
//                     }
        
//                     .no-stack.two-up .col {
//                         width: 50% !important;
//                     }
        
//                     .no-stack .col.num2 {
//                         width: 16.6% !important;
//                     }
        
//                     .no-stack .col.num3 {
//                         width: 25% !important;
//                     }
        
//                     .no-stack .col.num4 {
//                         width: 33% !important;
//                     }
        
//                     .no-stack .col.num5 {
//                         width: 41.6% !important;
//                     }
        
//                     .no-stack .col.num6 {
//                         width: 50% !important;
//                     }
        
//                     .no-stack .col.num7 {
//                         width: 58.3% !important;
//                     }
        
//                     .no-stack .col.num8 {
//                         width: 66.6% !important;
//                     }
        
//                     .no-stack .col.num9 {
//                         width: 75% !important;
//                     }
        
//                     .no-stack .col.num10 {
//                         width: 83.3% !important;
//                     }
        
//                     .video-block {
//                         max-width: none !important;
//                     }
        
//                     .mobile_hide {
//                         min-height: 0px;
//                         max-height: 0px;
//                         max-width: 0px;
//                         display: none;
//                         overflow: hidden;
//                         font-size: 0px;
//                     }
        
//                     .desktop_hide {
//                         display: block !important;
//                         max-height: none !important;
//                     }
//                 }
//             </style>
//         <style id="icon-media-query" type="text/css">
//                 @media (max-width: 660px) {
//                     .icons-inner {
//                         text-align: center;
//                     }
        
//                     .icons-inner td {
//                         margin: 0 auto;
//                     }
//                 }
//             </style>
//         </head>
//         <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f8f8f9;">
//         <!--[if IE]><div class="ie-browser"><![endif]-->
//         <table bgcolor="#f8f8f9" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td style="word-break: break-word; vertical-align: top;" valign="top">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f8f8f9"><![endif]-->
//         <div style="background-color:#1aa19c;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #1aa19c;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:#1aa19c;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1aa19c;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#1aa19c"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#1aa19c;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
//         <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
//         <!--<![endif]-->
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
//         <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 4px solid #1AA19C; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
        
//         </tr>
//         </tbody>
//         </table>
//         </td>
//         </tr>
//         </tbody>
//         </table>
//         <!--[if (!mso)&(!IE)]><!-->
//         </div>
//         <!--<![endif]-->
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
//         </div>
//         </div>
//         </div>
//         <div style="background-color:#fff;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#fff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
//         <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
//         <!--<![endif]-->
//         <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
//         <div style="font-size:1px;line-height:22px">&nbsp;</div><img align="center" alt="I'm an image" border="0" class="center autowidth" src="https://amardeephk.xyz/oxynet_utils/images/Companify-Logo.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 149px; display: block;" title="I'm an image" width="149">
//         <div style="font-size:1px;line-height:25px">&nbsp;</div>
//         <!--[if mso]></td></tr></table><![endif]-->
//         </div>
//         <!--[if (!mso)&(!IE)]><!-->
//         </div>
//         <!--<![endif]-->
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
//         </div>
//         </div>
//         </div>
//         <div style="background-color:transparent;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#f8f8f9;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
//         <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
//         <!--<![endif]-->
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px;" valign="top">
//         <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
//         </tr>
//         </tbody>
//         </table>
//         </td>
//         </tr>
//         </tbody>
//         </table>
//         <!--[if (!mso)&(!IE)]><!-->
//         </div>
//         <!--<![endif]-->
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
//         </div>
//         </div>
//         </div>
//         <div style="background-color:transparent;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#fff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
//         <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
//         <!--<![endif]-->
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top">
//         <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
//         </tr>
//         </tbody>
//         </table>
//         </td>
//         </tr>
//         </tbody>
//         </table>
//         <div align="center" class="img-container center fixedwidth" style="padding-right: 40px;padding-left: 40px;">
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 40px;padding-left: 40px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center fixedwidth" src="https://amardeephk.xyz/oxynet_utils/images/Img1_2x.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 352px; display: block;" title="I'm an image" width="352">
//         <!--[if mso]></td></tr></table><![endif]-->
//         </div>
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 50px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
//         <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
//         </tr>
//         </tbody>
//         </table>
//         </td>
//         </tr>
//         </tbody>
//         </table>
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
//         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
//         <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
//         <p style="margin: 0; font-size: 30px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 30px; color: #2b303a;"><strong>Verify Your Email Account</strong></span></p>
//         </div>
//         </div>
//         <!--[if mso]></td></tr></table><![endif]-->
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
//         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
//         <div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.5; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
//             <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Hey `+name+`, You are almost ready to use OXYNET. Click on the button to verify your email address.</span></p>
//         <!-- <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Note: in case you forget password you can use the same link to sign-in</span></p> -->
//         </div>
//         </div>
//         <!--[if mso]></td></tr></table><![endif]-->
//         <div align="center" class="button-container" style="padding-top:15px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 15px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:46.5pt;width:204.75pt;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#6f50ff"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]-->
//         <a href="`+link+`">
//             <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#6f50ff;border-radius:60px;-webkit-border-radius:60px;-moz-border-radius:60px;width:auto; width:auto;;border-top:1px solid #6f50ff;border-right:1px solid #6f50ff;border-bottom:1px solid #6f50ff;border-left:1px solid #6f50ff;padding-top:15px;padding-bottom:15px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:30px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>Confirm Your Email</strong></span></span></div>
//         </a>
//         <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
//         </div>
//         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
//         <div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.5; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
//             <!-- <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Hey `+name+`, You are almost ready to use OXYNET. Click on the big button to verify your email address.</span></p> -->
//         <br>
//         <p style="margin: 0; font-size: 15px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 23px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 15px;">Note: in case you forget password you can use the same link to sign-in</span></p>
//         <br>
//         </div>
//         </div>
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <!-- <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top"> -->
//         </tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
//         </tr>
//         </tbody>
//         </table>
//         </div></div></div></div></div></div></td>
//         </tr>
//         </tbody>
//         </table>
//         <!--[if (!mso)&(!IE)]><!-->
        
//         <!--<![endif]-->
        
        
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
        
        
        
//         <div style="background-color:transparent;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#f8f8f9;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
        
//         <!--<![endif]-->
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
//         </div>
//         </div>
//         </div>
//         <div style="background-color:transparent;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #2b303a;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:#2b303a;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#2b303a"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#2b303a;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
//         <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
//         <!--<![endif]-->
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
        
//         </td>
//         </tr>
//         </tbody>
//         </table>
//         <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center autowidth" src="https://amardeephk.xyz/oxynet_utils/images/footer.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 640px; display: block;" title="I'm an image" width="640">
//         <!--[if mso]></td></tr></table><![endif]-->
//         </div>
//         <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
//         <div style="font-size:1px;line-height:40px">&nbsp;</div><img align="center" alt="Alternate text" border="0" class="center autowidth" src="https://amardeephk.xyz/oxynet_utils/images/Logo-white.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 149px; display: block;" title="Alternate text" width="149">
//         <!--[if mso]></td></tr></table><![endif]-->
//         </div>
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
//         <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
//         <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 18px;">
//         <p style="margin: 0; font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;"><span style="color: #95979c;font-size: 24px;">Terms of use:</span></p>
//         <ul>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">All the information from your side should be authentic.&nbsp;</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The price of the product should not surpass the standards set by the government.</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">Availability of the stock or any price changes must be update prior</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The product provided to the consumer should be genuine and unadulterated.</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The product provided to the consumer should not have any defects, wear and tears.</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The product should be checked before selling and any issues with the product should be resolved by the seller.</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">The seller will be solely responsible for any damage done because of the adulterated product.</li>
//         <li aria-level="1" style="line-height: 1.5; mso-line-height-alt: NaNpx;">If reported, any malpractice will be liable to legal actions.</li>
//         </ul>
//         </div>
//         <br>
//         <div style="color:white">
//                     Not able to click button? <a href="`+link+`" style="color:#00bfff; text-decoration: none;"><font style="color:#00bfff; text-decoration: none;">Click here</font></a>
//         </div>
//         </div>
//         <!--[if mso]></td></tr></table><![endif]-->
//         <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 25px; padding-right: 40px; padding-bottom: 10px; padding-left: 40px;" valign="top">
//         <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #555961; width: 100%;" valign="top" width="100%">
//         <tbody>
//         <tr style="vertical-align: top;" valign="top">
//         <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
//         </tr>
//         </tbody>
//         </table>
//         </td>
//         </tr>
//         </tbody>
//         </table>
//         <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 30px; font-family: Tahoma, sans-serif"><![endif]-->
//         <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:30px;padding-left:40px;">
//         <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
//         </div>
//         </div>
//         <!--[if mso]></td></tr></table><![endif]-->
//         <!--[if (!mso)&(!IE)]><!-->
//         </div>
//         <!--<![endif]-->
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
//         </div>
//         </div>
//         </div>
//         <div style="background-color:transparent;">
//         <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
//         <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
//         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
//         <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
//         <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
//         <div class="col_cont" style="width:100% !important;">
//         <!--[if (!mso)&(!IE)]><!-->
        
//         <!--<![endif]-->
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
//         <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
//         </div>
//         </div>
//         </div>
//         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        
        
        
        
//         <!--[if (IE)]></div><![endif]-->
        
        
        
//         </body></html>        

//         `
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
// };

// module.exports= verify_mail