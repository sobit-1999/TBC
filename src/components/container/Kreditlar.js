import { Slide, Slider } from "@mui/material";
import React, { useState } from "react";
import ImgKredit from "../../img/image_2.jpeg";
import "./container.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Kreditlar() {
  const [valueMiqdor, setValueMiqdor] = useState(10000000);
  const [valueMuddat, setValueMuddat] = useState(12);
  const [valueStavka, setValueStavka] = useState(28);

  return (
    <div>
      <div className="container-kreditlar">
        <div className="kredit-card">
          <h3>TBC KREDIT BILAN MAQSADINGIZGA TEZROQ ERISHING</h3>
          <br />
          <h1>Ish haqingizdan 10 baravargacha ko‘p kredit</h1>
          <br /> <br />
          <p>
            50 000 000 so‘mgacha kredit oling. Kaﬁllik va daromad to‘g‘risida
            ma'lumotnoma talab etilmaydi. Har oy qaysi sanada to‘lashni o‘zingiz
            tanlaysiz.
          </p>
          <br /> <br />
          <div className="sta">
            {" "}
            <span>
              STAVKA <h2>28%</h2>DAN
            </span>{" "}
            <span>
              <h2>36</h2> OYGACHA
            </span>
          </div>
        </div>
        <img alt="Kredit" src={ImgKredit} />
      </div>

      <div className="kredit-stavkasi">
        <h2>Kredit stavkasini hisoblab oling</h2>
        <p>
          Kredit boʻyicha foiz stavkasini aniq hisoblab chiqish uchun TBC UZ
          ilovasida roʻyxatdan oʻting va kredit rasmiylashtirish uchun talabnoma
          joʻnating
        </p>
        <br />
        <div className="grid-card">
          <div className="stavka-card">
            <h6>
              <ArrowDownwardIcon className="icon" />
              Axborot varag'i
            </h6>
            <h6>
              <ArrowDownwardIcon className="icon" />
              Online kredit
            </h6>
            <h6>
              <h5>Albatta tanishib chiqing</h5>
              <ArrowDownwardIcon className="icon" />
              Mijozlarga qo'yilgan talablar
            </h6>
            <h6>
              <ArrowDownwardIcon className="icon" />
              To'lov jadvali
              <p>(aniq hisob kitob olsh uchun ilovada ariza to'ldiring)</p>
            </h6>
            <div>
              <p>Kredit miqdori</p>
              <div className="input">
                <input
                  value={valueMiqdor}
                  onChange={(e) => setValueMiqdor(e.target.value)}
                />
                <Slider
                  style={{ width: "100%" }}
                  min={500000}
                  max={50000000}
                  defaultValue={10000}
                  step={500000}
                  size="small"
                  value={valueMiqdor}
                  onChange={(e) => setValueMiqdor(e.target.value)}
                />
                <div>
                  <p>300 000 UZS dan</p> <p>50 000 000 UZS gacha</p>{" "}
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
                  min={3}
                  max={36}
                  defaultValue={12}
                  step={1}
                  size="small"
                  value={valueMuddat}
                  onChange={(e) => setValueMuddat(e.target.value)}
                />
                <div>
                  <p>3 oydan</p> <p>36 oygacha</p>{" "}
                </div>
              </div>
            </div>
            <div>
              {" "}
              <p>Kredit stavkasi</p>
              <div className="input">
                <input
                  value={valueStavka + " %"}
                  onChange={(e) => setValueStavka(e.target.value)}
                />
                <Slider
                  style={{ width: "100%" }}
                  min={28}
                  max={49}
                  defaultValue={28}
                  step={1}
                  size="small"
                  value={valueStavka}
                  onChange={(e) => setValueStavka(e.target.value)}
                />
                <div>
                  <p>28% dan</p> <p>49% gacha</p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="foiz-stavkasi">
            <p>foiz stavkasi</p>
            <h1>{valueStavka + "%"}</h1>
            <hr />
            <p>oylik to'lov</p>
            <h4>nechidir UZS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
