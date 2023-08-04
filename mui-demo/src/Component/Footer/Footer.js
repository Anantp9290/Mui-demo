import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';

import OutlinedInput from '@mui/material/OutlinedInput';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import './Footer.css';


const BannerButton = styled(Button)(({ theme }) => ({
   
    textTransform: 'none',
    // background: linear-gradient(to bottom, #ffffff 50%, #FB9022 50%),
    fontSize: 16,
    color:"#000000",
    padding: "5px 30px",
  
  }));


function Footer() {
    return ( 
        <>
            <Box className='Footer-Section'>
                <Container max-width="xl">
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                                <Box className='Footer-Detail'>
                                    <a href='Home'>
                                        <img src='/Images/Ft-Logo.png' width={200} alt='Logo' />
                                    </a>
                                    <Typography variant='body2' className='Footer-Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Typography>
                                    <Box className='Email-Form'>
                                        <FormControl>
                                            <OutlinedInput className='Input' placeholder="Please enter Email" />
                                        </FormControl>
                                    </Box>
                                    <Box className='Subscribe-Btn'>
                                        <BannerButton className='Subscription'  variant="contained">Subscribe</BannerButton>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xl={5} lg={5} md={5} sm={6} xs={12}>
                                <Grid container>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Box className='Footer-Link'>
                                            <Typography variant='h4' className='Footer-link-Title'>Explore</Typography>
                                            <Box className='Link-Detail'>
                                                <Link href='#' underline='none'> <Typography variant='subtitle2' className='Link-Desc'>About us</Typography></Link>
                                                <Link href='#' underline='none'> <Typography variant='subtitle2' className='Link-Desc'>Contact us</Typography></Link>
                                                <Link href='#' underline='none'> <Typography variant='subtitle2' className='Link-Desc'>Blog</Typography></Link>
                                                <Link href='#' underline='none'> <Typography variant='subtitle2' className='Link-Desc'>Career</Typography></Link>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Box className='Footer-Link'>
                                            <Typography variant='h4' className='Footer-link-Title'>Studio</Typography>
                                            <Box className='Link-Detail'>
                                                <Typography variant='subtitle2' className='Link-Desc'>2005 Stokes Isle Apt. 896, Venaville, New York 10010, USA</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                                <img src='/Images/footerImage.png' alt='' className='Footer-Image'/>
                                <Box className='FooterImage-Desc'>
                                    <Typography variant='subtitle2' className='FooterImage-Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box className='Footer-Copyright'>
                <Container max-width="xl">
                    <Box className='Footer-copy-Detail'>   
                        <Typography variant='subtitle2' className='Footer-Copy-Title'>© Copyright 2021 Solar, All Right Reserved</Typography>
                    </Box>
                </Container>
            </Box>    
        </>
    
     );
}

export default Footer;


