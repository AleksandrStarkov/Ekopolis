import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import { css } from '@emotion/react';
import {
  Drawer,
  IconButton,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
} from '@mui/material';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { ImgClose } from '../NavBar.styled';
import wind1 from '../../../assets/logo4.png';
import { Link } from 'react-router-dom';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const DisLink = styled(Link)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }));
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={{ padding: '20px 2px' }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            onClick={() => setOpenDrawer(!openDrawer)}
            style={{ padding: '12px 16px', display: 'block' }}
          >
            ГОЛОВНА
          </Button>

          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            style={{
              boxShadow: 'none',
            }}
            sx={{
              ':hover': { backgroundColor: ' rgba(0, 0, 0, 0.04)' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: ' 1.25',
                  letterSpacing: '0.02857em',
                }}
                // sx={{
                //   ':hover': { backgroundColor: ' rgba(0, 0, 0, 0.04)' },
                // }}
              >
                ПРО ПІДПРИЄМСТВО
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'inset 0px 0px 5px  #747472',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: ' 1.25',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                  // ':hover': { backgroundColor: ' rgba(0, 0, 0, 0.04)' },
                  // zIndex: '1500',
                }}
                to="about"
                onClick={() => setOpenDrawer(!openDrawer)}
                // sx={{
                //   ':hover': { backgroundColor: ' rgba(0, 0, 0, 0.04)' },
                // }}
              >
                ПРО НАС
              </Link>

              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="activity"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                ДІЯЛЬНІСТЬ
              </Link>

              {/* <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
                padding: '5px',
              }}
              to="management"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              КЕРІВНИЦТВО
            </Link> */}

              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="structure"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                СТРУКТУРА
              </Link>

              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="vacancies"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                ВАКАНСІЇ
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            style={{
              boxShadow: 'none',
            }}
            sx={{
              // some styles
              '::before': {
                backgroundColor: 'transparent',
              },
              ':hover': { backgroundColor: ' rgba(0, 0, 0, 0.04)' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: ' 1.25',
                  letterSpacing: '0.02857em',
                  color: ' rgba(0, 0, 0, 0.87)',
                }}
              >
                ДЛЯ ПІДПРИЄМЦІВ
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'inset 0px 0px 5px  #141414',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: ' 1.25',
                  letterSpacing: '0.02857em',
                  // width: '100vw',
                  padding: '5px',
                }}
                to="about"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                УКЛАСТИ ДОГОВІР
              </Link>

              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="rates"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                ТАРИФИ
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            style={{
              boxShadow: 'none',
            }}
            sx={{
              // some styles
              '::before': {
                backgroundColor: 'transparent',
              },
              ':hover': { backgroundColor: ' rgba(0, 0, 0, 0.04)' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: ' 1.25',
                  letterSpacing: '0.02857em',
                  color: ' rgba(0, 0, 0, 0.87)',
                }}
              >
                ПУБЛІЧНА ІНФОРМАЦІЯ
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'inset 0px 0px 5px  #141414',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: ' 1.25',
                  letterSpacing: '0.02857em',
                  // width: '100vw',
                  padding: '5px',
                }}
                to="about"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                НОРМАТИВНО-ПРАВОВА БАЗА
              </Link>

              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="activity"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                ФІНАНСОВА ЗВІТНІСТЬ
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="activity"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                ПУБЛІЧНІ ЗАКУПІВЛІ
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="activity"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                УСТАНОВЧІ ДОКУМЕНТИ
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  color: ' #000000',
                  fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  padding: '5px',
                }}
                to="activity"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                РОЗПОРЯДЖЕННЯ
              </Link>
            </AccordionDetails>
          </Accordion>

          <Button
            color="inherit"
            component={Link}
            to="contacts"
            onClick={() => setOpenDrawer(!openDrawer)}
            style={{ padding: '12px 16px', display: 'block' }}
          >
            КОНТАКТИ
          </Button>
        </div>
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
          {/* <ImgClose src={wind1} alt="" /> */}
          <img
            sx={{ xs: { display: 'none' } }}
            src={`${wind1}`}
            alt=""
            width="130px"
            height="50px"
          />
        </Link>
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
      </Drawer>
      <IconButton
        sx={{ color: 'black', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
