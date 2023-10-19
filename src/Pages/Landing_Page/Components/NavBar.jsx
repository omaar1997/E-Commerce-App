import React from "react";
import { Container, AppBar, Box, Toolbar, Button, IconButton, Stack, ButtonGroup } from '@mui/material';
import Logo from '../../../Images/Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '@fontsource/roboto/500.css';



export default function NavBar() {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar elevation={0} position="static" style={{ background: 'White', color: 'black', paddingTop: '1%' }}>
                        <Toolbar>
                            <img src={Logo} />
                            <ButtonGroup style={{ marginLeft: '17%', marginRight: '17%', gap:'3rem' }} color="inherit" size="large" variant="text" aria-label="large button group">
                                <Button style={{ border: '0', fontSize: '1.5rem' }}>Home</Button>
                                <Button style={{ border: '0', fontSize: '1.5rem' }}>Bags</Button>
                                <Button style={{ border: '0', fontSize: '1.5rem' }}>Sneakers</Button>
                                <Button style={{ border: '0', fontSize: '1.5rem' }}>Belts</Button>
                                <Button style={{ border: '0', fontSize: '1.5rem' }}>Contacts</Button>
                            </ButtonGroup>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </div>
    )
}


/*

<Stack direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 2, sm: 4, md: 8 }}>
                                <img src={Logo} />
                                <Button style={{ fontSize: '1.5rem' }} color="inherit">HOME</Button>
                                <Button style={{ fontSize: '1.5rem' }} color="inherit">BAGS</Button>
                                <Button style={{ fontSize: '1.5rem' }} color="inherit">SNEAKERS</Button>
                                <Button style={{ fontSize: '1.5rem' }} color="inherit">BELT</Button>
                                <Button style={{ fontSize: '1.5rem' }} color="inherit">CONTACT</Button>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                >
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Stack>
                                */


/*

*/