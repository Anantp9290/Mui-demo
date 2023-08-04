import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid} from '@mui/material';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './Blog.css';

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
    padding: "5px 30px",
  
  }));

function BlogPost() {
    return ( 
        <Box className='Blog-Section'>
            <Container max-width="xl">
                    <Box className='News-Section-Heading'>
                        <Typography component={Subhead} variant={'Subhead'}>The Daily Planet</Typography>
                        <Typography component={Head} variant={'Head'} className='Heading' >Our interactive news.</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                <Card className='Blog'>
                                    <CardMedia component="img" image='/Images/News-1.png'/>
                                     <Typography variant='body1' className='Blog-Date'> <Typography component={'span'} className='Span-Detail'>Photo</Typography> February 23, 2018</Typography>
                                     <Typography variant='h5' className='Blog-Title'>Obsession with all things</Typography>
                                     <Typography variant='subtitle2' className='Blog-desc'>Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsumhas been the industry's.</Typography>
                                     <Box className='View-Btn'>
                                        <BannerButton className='Login-Btn'  variant="contained">View More</BannerButton>
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                <Card className='Blog'>
                                    <CardMedia component="img" image='/Images/News-2.png'/>
                                     <Typography variant='body1' className='Blog-Date'> <Typography component={'span'} className='Span-Detail'>Photo</Typography> February 23, 2018</Typography>
                                     <Typography variant='h5' className='Blog-Title'>Obsession with all things</Typography>
                                     <Typography variant='subtitle2' className='Blog-desc'>Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsumhas been the industry's.</Typography>
                                     <Box className='View-Btn'>
                                        <BannerButton className='Login-Btn'  variant="contained">View More</BannerButton>
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                <Card className='Blog'>
                                    <CardMedia component="img" image='/Images/News-3.png'/>
                                     <Typography variant='body1' className='Blog-Date'> <Typography component={'span'} className='Span-Detail'>Photo</Typography> February 23, 2018</Typography>
                                     <Typography variant='h5' className='Blog-Title'>Obsession with all things</Typography>
                                     <Typography variant='subtitle2' className='Blog-desc'>Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsumhas been the industry's.</Typography>
                                     <Box className='View-Btn'>
                                        <BannerButton className='Login-Btn'  variant="contained">View More</BannerButton>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                       
                    
            </Container>
        </Box>
     ); 
}

export default BlogPost;