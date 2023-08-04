import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme} from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Banner.css';
import { Container } from '@mui/system';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '95px',
  color: '#FC6C3B',
  width: '778px',
  margin: '0 auto',
  lineHeight: '1',
  [theme.breakpoints.down('md')]: {
    fontSize: '50px',
    width: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '35px',
    width: '250px',
  },
};


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

function  Banner () {
    return ( 
        <>
            <Box  className='BannerSection'>
              <Container  max-width="xl">
                  <Typography theme={theme} variant="h1" align='center'  gutterBottom>Modern Studio Design </Typography>
                  <Box className='BannerDeatil'>
                    <BannerButton className='Login-Btn'  variant="contained">Learn More</BannerButton>
                  </Box>
              </Container>
              
            </Box>
        </>
     );
}

export default Banner ;
