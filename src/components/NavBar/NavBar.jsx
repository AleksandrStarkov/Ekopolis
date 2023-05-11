import * as React from 'react';
import { AppBar, Typography, styled, Container } from '@mui/material';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { ImgClose } from './NavBar.styled';

import wind from '../../assets/logo3.png';
import wind1 from '../../assets/logo4.png';

import Header from './NavDetail/Header';

export default function NavBar() {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));
  const DisLink = styled(Link)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }));
  return (
    <>
      <AppBar
        color="transparent"
        style={{
          boxShadow: 'none',
          position: 'static',
          backgroundColor: '#EFF0EC',
        }}
      >
        <Container
          style={{
            display: 'flex',
            paddingTop: '10px',
            paddingBottom: '10px',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            // underline="none"
            style={{
              display: 'flex',
              // alignItems: 'flexStart',
              width: '50px',
              height: '47px',
              backgroundImage: `url(${wind})`,
              backgroundRepeat: 'no-repeat',

              // backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              textDecorationLine: 'none',
            }}
          >
            <Title
              variant="h1"
              style={{
                margin: '0',
                fontSize: '48px',
                color: '#060606',
                fontWeight: '300',
                marginLeft: '50px',
              }}
            >
              Екополіс
            </Title>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DisLink
              to="tel:+380123456789"
              style={{ textDecoration: 'none', marginRight: '20px' }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '18px',
                  color: '#030303',

                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <LocalPhoneTwoToneIcon style={{ marginRight: '10px' }} />
                +380123456789
              </Typography>
              {/* <TelegramIcon style={{ marginRight: '10px', color: '#030303' }} /> */}
            </DisLink>
            <DisLink>
              <TelegramIcon style={{ marginRight: '10px', color: '#030303' }} />
              {/* <FacebookIcon style={{ marginRight: '10px', color: '#030303' }} /> */}
            </DisLink>
            <DisLink>
              {/* <TelegramIcon style={{ marginRight: '10px', color: '#030303' }} /> */}
              <FacebookIcon style={{ marginRight: '10px', color: '#030303' }} />
            </DisLink>
            <Link
              to="https://miskrada.kherson.ua/"
              style={{
                display: 'flex',

                // width: '130px',
                // height: '50px',
                background:
                  'linear-gradient(to bottom, #042EFF 0%, #FFFFff 50%, #FFFF09 100%)',

                backgroundRepeat: 'no-repeat',

                backgroundPosition: 'center',
                backgroundSize: 'contain',
                textDecorationLine: 'none',
              }}
            >
              <ImgClose src={wind1} alt="" />
              {/* <img
              sx={{ xs: { display: 'none' } }}
              src={`${wind1}`}
              alt=""
              width="130px"
              height="50px"
            /> */}
            </Link>
          </div>
        </Container>

        <Header />
        {/* <NavMenu /> */}
      </AppBar>
    </>
  );
}
