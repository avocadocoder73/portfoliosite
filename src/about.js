import { Container, AppBar, Button, Box, Typography, Toolbar, Paper, Chip, useTheme, useMediaQuery, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import {ReactComponent as JS} from '../src/JSSVG.svg'



export default function About()
{

    const theme = useTheme()
let head = 'h2'
let width = '40%'
let flexdir = 'row'
const small = useMediaQuery(theme.breakpoints.up('sm'))

const [open, setOpen] = useState(false)

if(!small)
{
  head = 'h4'
  width = '100%'
  flexdir = 'column'
}

const handleclick = () => {
  setOpen(!open)
}


    return (<Container maxWidth='xl' sx={{height:'100%', width:"100%", maxWidth:"375px"}}><AppBar elevation={10} color="primary" sx={{height:"auto", width:"100%"}}>
           
            <Toolbar>
                

              
                

                <Typography sx={{fontFamily:"Satoshi-Bold", fontSize:"1.5rem"}} className={"typography"}>HM</Typography>
                {small ?  <Box>
                <Button href='/home' variant='contained' color="secondary" sx={{textDecoration:"none"}}>Home</Button>
                <Button href='/about' variant='contained' color="secondary">About me</Button>        
                <Button href='/projects' variant='contained' color="secondary">Projects</Button>   
                <Button href='/contact' variant='contained' color='secondary'>Contact</Button>
                </Box> : <Box><Button color='secondary' onClick={handleclick}><MenuIcon></MenuIcon></Button><Drawer variant='persistent' anchor='right' open={open}><Button href='/home' variant='contained' color="secondary" sx={{textDecoration:"none"}}>Home</Button>
                <Button href='/about' variant='contained' color="secondary">About me</Button>        
                <Button href='/projects' variant='contained' color="secondary">Projects</Button>   
                <Button href='/contact' variant='contained' color='secondary'>Contact</Button>
                <Button color='secondary' onClick={handleclick}>Close Menu</Button></Drawer></Box>}
               
             
               
            </Toolbar>    
           
        </AppBar><Paper  elevation={20}  sx={{marginTop:'150px', backgroundColor:"black", padding:"20px", height:"40%", width:"100%"}} color='secondary'><Typography variant='h4' sx={{color:"white"}}>About me</Typography><Box sx={{display:'flex', justifyContent:"space-between", flexDirection:flexdir}}><Typography sx={{color:"white", width:width, lineHeight:"3"}}>I am a full-stack developer with a deep interest in software engineering. My journey in the world of technology is supported by my relentless hunger for learning and my commitment to efficiency. In my spare time I enjoy staying fit, brushing up on my French, and working on my cooking.</Typography><Box sx={{width:'400px'}}><Chip sx={{background:"yellow", margin:"10px", fontFamily:"Satoshi-Bold",}} label='JavaScript' avatar={JS}></Chip><Chip sx={{background:"#3C57B2", margin:"10px", fontFamily:"Satoshi-Bold"}} label='CSS'></Chip><Chip sx={{background:"#AD4501", margin:"10px", fontFamily:"Satoshi-Bold"}} label='HTML'></Chip><Chip sx={{background:"white", margin:"10px", fontFamily:"Satoshi-Bold"}} label='SQL'></Chip><Chip sx={{background:"#0190AD", margin:"10px", fontFamily:"Satoshi-Bold"}} label='Python'></Chip><Chip sx={{background:"#400ED3", margin:"10px", fontFamily:"Satoshi-Bold"}} label='C++'></Chip><Chip sx={{background:"#79520F", margin:"10px", fontFamily:"Satoshi-Bold"}} label='Java'></Chip><Chip sx={{background:"#000000", margin:"10px", color:"white", border:"1px solid white", fontFamily:"Satoshi-Bold"}} label='NextJS'></Chip><Chip sx={{background:"#224074", margin:"10px", fontFamily:"Satoshi-Bold"}} label='ReactJS'></Chip><Chip sx={{background:"#25282E", margin:"10px", fontFamily:"Satoshi-Bold"}} label='ExpressJS'></Chip><Chip sx={{background:"#EC3603", margin:"10px", fontFamily:"Satoshi-Bold"}} label='D3.JS'></Chip><Chip sx={{background:"#014379", margin:"10px", fontFamily:"Satoshi-Bold"}} label='PostgresSQL'></Chip><Chip sx={{background:"#045A08", margin:"10px", fontFamily:"Satoshi-Bold"}} label='MongoDB'></Chip><Chip sx={{background:"#E6EC03", margin:"10px", fontFamily:"Satoshi-Bold"}} label='AWS'></Chip></Box></Box></Paper></Container>)
}