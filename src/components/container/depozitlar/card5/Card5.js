import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import imgIlova from "../../../../img/image-14.jpeg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import "./card5.css";
import Shartlar from "../../shartlar/Shartlar";

export default function Card5() {
  const [valueNumber, setvalueNumber] = useState(NaN);
  const [checked, setChecked] = useState(false);
  const [shartlar, setShartlar] = useState(false);
  const [checkedError, setCheckedError] = useState(false)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const checkedErrorFunction = (e) => {
     checked ? setCheckedError(false) : setCheckedError(true)
  }
  return (
    <>
      <div className="container5">
        <img alt="Ilova jpg" src={imgIlova} />
        <div>
          <div className="card5">
            <h1>Uyingizdan turib depozit oching</h1>
            <p>
              Sanoqli daqiqa ichida depozit ochib, daromad olishni boshlang.
            </p>
            <p>
              Raqamingizni kiriting, ilovani yuklab olishingiz uchun sizga
              havola yuboriladi.
            </p>
            <div className="havola">
              <input
                placeholder="XX-XXX-XX-XX"
                type="number"
                value={valueNumber}
                onChange={(e) =>
                  setvalueNumber(e.target.value)
                }
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
            <div className="xizmat-korsatish">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{color: checkedError? 'red': 'none'}}
              />
              <span>Bilan Roziman </span>
              <span className="text" onClick={(e) => setShartlar(true)}>
                {" "}
                Xizmat ko'rstaish shartlari
              </span>
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
      </div>
      <Shartlar
        shartlar={shartlar}
        setShartlar={setShartlar}
        setChecked={setChecked}
      />
    </>
  );
}
