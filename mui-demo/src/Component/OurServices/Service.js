import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
// import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './service.css';

const Subhead =  styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    color: '#FC6C3B',
  }));

  const Head =  styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#000000',
  }));

  const CardHeadar = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    fontWeight: '500',
  }));


function OurServices() {
    return ( 
        <Paper className='OurServices'>
            <Container max-width="xl">
                <Box className='Service-Heading'>
                    <Typography component={Subhead} variant={'Subhead'}>Our Services</Typography>
                    <Typography component={Head} variant={'Head'} className='Heading'>We love to find simple solutions to complex challenges</Typography>
                </Box>
                <Box >
                    <Grid container spacing={3} className='PhotoGraphy'>
                                        <Grid className='Wrap'   xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Box className='Photography-Detail'>
                                                <Card className='Photography-About'>
                                                    <img src='/Images/Photography-1.png' alt='' height={130}/>
                                                    <CardContent>
                                                        <Typography component={CardHeadar} variant={'CardHeadar'} className='Photography-Type'>Child Photography</Typography>
                                                    </CardContent>
                                                </Card> 
                                            </Box>
                                        </Grid>
                                        <Grid className='Wrap'   xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Box className='Photography-Detail'>
                                                <Card className='Photography-About' >
                                                    <img src='/Images/Photography-2.png' alt='' height={130}/>
                                                    <CardContent>
                                                        <Typography component={CardHeadar} variant={'CardHeadar'} className='Photography-Type' >Wedding Photography</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid className='Wrap'   xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Box className='Photography-Detail'>
                                                <Card className='Photography-About'>
                                                    <img src='/Images/Photography-3.png' alt='' height={130}/>
                                                    <CardContent>
                                                        <Typography component={CardHeadar} variant={'CardHeadar'} className='Photography-Type'>Pre wedding Photography</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid className='Wrap'  xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Box className='Photography-Detail'>
                                                <Card className='Photography-About'>
                                                    <img src='/Images/Photography-4.png' alt='' height={130}/>
                                                    <CardContent>
                                                        <Typography component={CardHeadar} variant={'CardHeadar'} className='Photography-Type'>Engagement Photography</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid className='Wrap'   xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Box className='Photography-Detail'>
                                                <Card className='Photography-About'>
                                                    <img src='/Images/Photography-5.png' alt='' height={130}/>
                                                    <CardContent>
                                                        <Typography component={CardHeadar} variant={'CardHeadar'} className='Photography-Type' >Maternity Photography</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid className='Wrap'   xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Box className='Photography-Detail'>
                                                <Card className='Photography-About'>
                                                    <img src='/Images/Photography-6.png' alt='' height={130}/>
                                                    <CardContent>
                                                        <Typography component={CardHeadar} variant={'CardHeadar'} className='Photography-Type'>Neutral Photography</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                    </Grid>            
                </Box>
            </Container>
           
        </Paper>
     );
}

export default OurServices;