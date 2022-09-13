import React from "react";
import './card3.css'
export default function Card3() {
  const depozitData = [
    {
      name: "Bizga ishonishadi",
      text: "TBC depozitlari fuqarolarning banklardagi omonatlarini kafolatlash fondi himoya ostida.",
    },
    {
      name: "Summa boʻyicha cheklov yoʻq",
      text: "100 000 soʻmdan yuqori boʻlgan istalgan summaga depozit ochishingiz mumkin.",
    },
    {
      name: "Hech qayerga borishning hojati yoʻq",
      text: `Depozitni uyingizdan turib TBC UZ ilovasida sanoqli daqiqalarda ochishingiz mumkin.`,
    },
    {
      name: "Foizlar har kuni hisoblanadi",
      text: "Toʻlov esa har oy amalga oshiriladi.",
    },
  ];
  const depozitData2 = [
    {
        name: 'UZS',
        text: `Depozit valyuta - so'm`
    },{
        name: '+',
        text: `Daromadingiz oydan-oyga oshib boraveradi`
    },{
        name: '5',
        text: `Bir vaqtning o'zida 5 tagacha depozit ochishingiz mumkin`
    },{
        name: '%',
        text: `Depozit ochish uchun hech qanday komissiya to'lamaysiz`
    }
  ]
  return (
    <div className="container3">
        <p>Bizning afzalliklarimiz</p>
      <h3>TBC Depozit — pullarni koʻpaytirishning oson va xavfsiz yoʻli</h3>
      <div className="card3">
        {depozitData.map((item, i) => {
          return (
            <div key={i}>
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="container3">
        <h3>Pullaringizni inflyatsiyadan saqlang</h3>
      <div className="card3">
      {depozitData2.map((item, i) => {
          return (
              <div key={i}>
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
