import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import imgIlova from "../../../../img/tbcUzIlovasi/image-3.jpeg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import "./card3.css";
import Shartlar from "../../shartlar/Shartlar";

export default function Card3() {
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
      <div className="tbs-uz-ilovasi-container3">
        <div>
          <div className="tbs-uz-ilovasi-card3">
            {/* <p>Bank xizmatlaridan uyingizdan chiqmay turib foydalaning</p> */}
            <h1>Barcha kartalarni nazorat ostida saqlang</h1>
            <p>
              Bir necha daqiqada ularning balansini tekshiring, pul o'tkazing va
              xizmatlar uchun to'lang
            </p>
            <p>
              RAQAMINGIZNI KIRITING VA BIZ ILOVANI YUKLAB OLISH UCHUN HAVOLA
              JOʻNATAMIZ
            </p>
            <div className="tbc-uz-ilovasi-havola">
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
            <div className="tbc-uz-ilovasi-xizmat-korsatish">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color:
                    valueNumber.length === 9 && checkedError ? "red" : "rgba(54, 144, 199, 0.437)",
                }}
              />
              <span>Bilan Roziman </span>
              <span
                className="tbc-uz-ilovasi-text"
                onClick={(e) => setShartlar(true)}
              >
                {" "}
                Xizmat ko'rstaish shartlari
              </span>
            </div>
            <div className="tbc-uz-ilovasi-yuklab-olish">
              <a href="https://play.google.com/store/apps/details?id=ge.space.app.uzbekistan&hl=en&gl=US">
                <AndroidIcon className="tbc-uz-ilovasi-icon" />
                <span>
                  <h5>Android</h5>uchun yuklab olish
                </span>
              </a>

              <a href="https://apps.apple.com/uz/app/tbc-uz/id1450503714">
                <AppleIcon className="tbc-uz-ilovasi-icon" />
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
