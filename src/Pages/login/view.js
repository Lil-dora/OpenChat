import {Button, Card, TextField, InputAdornment } from '@mui/material';
import { content } from '../../Styles/Sview';
import {AccountCircle, SecurityOutlined} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SetUsername, GetData } from '../../Components/states';
import {LogIn} from '../../Auth/auth_state';


const Login = () =>{

    const Navigate = useNavigate()
    const server = GetData().server
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const CheckLogin = async () =>{
        try {
            
            await fetch(`${server}/auth/verify`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({name, password})
            }).then(res=>{return res.json()})
            .then(data=>{
                if(data.verified === true){
                    SetUsername(name)
                    LogIn()
                    Navigate("/public")
                }else{
                    alert(data.message)
                }
            })
            
        } catch (error) {
            console.log(error.message);
        }
    }

    const SignUp = async () =>{
        try {
            
            await fetch(`${server}/auth/post`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({name, password})
            }).then(res=>{return res.json()})
            .then(data=>{
                if (Boolean(data) === true){
                    alert(`Welcome ${name}`)
                }
            })
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
    <div style={content}>
        <Card raised style={{width:'300px', padding:'15px', minHeight:'50vh'}}>
            <center>
            <TextField
                label="Name"
                style={{marginTop:'30px'}}
                onChange={(val)=>{setName(val.target.value);}}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            <TextField
                label="Password"
                type="password"
                style={{marginTop:'15px'}}
                onChange={(val)=>{setPassword(val.target.value);}}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SecurityOutlined />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            <Button
                onClick={CheckLogin}
                size="medium" 
                variant="contained" 
                style={{marginTop:'30px',borderRadius:'10px'}}
            >
                Login
            </Button>
            <Button
                onClick={SignUp}
                size="medium" 
                variant="contained" 
                style={{marginTop:'30px', marginLeft:'20px',borderRadius:'10px'}}
            >
                Sign Up
            </Button>
            </center>
        </Card>
    </div>)
}

export default Login;