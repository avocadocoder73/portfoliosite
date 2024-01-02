import { Container, Button, Toolbar, Box, Typography, AppBar, Paper, useTheme, useMediaQuery, Drawer } from "@mui/material";
import {ReactComponent as Github} from '../src/github.svg'
import {ReactComponent as Linkedin} from '../src/LINKEDIN.svg'
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Contact()
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


    return(<Container maxWidth='xl' sx={{height:'100%', width:"100%"}}>
        
        <AppBar elevation={10} color="primary" sx={{height:"auto", width:"100%"}}>
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
           
        </AppBar>

            <Paper  elevation={20}  sx={{marginTop:'150px', backgroundColor:"black", padding:"20px", height:"40%", width:"100%"}} color='secondary'>
                <Typography variant="h3" sx={{color:"white", marginBottom:"100px"}}>Contact Me</Typography>

               

<Link to='https://github.com/avocadocoder73'><Github></Github></Link>
                    <Link className='thesvg' to='https://www.linkedin.com/in/haroun-mekonnen-77b179298/'><Linkedin></Linkedin></Link>
                     <Link to='mailto:harounomek3@gmail.com'><EmailIcon sx={{height:"50px", width:'50px', color:"white", marginLeft:"15px", ":active":{color:"inherit", fill:"inherit"}}}></EmailIcon></Link>
            </Paper>

    </Container>)
}