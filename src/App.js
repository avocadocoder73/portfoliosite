import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import About from './about';
import Contact from './contact';
const theme = createTheme({
    palette:{
        primary:{
            light: '#d9d9d9',
            main: '#090909',
            dark: '#000000',
            contrastText: '#f5f5f5',
        },
        secondary:{
            main:"#6CABC1"
        }
        
        
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple: true,
                disableElevation: true,
            },

            styleOverrides:{


                root:{
                    textTransform:"none",
                    margin:"10px",
                    fontFamily:"Satoshi-Medium"
                }
            }
        },
        MuiCard:{

            styleOverrides:{
                root:{
                    backgroundColor:"black"
                }
            }

        },
       MuiToolbar:{
      

        styleOverrides:{

            root:{
                display:"flex",
                justifyContent:"space-between",
                borderBottom:"0.5px solid #555555",
                alignItems:"center"
            }
        }
       },
       MuiAppBar:{

            styleOverrides:{
                root:{
                    display:'flex',
                    justifyContent:"space-between"
                }
            }
       },
     
    }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
           <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
