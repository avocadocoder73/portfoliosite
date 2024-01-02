
import { Container, AppBar, Toolbar,Box , Button, ThemeProvider,Drawer, useMediaQuery, useTheme, createTheme, Typography, Paper, Card, CardMedia, CardContent, CardActionArea, CardActions} from '@mui/material';
import './App.css';
import './home.css'

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import Tweetle from '../src/tweetle.png'
import {ReactComponent as Github} from '../src/github.svg'
import { Link } from 'react-router-dom';
import Stock from '../src/discordjs.png'
import Theta from '../src/thetadesktop.png'
export default function Projects()
{

    const theme = useTheme()
let head = 'h2'
let fl = 'row'
let fl2 = 'flex-start'
const small = useMediaQuery(theme.breakpoints.up('sm'))

const [open, setOpen] = useState(false)

if(!small)
{
  head = 'h4'
  fl = "column"
  fl2 = 'flex-end'
}

const handleclick = () => {
  setOpen(!open)
}

    return (<Container maxWidth='xl' sx={{height:'100%', width:"100%"}}> <AppBar elevation={10} color="primary" sx={{height:"auto", width:"100%"}}>
           
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
            
        </AppBar>  <Paper elevation={20}  sx={{marginTop:'150px', backgroundColor:"black", padding:"20px",height:"100%",}} color='secondary'>
                <Box sx={{display:"flex", flexDirection:fl, width:"100%", alignItems:fl2}}>
                <Card sx={{ width:"100%"}}><Box sx={{height:'250px'}}><CardMedia sx={{objectFit:"fill", height:'250px'}} component='img' src={Tweetle}></CardMedia></Box><CardContent><Typography variant='h6' className='typography' sx={{color:"#6CABC1"}}>Tweetle (Depreciated)</Typography><Typography sx={{color:"white"}} variant='h9'>Tweetle is a tweet guessing game based on wordle. You have 5 attempts to guess who made the tweet of the day</Typography></CardContent><CardActions><Link to='https://github.com/avocadocoder73/Tweetle'><Github></Github></Link></CardActions></Card>
                <Card sx={{marginLeft:"50px",  width:"100%"}}><Box sx={{height:'250px'}}><CardMedia sx={{objectFit:"fill", height:'250px'}} component='img' src={Stock}></CardMedia></Box><CardContent><Typography variant='h6' className='typography' sx={{color:"#6CABC1"}}>Stock Chatbot</Typography><Typography sx={{color:"white"}} variant='h9'>This Discord chatbot allows you to get the stock price of any ticker in real-time. Made for my friend Tony who wanted to track his AAPL position while we play games.</Typography></CardContent><CardActions><Link to='https://github.com/avocadocoder73/discordbot'><Github></Github></Link></CardActions></Card>
                <Card sx={{marginLeft:"50px", width:"100%"}}><Box><CardMedia sx={{objectFit:"fill", height:'250px'}} component={'img'} src={Theta}></CardMedia></Box><CardContent><Typography variant='h6' className='typography' sx={{color:"#6CABC1"}}>Theta Terminal (WIP)</Typography><Typography sx={{color:"white"}} variant='h9'>Financial terminal that analyzes options, sectors, and company financials as well as numerous government filings related to the financial markets.</Typography></CardContent><CardActions><Link to='https://github.com/avocadocoder73/Theta'><Github></Github></Link></CardActions></Card>
                </Box>
            </Paper></Container>)
}