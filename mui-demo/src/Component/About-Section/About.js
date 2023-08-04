import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import './About.css';


const heading =  styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  color: '#E5E5E5',
  display:'none',
}));


  const Subhead =  styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    color: '#FC6C3B',
  }));

  const Head =  styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#000000',
  }));


  const BannerButton = styled(Button)(({ theme }) => ({
   
    textTransform: 'none',
    // background: linear-gradient(to bottom, #ffffff 50%, #FB9022 50%),
    fontSize: 16,
    color:"#000000",
    padding: "10px 30px",
  
  }));


function AboutUs () {
    return ( 
       <Box className='AboutSection'>
            <Container max-width="xl">
              <Box className='main-wrapper'>
                <Grid container>
                  <Grid item xl={12} lg={12} md={12}>
                    <Grid container spacing={5}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Box className='AboutDetail'>
                        <Typography component={heading} variant={'heading'} className='About-Title'>About Me</Typography>
                          <img src='/Images/Bg2.png' className='About-Img' alt=''/>
                        </Box>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Box className='AboutDetail1'>
                            <Typography component={Subhead} variant={'Subhead'}>About Us</Typography>
                            <Typography component={Head} variant={'Head'} className='Heading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit reprehenderit, necessitatibus.</Typography>
                            <Box className='View-Btn'>
                              <BannerButton className='Login-Btn'  variant="contained">View More</BannerButton>
                            </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Container>
       </Box>
     );
}

export default AboutUs;