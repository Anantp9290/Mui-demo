import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import './Services.css';

const Subhead =  styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    color: '#FC6C3B',
  }));

  const Head =  styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#000000',
  }));

  const liDetail =  styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    color: '#000000',
  }));


  const BannerButton = styled(Button)(({ theme }) => ({
    boxShadow: '-4px 4px #FC6C3B;',
    textTransform: 'none',
    fontSize: 16,
    color:"#ffffff",
    padding: "10px 46px",
    backgroundColor: "#54825B",
    '&:hover': {
      backgroundColor: "#bd9a6c",
      transition: '1s',
      boxShadow: '-4px 4px #faa56d',
    },
  }));



function Service() {
    return ( 
        <Box className='Service-Section'>
            <Container  max-width="xl">
                <Grid container spacing={3}>
                    <Grid item  xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Box className='Service-Detail1'>
                            <Typography component={Subhead} variant={'Subhead'}>Our Services</Typography>
                            <Typography component={Head} variant={'Head'} className='Heading'>Create the lifestyle you really desire.</Typography>
                            <Box className='Details'>
                                <Box className='Details-1'></Box>
                                <Typography component={liDetail} variant={liDetail} className='Detail-Title'>Create the lifestyle you really desire.</Typography>
                            </Box>
                            <Box className='Details'>
                                <Box className='Details-1'></Box>
                                <Typography component={liDetail} variant={liDetail} className='Detail-Title'>Create the lifestyle you really desire.</Typography>
                            </Box>
                            <Box className='Details'>
                                <Box className='Details-1'></Box>
                                <Typography component={liDetail} variant={liDetail} className='Detail-Title'>Create the lifestyle you really desire.</Typography>
                            </Box>
                            <Box className='Service-Bth'>
                                    <BannerButton className='Login-Btn'  variant="contained">View More</BannerButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item  xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Box className='Service-Detail'>
                             <img src='/Images/Services-Bg.png' className='Service-Img' alt=''/>
                        </Box>
                    </Grid>
                </Grid>
                
            </Container>
          
        </Box>
     );
}

export default Service;