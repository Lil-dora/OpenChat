import { Avatar, Box, Button, Card, TextField } from '@mui/material';
import React , {useEffect, useState} from 'react'
import socketIOClient from "socket.io-client";
import {SendOutlined} from '@mui/icons-material';
import { GetData } from '../../Components/states';
import image1 from '../../Assets/guili.jpg';

const Public = () =>{

    let user = GetData().username;
    const [message, setMessage] = useState('');
 
    const server = GetData().server;
     
    const [Data, setData] = useState([])

    useEffect(() => {
        const io = socketIOClient(server)
        io.on("public", data => {
            setData(data)
        });
        return () => io.close();
    },[]);
    
    const SendMessage = async () =>{
        try {
            let body = {user,message}
            await fetch(`${server}/public/post`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(body)
            }).then(res=>{return res.json()})
            .then(data =>{console.log(data);})
        } catch (error) {
            console.error(error.message);
        }
    }
    

    const OtherUserMessage = ({val}) =>{
        return(
        <div style={{flexDirection:'row', display:'flex',marginTop:'5px',padding:'10px',float:'left',clear:'both'}}>
            <Avatar style={{backgroundColor:'red'}}>{(val.username)[0]}</Avatar>
            <Card style={{borderRadius:'14px',maxWidth:'250px',backgroundColor:'azure',padding:'10px',marginLeft:'5px'}} >
                {val.message}
            </Card>       
        </div>
        )
    }
    
    const UserMessage = ({val}) =>{
        return(
        <div style={{flexDirection:'row', display:'flex',marginTop:'5px',padding:'10px', float:'right',clear:'both'}}>
            <Card style={{borderRadius:'14px',maxWidth:'250px', backgroundColor:'azure',padding:'10px',marginRight:'5px'}} >
                {val.message}
            </Card>
            <Avatar style={{backgroundColor:'blue'}}>U</Avatar>       
        </div>
        )
    }

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <Card raised style={{backgroundImage:`url(${image1})`,backgroundSize: 'cover' ,minHeight:'80vh',maxHeight:'85vh',margin:'15px',padding:'15px', maxWidth:'450px',minWidth:'350px'}}>
                <div style={{height:'85%',backgroundColor:'transparent' ,overflow: 'auto'}}>
                        {Data.map((val,i)=>{
                            let state = false;
                            if(val.username === user){
                                state = true;
                            }
                            return(
                                <div key={i}>
                                    {state?<UserMessage val={val}/>:<OtherUserMessage val={val}/>}
                                </div>)
                            })
                        }                       
                </div>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                    <TextField size='small' onChange={(val)=>{setMessage(val.target.value)}} variant="outlined"/>
                    <Button style={{borderRadius:'10px', marginLeft:'8px'}} onClick={SendMessage} size='small' variant='contained'><SendOutlined/></Button>
                </Box>
            </Card>
        </div>
    )
}

export default Public;