import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from '../../img/image_icon.svg'
import { margin } from '@mui/system';
import './header.css'
import { Button, MenuItem, Select } from '@mui/material';
import HeaderCategory from './HeaderCategory';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  padding: theme.spacing(2),
  transform: 'scale(0.9)'
  
}));

export default function ProminentAppBar() {

    const [selectValue, setSelectValue] = React.useState("Uz")

    const categoryHeader = [
        {
            name: 'Mahsulotlar',
            category: [
              {  nameCategory: 'TBC Bank',
                 section: [
                   { nameSection: 'Kireditlar', to:'/kiriditlar'}, 
                   { nameSection: 'TBC Avtokredit',  to:'/avtokridit'}, 
                   { nameSection: 'Depozitlar', to:'/depozitlar'},  
                   { nameSection: 'TBC UZ ilova',  to:'/tbc_ilovasi'}, 
                   { nameSection: 'TBC Start',  to:'/tbc_start'}, 
                   { nameSection: `TBC Muddatli to'lov`,  to:`/muddatli_tolov`} 
                ]
              },
              {  nameCategory: `Pul o'tkazmalari va to'lovlar`,
                 section: [ 
                    { nameSection: `Pul o'tkazmalari` ,  to:`/pul_o'tkazmalari`}, 
                    { nameSection: `To'lovlar`, to:`/to'lovlar`}, 
                 ]
              },
              {  nameCategory: 'Kartalar',
                 section: [ 
                    { nameSection: 'TBC Virtual kartasi', to:`/virtual_kartasi`},
                    { nameSection: 'TBC kartasi', to:`/lartasi`},
                    { nameSection: 'TBC Visa Virtual kartasi', to:`/visa_kartasi`},
                    { nameSection: 'TBC Muddatli tolov', to:`/muddatli_to'lov`},
                ]
              },
              {  nameCategory: 'Yordam',
                 section: [
                   { nameSection: 'TBC Depozit', to:'/yordam_depozit'}, 
                   { nameSection: 'TBC Start',  to:'/yordam_start'}, 
                   { nameSection: 'TBC Visa Virtual kartasi', to:'/yordam_visa_karta'},  
                   { nameSection: `TBC UZ pul o'tkazmalar `,  to:`/yordam_pul_o'tkazmalar`}, 
                   { nameSection: 'TBC Virtual kartasi',  to:'/yordam_virtual_kartasi'}, 
                   { nameSection: `Muddatli TBC depozit`,  to:`/yordam_muddatli_depozit`}, 
                   { nameSection: 'TBC UZ ilovasi',  to:'/yordam_ilovasi'}, 
                   { nameSection: 'TBC Avtokridit', to:'/yordam_Avtokiridit'},  
                   { nameSection: `TBC to'lovlar `,  to:`/yordam_to'lovlar`}, 
                   { nameSection: 'TBC kartasi',  to:'/yordam_kartasi'}, 
                   { nameSection: `TBC Kredit`,  to:`/yordam_kredit`} 
                ]
              },
            ]
        },
        {
            name: 'Biz haqimizda',
            category: [
                {  nameCategory: 'CSR-loyihalar', to: '/csr-loyihalar'} ,
                {  nameCategory: 'Yangiliklar', to: '/yangiliklar'} ,
                {  nameCategory: 'Bankning faoliyati va maqsadi', to: '/maqsad'} ,
                {  nameCategory: 'Bankning tuzulmasi', to: '/tuzulmasi'} ,
                {  nameCategory: `Bo'sh ish o'rinlari`, to: `/ish-o'rinlari`} ,
                {  nameCategory: 'Tenderlar', to: '/tenderlar'} ,
                {  nameCategory: `Bog'lanish`, to: `/bog'lanish`} 
            ]
        }
    ]
  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{padding: '0 2%',
       backgroundColor: '#fff',
    }}
      >
        <StyledToolbar
          className='header_container'
        >
          <Typography
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            
          >
            <img src={Logo} alt='No Logo' width='120px'className='logo'/>
          </Typography>
          <Box className='category'>
            {categoryHeader.map((item, i) => {return <Typography
            key={i}
            sx={{
                marginRight: 6
            }} >
                {item.name}
             </Typography>})}
             <Typography>
                Helloblog
             </Typography>
          </Box>
          <Box className='icons'>
            <Select
            sx={{
                border: 'none',
                borderRadius: 5,
                marginLeft: 9
            }}
            value={selectValue}
            onChange={e => setSelectValue(e.target.value)}
            >
                <MenuItem value='Uz'>Uz</MenuItem>
                <MenuItem value='Py'>Py</MenuItem>
            </Select>
          <IconButton size="large" aria-label="search" color="inherit">
          <MoreIcon />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            >
            <SearchIcon />
          </IconButton>
          <Button className='button_ilova'
          sx={{
            ":hover":{
                backgroundColor: 'rgb(94, 185, 218)'
            }
          }}
          >
            Ilovani yuklab olish
          </Button>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>{categoryHeader.map((item, i) => {return  <HeaderCategory key={i} data={item} index={i} />})
}
    </>
    );
}
