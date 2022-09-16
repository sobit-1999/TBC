import React from 'react'
import imgCard from "../../../../img/tbcUzIlovasi/image-2.jpeg";
import './card2.css'

export default function Card2() {
  return (
    <div className='container2'>
        <img  img alt="Ilova jpg" src={imgCard} />
        <div className='card2'>
            <h2>2 000 000 +</h2>
            <p>nafar foydalanuvchi TBC UZ ilovasini yuklab oldi va bank bilan muloqot umuman o‘zgacha: tezkor, oson va yoqimli bo‘lishi mumkinligini tushundi. Buni siz ham sinab ko‘ring!</p>
        </div>
    </div>
  )
}
