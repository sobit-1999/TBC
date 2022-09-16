import { IconButton } from "@mui/material";
import React from "react";
import './shartlar.css'
import ClearIcon from '@mui/icons-material/Clear';

export default function Shartlar({shartlar, setShartlar, setChecked}) {
  const trueChecked = () => {
    setChecked(true)
    setShartlar(false)
  }
  return (
    <div style={{display: shartlar?'block':'none'}} className="shartlar-container">
     <div> <h1>Shartlar</h1><IconButton> <ClearIcon onClick={(e) => setShartlar(false)} /></IconButton></div>
      <p>
        Ushbu orqali siz «TBC Bank» ATBga statistik va/yoki marketing
        tadqiqotlar, so'rovnomalar, so'rovlar o'tkazishva/yoki «TBC Bank»
        ATBning yangi mahsulot va xizmatlari haqida xabardor qilish uchun
        shaxsingizga doirma'lumotlarga ishlov berishga rozilik bildirasiz. Ushbu
        rozilik muddatsiz hisoblanadi va/yoki siz tomondanixtiyoriy ravishda
        qaytarib olingan vaqtgacha amal qiladi.
      </p>
      <button onClick={trueChecked}>Men roziman</button>
    </div>
  );
}
