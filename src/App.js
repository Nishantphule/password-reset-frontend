import { useState } from 'react';
import './App.css';
import { AppBar, Button, Paper, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { NotFound } from './components/NotFound';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home'
import UpdatePassword from './components/UpdatePassword';

function App() {

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark")

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>

        <AppBar>
          <Toolbar>
            <Button startIcon={<HomeIcon />} variant="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button variant="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button sx={{ marginLeft: 'auto' }} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}{mode === "light" ? "dark" : "light"} MODE
            </Button>
          </Toolbar>
        </AppBar>


        <div className='App'>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/updatepassword/:id" element={<UpdatePassword />} />

            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/404" element={<NotFound />} />

          </Routes>
        </div>


      </Paper>
    </ThemeProvider>

  );
}

export default App;
