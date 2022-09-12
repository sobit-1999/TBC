import React from "react";
import "./card1.css";
import Img from "../../../../img/depozit-1.jpeg";

export default function Card1() {
  return (
      <div className="container">
        <img alt="Kredit" src={Img} />
      <div className="card">
        <h2>Kelajakdagi rejalaringiz uchun ishonchli depozit</h2>
        <br /> 
        <p>TBC Depozit pullaringizni inflyatsiyadan saqlaydi va ularni bir yilda 23 foizga koʻpaytirib beradi. Foizlar har oy toʻlab boriladi.
        </p>
        <br /> 
        <div className="stavka">
          <div>
            <h2>23%</h2>
            <h6>YILLIK DAROMAD</h6>
          </div>
          <div className="gacha">
            <h2>24/7</h2> 
            <h6>FOIZSIZ PUL TO'LDIRISH</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
