import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import './Work.css';

const Subhead =  styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    color: '#FC6C3B',
  }));

  const Head =  styled(Typography)(({ theme }) => ({
    fontSize: '40px',
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




function Work() {
    return ( 
            <Box className='Work'>
                <Container  max-width="xl">
                    <Box className='WorkSection'>
                        <Grid  container spacing={3}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Typography component={Subhead} variant={'Subhead'}>latest work</Typography>
                                <Typography component={Head} variant={'Head'} className='Heading'>Take a look around our portfolio.</Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box className='Work-Detail'>
                                    <BannerButton className='Login-Btn'  variant="contained">View More</BannerButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className='WorkSection-Image'>
                        <Grid container>
                            <Grid container item xl={9} lg={9} md={9} sm={9} xs={12}>
                                <Grid container>
                                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <img src='/Images/Work-1.png' className='Work-Img' alt=''/>
                                    </Grid>
                                    <Grid container item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <img src='/Images/Work-4.png' className='Work-Img' alt=''/> 
                                    </Grid>
                                    <Grid container item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <img src='/Images/Work-3.png' className='Work-Img' alt=''/> 
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item xl={3} lg={3} md={3} sm={3} xs={12}>
                                <img src='/Images/Work-2.png' className='Work-Img' alt=''/>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
     );
}

export default Work;