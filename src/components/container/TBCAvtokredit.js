import { Checkbox, Slide, Slider } from "@mui/material";
import React, { useState } from "react";
import ImgKredit from "../../img/image_2.jpeg";
import "./container.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CoruselCard from "./CoruselCard";
import imgIlova from "../../img/image-14.jpeg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import Shartlar from "./shartlar/Shartlar";

export default function TBCAvtokridit() {
  const [valueMiqdor, setValueMiqdor] = useState(10000000);
  const [valueMuddat, setValueMuddat] = useState(12);
  const [valueStavka, setValueStavka] = useState(28);
  const [valueBoshlangich, setvalueBoshlangich] = useState(20000000);
  const [valueNumber, setvalueNumber] = useState(NaN);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const oylikTolov = (
    (valueMiqdor * (1 + valueStavka / 100)) /
    valueMuddat
  ).toFixed(2);
  const kreditRasmiylashtirish = [
    {
      name: "1 kunda aftokredit",
      text: "barcha xizmatlar bankning Toshkentdagi ofisida",
    },
    {
      name: "Bir necha soniya ichida sug'urta",
      text: "Sug'urta ilovaning o'zida rasmiylashtiriladi ",
    },
    {
      name: "Faqat 1 ta hujjat kerak",
      text: `Faqat 1 ta hujjat kerak`,
    },
    {
      name: "Avtokreditni 1 kunda uzish",
      text: "Har oy qaysi sanada to'lashni o'zingiz tanlaysiz",
    },
  ];

  return (
    <div>
      <div className="container-kreditlar">
        <div className="kredit-card">
          <h3>IKKILAMCHI BOZOR UCHUN AVTOKREDIT OLING</h3>
          <br />
          <h1>1 kunda avtokredit. Barcha xizmatlar bitta oynada</h1>
          <br /> <br />
          <p>
            Kafillik va daromad to'grisida ma'lumot kerak emas. Har oy qaysi
            sanada to'lashni o'zingiz tanlang
          </p>
          <br /> <br />
          <div className="sta">
            <span>
              <h2>25%</h2>DAN
            </span>
            <span className="gacha">
              <h2>60</h2> OYGACHA
            </span>
          </div>
        </div>
        <img alt="Kredit" src={ImgKredit} />
      </div>

      <div className="kredit-stavkasi">
        <h2>Avtokredit stavkasini hisoblab chiqing</h2>
        <p>
          - Avtokredit bo'yicha foiz stavkasini hisoblash uchun TBC UZ ilovasini
          yuklab oling, ilovada ro'yxatdan o'ting va avtokreditni
          rasmiylashtirish uchun talabnoma yuboring
        </p>
        <br />
        <div className="grid-card">
          <div className="stavka-card">
            <h6>
              <ArrowDownwardIcon className="icon-button" />
              Axborot varag'i
            </h6>
            <h6>
              <ArrowDownwardIcon className="icon-button" />
              Online mikroqarz shartnomasi nomunasi
            </h6>
            <h6>
              <h5>Albatta tanishib chiqing</h5>
              <ArrowDownwardIcon className="icon-button" />
              Mijozlarga qo'yilgan talablar
            </h6>
            <h6>
              <ArrowDownwardIcon className="icon-button" />
              To'lov jadvali
              <p>(aniq hisob kitob olsh uchun ilovada ariza to'ldiring)</p>
            </h6>
            <div className="stavka-input-card">
              <p>Kredit miqdori</p>
              <div className="input">
                <input
                  value={valueMiqdor}
                  onChange={(e) => setValueMiqdor(e.target.value)}
                />
                <Slider
                  style={{ width: "100%" }}
                  min={1000000}
                  max={200000000}
                  defaultValue={100000}
                  step={1000000}
                  size="small"
                  value={valueMiqdor}
                  onChange={(e) => setValueMiqdor(e.target.value)}
                />
                <div>
                  <p>10 000 000 UZS dan</p> <p>200 000 000 UZS gacha</p>{" "}
                </div>
              </div>
            </div>
            <div>
              {" "}
              <p>Kredit muddati</p>
              <div className="input">
                <input
                  value={valueMuddat + " Oy"}
                  onChange={(e) => setValueMuddat(e.target.value)}
                />
                <Slider
                  style={{ width: "100%" }}
                  min={6}
                  max={60}
                  defaultValue={36}
                  step={1}
                  size="small"
                  value={valueMuddat}
                  onChange={(e) => setValueMuddat(e.target.value)}
                />
                <div>
                  <p>6 oydan</p> <p>60 oygacha</p>{" "}
                </div>
              </div>
            </div>
            <div>
              <p>Kredit stavkasi</p>
              <div className="input">
                <input
                  value={valueStavka + " %"}
                  onChange={(e) => setValueStavka(e.target.value)}
                />
                <Slider
                  style={{ width: "100%" }}
                  min={25}
                  max={40}
                  defaultValue={30}
                  step={1}
                  size="small"
                  value={valueStavka}
                  onChange={(e) => setValueStavka(e.target.value)}
                />
                <div>
                  <p>25% dan</p> <p>40% gacha</p>{" "}
                </div>
              </div>
            </div>
            <div>
              <p>Boshlang'ich to'lov</p>
              <div className="input">
                <input
                  value={valueBoshlangich}
                  onChange={(e) => setvalueBoshlangich(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="foiz-card">
            <div className="foiz-stavkasi">
              <p>foiz stavkasi</p>
              <h1>{valueStavka + "%"}</h1>
              <hr />
              <p>oylik to'lov (taxminan)</p>
              <h4>{oylikTolov}</h4>
            </div>
          </div>
        </div>
        <div className="kredit-button">
          <button>Kredit olish</button>
        </div>
      </div>
      {/* card-3 */}
      <div className="kredit-rasmiylashtirish">
        <h2>Uyingizdan turib, bir necha daqiqada kredit rasmiylashtiring</h2>
        <div className="kredit-rasmiylashtirish-card">
          {kreditRasmiylashtirish.map((item, i) => {
            return (
              <div key={i}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* card-4 */}
      {/* <CoruselCard /> */}
      {/* card-5 */}
      <div className="kreit-ilova-container">
        <div>
          <div className="kreit-ilova-card">
            <h1>Avtokredit TBC UZ ilovasida 5 daqiqada</h1>
            <p>
              Kreditning maksimal summasi — 200 mln so'm. Muhim xaridni amalga
              oshirishingiz uchun
            </p>
            <div className="havola">
              <input
                placeholder="+998 XX-XXX-XX-XX"
                type="number"
                value={valueNumber}
                onChange={(e) =>
                  setvalueNumber(e.target.value) ||
                  console.log(typeof e.target.value.length)
                }
              />
              <button
                style={{
                  background:
                    valueNumber.length === 12 ? "blue" : "rgb(218, 220, 206)",
                  opacity: valueNumber.length === 12 ? "1" : "0.6",
                }}
              >
                Havolani olish
              </button>
            </div>
            <div className="xizmat-korsatish">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span>Bilan Roziman </span>
              <span className="text"> Xizmat ko'rstaish shartlari</span>
            </div>
            <h4>Ilovani yuklash:</h4>
            <div className="yuklab-olish">
              <a href="https://play.google.com/store/apps/details?id=ge.space.app.uzbekistan&hl=en&gl=US">
                <AndroidIcon className="icon" />
                <span>
                  <h5>Android</h5>uchun yuklab olish
                </span>
              </a>

              <a href="https://apps.apple.com/uz/app/tbc-uz/id1450503714">
                <AppleIcon className="icon" />
                <span>
                  <h5>iOS</h5>uchun yuklab olish
                </span>
              </a>
            </div>
          </div>
        </div>
        <img alt="Ilova jpg" src={imgIlova} />
      </div>
      <Shartlar />
    </div>
  );
}
