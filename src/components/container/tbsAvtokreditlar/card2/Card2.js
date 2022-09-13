import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Slider } from "@mui/material";
import "./card2.css";

export default function Card2() {
  const [valueMiqdor, setValueMiqdor] = useState(10000000);
  const [valueMuddat, setValueMuddat] = useState(12);
  const [valueStavka, setValueStavka] = useState(28);
  const [valueBoshlangich, setvalueBoshlangich] = useState(20000000);
  const oylikTolov = (
    (valueMiqdor * (1 + valueStavka / 100)) /
    valueMuddat
  ).toFixed(2);
  return (
    <div className="kredit-stavkasi">
      <h3>Avtokredit stavkasini hisoblab chiqing</h3>
      <p>
        - Avtokredit bo'yicha foiz stavkasini hisoblash uchun TBC UZ ilovasini
        yuklab oling, ilovada ro'yxatdan o'ting va avtokreditni rasmiylashtirish
        uchun talabnoma yuboring
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
  );
}
