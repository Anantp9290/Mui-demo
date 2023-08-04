import  React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import './Client.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Avatar from '@mui/material/Avatar';
import CountUp from 'react-countup';


const Subhead =  styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    color: '#FC6C3B',
  }));

  const Head =  styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#000000',
  }));

  const ClientName =  styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: '#FC6C3B',
  }));

  const Review =  styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: '#000000',
    fontWeight: '500',
  }));



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };


// const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
//     return (
//       <button onClick={onClick}>
//          <i class="custom-left-arrow"></i>
//       </button>
//     )
//   }

//   const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
//     return (
//       <button onClick={onClick}>
//          <i class="custom-right-arrow"></i>
//       </button>
//     )
//   }

  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div className='Butten-Wrapper'>
        <div onClick={previous} className='Prev-Btn'>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 426.97 341.57" width={20}>
                <path d="M-605.06,336.51h7.32q160,0,320.05,0a41.64,41.64,0,0,1,10.89,1c9.9,2.72,16,12.16,15,22.57a20.8,20.8,0,0,1-18.77,18.94,75.82,75.82,0,0,1-8,.29q-159.78,0-319.56,0H-605c2.06,2.18,3.24,3.49,4.48,4.74q53,53.06,106.11,106.08c6.59,6.56,9.51,14.05,6.92,23.09-3.87,13.53-20.07,19.45-31.91,11.76a39.08,39.08,0,0,1-6-5.19q-72-71.94-143.93-143.92c-12.34-12.34-12.36-23.6-.07-35.9q72.66-72.67,145.32-145.38c6.38-6.39,13.63-9.45,22.59-6.84a21.21,21.21,0,0,1,11.18,33.34,49,49,0,0,1-4.74,5.15Q-547.81,279-600.49,331.7C-601.76,333-603,334.3-605.06,336.51Z" transform="translate(678.69 -186.87)"/></svg>
        </div>
        <div onClick={next} className='Next-Btn'>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 469.72 341.55" width={20}>
            <path d="M-440.58,388.36H-448q-181.47,0-362.95,0a39.74,39.74,0,0,1-10.86-1.09c-9.61-2.77-16.08-12.69-15-22.2a21.34,21.34,0,0,1,19.18-19.25,74.67,74.67,0,0,1,7.48-.25q181.23,0,362.45,0h5.78l1.53-2.19c-1.61-.88-3.54-1.43-4.79-2.67q-53.1-52.95-106.13-106c-6.3-6.27-9.37-13.42-7.19-22.1a21.27,21.27,0,0,1,35.68-9.93c10.8,10.41,21.26,21.17,31.87,31.78L-375.66,349.7c11.31,11.32,11.35,23.13.1,34.38q-73,73-146,146.06c-6.54,6.55-13.93,9.6-23,6.82a21.27,21.27,0,0,1-10.2-34c1.26-1.54,2.73-2.92,4.14-4.33L-445.29,393.3C-444,392-442.8,390.69-440.58,388.36Z" transform="translate(836.87 -196.44)"/></svg>
        </div>
      </div>
    );
  };



function Client () {
    return ( 
        <Box className='Client-Section'>
            <Container max-width="xl">
                <Box className='Client-Wrapper'>
                    <Box className='Client-Section-Heading'>
                        <Typography component={Subhead} variant={'Subhead'}>What Clients Say</Typography>
                        <Typography component={Head} variant={'Head'} className='Heading'>Meet happy clients.</Typography>
                    </Box>
                    <Box>
                        <Carousel responsive={responsive} autoPlay={false} arrows={false} swipeable  renderButtonGroupOutside infinite   customButtonGroup={<CustomButtonGroupAsArrows />} >
                                <div className='Client-Review'>
                                    <Box>
                                        <Box className='Client-Body'>
                                            <Avatar alt="Remy Sharp" src='/Images/Customer-1.jpg'/>
                                            <Typography component={ClientName} variant={'ClientName'}>saleba gomas</Typography>
                                        </Box>
                                        <Box className='Review-Body'>
                                            <Typography component={Review} variant={'Review'} className='Heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</Typography> 
                                        </Box>
                                    </Box>
                                </div>
                                <div className='Client-Review'>
                                    <Box>
                                        <Box className='Client-Body'>
                                            <Avatar alt="Remy Sharp" src='/Images/Customer-1.jpg'/>
                                            <Typography component={ClientName} variant={'ClientName'}>saleba gomas</Typography>
                                        </Box>
                                        <Box className='Review-Body'>
                                            <Typography component={Review} variant={'Review'} className='Heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</Typography> 
                                        </Box>
                                    </Box>
                                </div>
                                <div className='Client-Review'>
                                    <Box>
                                        <Box className='Client-Body'>
                                            <Avatar alt="Remy Sharp" src='/Images/Customer-1.jpg'/>
                                            <Typography component={ClientName} variant={'ClientName'}>saleba gomas</Typography>
                                        </Box>
                                        <Box className='Review-Body'>
                                            <Typography component={Review} variant={'Review'} className='Heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</Typography> 
                                        </Box>
                                    </Box>
                                </div>
                                <div className='Client-Review'>
                                    <Box>
                                        <Box className='Client-Body'>
                                            <Avatar alt="Remy Sharp" src='/Images/Customer-1.jpg'/>
                                            <Typography component={ClientName} variant={'ClientName'}>saleba gomas</Typography>
                                        </Box>
                                        <Box className='Review-Body'>
                                            <Typography component={Review} variant={'Review'} className='Heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</Typography> 
                                        </Box>
                                    </Box>
                                </div>
                               
                        </Carousel>
                    </Box>
                </Box>
                <Box className="Counter-Section">
                    <Grid container spacing={2}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Box className='Counter-Detail'>
                                <Typography variant='h5' className='Counter-Head'>99%</Typography>
                                <Typography variant='p' className='Counter-Title'>Satisfied</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Box className='Counter-Detail'>
                                
                                <Typography variant='h5' className='Counter-Head'>99%</Typography>
                                <Typography variant='p' className='Counter-Title'>Photogaphy</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Box className='Counter-Detail'>
                                <Typography variant='h5' className='Counter-Head'>99%</Typography>
                                <Typography variant='p' className='Counter-Title'>Project</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Box className='Counter-Detail'>
                                <Typography variant='h5' className='Counter-Head'>99%</Typography>
                                <Typography variant='p' className='Counter-Title'>Satisfied</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
     );
}

export default Client;