import { useState } from "react";
import { Box, AppBar, Tabs, Tab } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {AccountCircleOutlined} from '@mui/icons-material';

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Header = () =>{

    const Navigate = useNavigate();

    const [value, setValue] = useState(2);
    const Routes = ["/","/private","/public"]

    const handleChange = (event, newValue) => {
        setValue(newValue);
        Navigate(Routes[newValue]);        
    };

    return(
    <Box sx={{ bgcolor: 'background.paper'}}>
        <AppBar position="static">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
                <Tab label={<AccountCircleOutlined />} {...a11yProps(1)}/>    
                <Tab label="Private"  {...a11yProps(2)} />
                <Tab label="Public"  {...a11yProps(3)} />
            </Tabs>
        </AppBar>

    </Box>
    )
}

export default Header;