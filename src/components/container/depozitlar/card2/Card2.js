import React, { useEffect, useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Slider } from "@mui/material";
import "./card2.css";

export default function Card2() {
  const [valueMiqdor, setValueMiqdor] = useState(10000000);
  const [valueMuddat, setValueMuddat] = useState(12);
  const [stavka, setStavka] = useState(null);
  const [valueBoshlangich, setvalueBoshlangich] = useState(20000000);

useEffect(() => {
    if (valueMuddat<18) {
        setStavka(18)
    }
    else if (18<= valueMuddat &&valueMuddat <24){
        setStavka(21)
    }
    else {
        setStavka(24)
    }
}, [valueMuddat])

  return (
    <div className="kredit-stavkasi">
      <h3>Daromadingizni hisoblab chiqing</h3>
      <p>
        Daromadni aniq hisoblab chiqish uchun TBC UZ ilovasini yuklang, unda
        roʻyxatdan oʻtib, depozit oching
      </p>
      <br />
      <div className="grid-card">
        <div className="stavka-card">
          <h6>
            <ArrowDownwardIcon className="icon-button" />
            Axborot varag'i
          </h6>
          <div></div>
          <div>
            <p>Depozit miqdori</p>
            <div className="input">
              <input
                value={valueMiqdor}
                onChange={(e) => setValueMiqdor(e.target.value)}
              />
              <Slider
                style={{ width: "100%" }}
                min={60000000}
                max={6000000000}
                defaultValue={100000}
                step={60000000}
                size="small"
                value={valueMiqdor}
                onChange={(e) => setValueMiqdor(e.target.value)}
              />
              <div>
                <p>10 000 000 UZS dan</p> <p>6 000 000 000 UZS gacha</p>{" "}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <p>Depozit muddati</p>
            <div className="input">
              <input
                value={valueMuddat + " Oy"}
                onChange={(e) => setValueMuddat(e.target.value)}
              />
              <Slider
                style={{ width: "100%" }}
                min={1}
                max={24}
                defaultValue={12}
                step={1}
                size="small"
                value={valueMuddat}
                onChange={(e) => setValueMuddat(e.target.value)}
              />
              <div></div>
            </div>
          </div>
          <div className="daromad-stavka">
            <div>
              <p>daromad</p>
              <h1>{valueMuddat*1.5}%</h1>
            </div>
            <div>
              <p>stavka</p>
              <h1>{stavka}%</h1>
            </div>
          </div>
        </div>
        <div className="foiz-card">
          <div className="foiz-stavkasi">
            <h5>{valueMuddat} oy ichida jamg'arilgan summa</h5>
            <h4>{(valueMuddat*1.5/100*valueBoshlangich).toFixed(0)} UZS</h4>
          </div>
        </div>
      </div>
      <div className="kredit-button">
        <button>Depozit ochish</button>
      </div>
    </div>
  );
}
