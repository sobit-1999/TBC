import { Box } from '@mui/system';
import React from 'react'

export default function HeaderCategory({data, index}) {
    console.log(data, index);
  return (
    <div className='header-category'>
        {index === 0? data.category.map((item, i) => {return <Box key={i}> <h3>{item.nameCategory}</h3>
        {item.section.map((item2, i) => {return <p key={i}>{item2.nameSection}</p>})}</Box>})
        :  data.category.map((item, i) => {return <Box key={i}> <h4>{item.nameCategory}</h4></Box>})}
    </div>
  )
}
