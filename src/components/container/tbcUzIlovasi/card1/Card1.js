import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import imgIlova from "../../../../img/tbcUzIlovasi/image-1.jpeg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import "./card1.css";
import Shartlar from "../../shartlar/Shartlar";

export default function Card1() {
  const [valueNumber, setvalueNumber] = useState(NaN);
  const [checked, setChecked] = useState(false);
  const [shartlar, setShartlar] = useState(false);
  const [checkedError, setCheckedError] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const checkedErrorFunction = (e) => {
    checked ? setCheckedError(false) : setCheckedError(true);
  };
  return (
    <>
      <div className="tbc-uz-ilovasi-container1">
        <div>
          <div className="tbc-uz-ilovasi-card1">
            <p>Bank xizmatlaridan uyingizdan chiqmay turib foydalaning</p>
            <h1>TBC UZ ilovasini o‘z smartfoningizga yuklab oling</h1>
            <p>
              Raqamingizni kiriting va biz ilovani yuklab olishingiz uchun
              havolani sms tarzida jo‘natamiz
            </p>
            <div className="tbc-uz-ilovasi-havola1">
              <input
                placeholder="XX-XXX-XX-XX"
                type="number"
                value={valueNumber}
                onChange={(e) => setvalueNumber(e.target.value)}
              />
              <button
                style={{
                  background:
                    valueNumber.length === 9 ? "blue" : "rgb(218, 220, 206)",
                  opacity: valueNumber.length === 9 ? "1" : "0.6",
                }}
                onClick={checkedErrorFunction}
              >
                Havolani olish
              </button>
            </div>
            <div className="tbc-uz-ilovasi-xizmat-korsatish1">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color:
                    valueNumber.length === 9 && checkedError ? "red" : "none",
                }}
              />
              <span>Bilan Roziman </span>
              <span className="tbc-uz-ilovasi-text1" onClick={(e) => setShartlar(true)}>
                {" "}
                Xizmat ko'rstaish shartlari
              </span>
            </div>
            <h4>Ilovani yuklash:</h4>
            <div className="tbc-uz-ilovasi-yuklab-olish1">
              <a href="https://play.google.com/store/apps/details?id=ge.space.app.uzbekistan&hl=en&gl=US">
                <AndroidIcon className="tbc-uz-ilovasi-icon1" />
                <span>
                  <h5>Android</h5>uchun yuklab olish
                </span>
              </a>

              <a href="https://apps.apple.com/uz/app/tbc-uz/id1450503714">
                <AppleIcon className="tbc-uz-ilovasi-icon1" />
                <span>
                  <h5>iOS</h5>uchun yuklab olish
                </span>
              </a>
            </div>
          </div>
        </div>
        <img alt="Ilova jpg" src={imgIlova} />
      </div>
      <Shartlar
        shartlar={shartlar}
        setShartlar={setShartlar}
        setChecked={setChecked}
      />
    </>
  );
}
