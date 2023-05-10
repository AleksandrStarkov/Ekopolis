import React from 'react';

import { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

// import BackImg1 from '../../assets/clean1.jpg';
import images from './data';

import { ImgBack } from './Hero.styled';
import flag from '../../assets/kavun.png';

const Hero = () => {
  const el = useRef(null);
  const [curentState, setCurentState] = useState(0);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['ХЕРСОН - ЦЕ УКРАЇНА!'],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (curentState === 2) {
        setCurentState(0);
      } else {
        setCurentState(curentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [curentState]);

  // const Title = styled(Typography)(({ theme }) => ({
  //   fontSize: '64px',
  //   color: '#000336',
  //   fontWeight: 'bold',
  //   margin: theme.spacing(4, 0, 4, 0),
  //   [theme.breakpoints.down('sm')]: {
  //     fontSize: '40px',
  //   },
  // }));

  return (
    <Box
      sx={{
        backgroundImage: `url(${images[curentState].url})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 134px)',
        // width: '100vw',
        // minHeight: '80vh',
        backgroundColor: ' rgba(242, 249, 242, 0.73)',
        backdropFilter: 'blur(6px)',
        transition: '1500ms all ease-in-out',
        // animation: '3s linear 1s slidein',
      }}
    >
      <Container
        style={{
          paddingTop: '50px',
        }}
      >
        <Box
          sx={{ flex: '1' }}
          style={{
            display: 'flex',
            flexDirection: 'column',

            padding: '2px',
          }}
        >
          <Typography
            ref={el}
            variant="body2"
            sx={{
              fontSize: '50px',
              color: '#060606',
              fontWeight: '500',
              backgroundColor: '  rgb(244 253 86 / 73%)',
              backdropFilter: 'blur(6px)',
              width: 'fit-content',
              padding: '5px',
              borderRadius: '12px',
            }}
          ></Typography>
          <ImgBack src={flag} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
