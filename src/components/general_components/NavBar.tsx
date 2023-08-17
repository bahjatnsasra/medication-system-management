import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();
    return (
        <AppBar position="fixed">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={() => {navigate('/')} } sx={{ my: 2, color: 'white', display: 'block' }} > Home </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} > Contact </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} > About </Button>
            </Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            
            </Toolbar>
        </Container>
        </AppBar>
    );
}
export default NavBar;