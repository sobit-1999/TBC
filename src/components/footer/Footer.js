import React from "react";
import "./footer.css";
import imgPhone from "../../img/footer/image_11.png";
import imgQR from "../../img/footer/imaga_12.jpeg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const iconsPase = [
    {name: TelegramIcon, a:'https://t.me/tbc_bank_uzb' },
    {name: InstagramIcon, a:'https://www.instagram.com/tbcbankuzbekistan/' },
    {name: LinkedInIcon, a:'https://www.linkedin.com/company/tbcbankuz/' },
    {name: FacebookIcon, a:'https://www.facebook.com/tbcbankuz' },
    {name: YouTubeIcon, a:'https://www.youtube.com/c/TBCBankuz' }
]
  const callPages = [
    {
      nameCategory: "Mahsulotlar",
      section: [
        { nameSection: "Kireditlar", to: "/kiriditlar" },
        { nameSection: "TBC Avtokredit", to: "/avtokridit" },
        { nameSection: "Depozitlar", to: "/depozitlar" },
        { nameSection: "TBC UZ ilova", to: "/tbc_ilovasi" },
        { nameSection: "TBC Start", to: "/tbc_start" },
        { nameSection: `TBC Muddatli to'lov`, to: `/muddatli_tolov` },
        { nameSection: `Pul o'tkazmalari`, to: `/pul_o'tkazmalari` },
        { nameSection: `To'lovlar`, to: `/to'lovlar` },
      ],
    },
    {
      nameCategory: "Kartalar",
      section: [
        { nameSection: "TBC Virtual kartasi", to: `/virtual_kartasi` },
        { nameSection: "TBC kartasi", to: `/lartasi` },
        { nameSection: "TBC Visa Virtual kartasi", to: `/visa_kartasi` },
      ],
    },
    {
      nameCategory: "Biz haqimizda",
      section: [
        { nameSection: "CSR-loyihalar", to: "/csr-loyihalar" },
        { nameSection: "Yangiliklar", to: "/yangiliklar" },
        { nameSection: "Bankning faoliyati va maqsadi", to: "/maqsad" },
        { nameSection: "Bankning tuzulmasi", to: "/tuzulmasi" },
        { nameSection: `Bo'sh ish o'rinlari`, to: `/ish-o'rinlari` },
        { nameSection: "Tenderlar", to: "/tenderlar" },
        { nameSection: `Bog'lanish`, to: `/bog'lanish` },
      ],
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-card1">
        <div className="footer-call">
          <div className="call-icons">
            <div>
            <h3>Baxt markazi - 1150 </h3>
            <p>Call-markaz</p>
            </div>
            <div >{iconsPase.map((icon, i) => {return <a href={icon.a} key={i}>
               < icon.name className="icon-pase"/>
            </a>})
            }</div>
          </div>
          <div className="call-pages">
            {callPages.map((item, i) => {
              return (
                <div key={i}>
                  <h3>{item.nameCategory}</h3>
                  {item.section.map((page, index) => {
                    return <p key={index}>{page.nameSection}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-icon">
          <div className="footer-icon-card">
            <div className="footer-card-phone">
              <h3>Bank doim yoningizda boʻlishi uchun ilovani oʻrnating</h3>
              <img className="img-phone" alt="icon-mobile" src={imgPhone} />
            </div>
            <div className="footer-card-phone">
              <div className="footer-tbs-app">
                <a href="https://play.google.com/store/apps/details?id=ge.space.app.uzbekistan&hl=en&gl=US">
                  <AndroidIcon className="footer-app" />
                  <span>
                    <h5>Android</h5>uchun yuklab olish
                  </span>
                </a>

                <a href="https://apps.apple.com/uz/app/tbc-uz/id1450503714">
                  <AppleIcon className="footer-app" />
                  <span>
                    <h5>iOS</h5>uchun yuklab olish
                  </span>
                </a>
              </div>
              <img className="img-qr" alt="icon-mobile" src={imgQR} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-card2">
         <h3>Anonim ishonch telefoni</h3>
      </div>
    </div>
  );
}
