import React from 'react'
import imgCard from "../../../../img/tbcStars/image-1.jpeg";
import './card1.css'


export default function Card1() {
  return (
    <div className='tbc-start-container1'>
       <div className='tbc-start-card1'>
        <p>TBC BANK’DAN YANGI BONUS DASTURI VA HAQIQIY SOVRINLAR</p>
        <h1>iPhone 13 va pul sovrinlarini yutib oling</h1>
        <h4>TBC UZ ilovasida bank xizmatlaridan foydalaning — pul va boshqa sovrinlarni qoʻlga kiriting.
            <br/>
            <br/>
            TBC Stars dasturida ishtirok eting!
        </h4>
        <button className='tbc-button'>Ishtirok etish</button>
       </div>
       <img alt='img' src={imgCard} />
    </div>
  )
}
