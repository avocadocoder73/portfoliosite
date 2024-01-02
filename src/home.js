import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Toolbar,Box , Button, ThemeProvider, createTheme, Typography, Paper, Card, CardMedia, useMediaQuery, useTheme, Drawer} from '@mui/material';
import './home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {ReactComponent as HTML} from '../src/svgee.svg'
import {ReactComponent as JS} from '../src/JSSVG.svg'
import {ReactComponent as CSS2} from '../src/CSS4.svg'
import {ReactComponent as REACT} from '../src/react.svg'
import {ReactComponent as Python} from '../src/py2.svg'
import {ReactComponent as Java} from '../src/java.svg'
import {ReactComponent as SQL} from '../src/postgres.svg'
import {ReactComponent as Github} from '../src/github.svg'
import {ReactComponent as Linkedin} from '../src/LINKEDIN.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


function Home() {

const theme = useTheme()
let head = 'h2'
const small = useMediaQuery(theme.breakpoints.up('sm'))

const [open, setOpen] = useState(false)

if(!small)
{
  head = 'h4'
}

const handleclick = () => {
  setOpen(!open)
}

  return (
   
   <Container maxWidth='xl' sx={{height:'100%', width:"100%"}}>
        <AppBar elevation={10} color="primary" sx={{height:"auto", width:"100%"}}>
           
            <Toolbar>
                

                <Typography sx={{fontFamily:"Satoshi-Bold", fontSize:"1.5rem"}} className={"typography"}>HM</Typography>
                {small ?  <Box>
                <Button href='/#/app' variant='contained' color="secondary" sx={{textDecoration:"none"}}>Home</Button>
                <Button href='/#/app/about' variant='contained' color="secondary">About me</Button>        
                <Button href='/#/app/projects' variant='contained' color="secondary">Projects</Button>   
                <Button href='/#/app/contact' variant='contained' color='secondary'>Contact</Button>
                </Box> : <Box><Button color='secondary' onClick={handleclick}><MenuIcon></MenuIcon></Button><Drawer variant='persistent' anchor='right' open={open}><Button href='/home' variant='contained' color="secondary" sx={{textDecoration:"none"}}>Home</Button>
                <Button href='/#/app/about' variant='contained' color="secondary">About me</Button>        
                <Button href='/#/app/projects' variant='contained' color="secondary">Projects</Button>   
                <Button href='/#/app/contact' variant='contained' color='secondary'>Contact</Button>
                <Button color='secondary' onClick={handleclick}>Close Menu</Button></Drawer></Box>}
               
            </Toolbar>    
            
        </AppBar> 
     <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Paper  elevation={20}  sx={{marginTop:'150px', backgroundColor:"black", padding:"20px", height:"40%", width:"40%"}} color='secondary'>

                    <Typography sx={{marginBottom:"10px", color:"#e9e9e9"}} className={"typography"} variant="h6">Hello, my name is</Typography>
                    <Typography sx={{marginBottom:"30px", color:"#e9e9e9"}} className={"typography"} variant={head}>Haroun <br></br> Mekonnen</Typography>
                    <Typography sx={{marginBottom:"20px", color:"#6CABC1"}} className={"typography"} variant='h5'>Software Engineer</Typography>
                    <Typography sx={{marginBottom:"20px", color:"#e9e9e9"}} className={"typography"}>I'm a full-stack software engineer from McHenry, IL working on building software applications of the future</Typography>
                    <Button sx={{margin:"0px", marginBottom:"20px"}} href='/#/app/contact' variant='contained' color='secondary'>Contact Me</Button>
                     <Box>
                    <Link to='https://github.com/avocadocoder73'><Github></Github></Link>
                    <Link className='thesvg' to='https://www.linkedin.com/in/haroun-mekonnen-77b179298/'><Linkedin></Linkedin></Link>
                    </Box>
            </Paper>  
         <Paper elevation={20}  sx={{marginTop:'150px', backgroundColor:"black", display:"flex", flexWrap:'wrap', padding:"20px", width:"40%"}} color='secondary'>
                <Card sx={{width:'100px'}}><CSS2></CSS2></Card>
                <Card sx={{width:'100px'}}><HTML></HTML></Card>
                <Card sx={{width:'100px'}}><JS></JS></Card>
                <Card sx={{width:'100px'}}><REACT></REACT></Card>
                <Card sx={{width:'100px'}}><Java></Java></Card>
                <Card sx={{width:'100px'}}><SQL></SQL></Card>
                <Card sx={{width:'100px'}}><Python></Python></Card>
                <Card><Button href='/#/app/about'sx={{height:"100px"}} color='secondary'>More<ArrowForwardIosIcon color='secondary'></ArrowForwardIosIcon></Button></Card>
         </Paper>
         </Box>
   </Container>

  );
}

export default Home;
