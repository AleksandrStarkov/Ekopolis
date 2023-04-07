import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Stack,
  Link,
  Box,
  Typography,
  styled,
} from '@mui/material';
// import { ImgClose } from './NavBar.styled';

import wind from '../../assets/Windsurfing.png';
import NavTabs from './NavDetail/NavTabs';

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
  return (
    <>
      <AppBar color="transparent" style={{ boxShadow: 'none' }}>
        {/* <Box> */}
        <Toolbar
          style={{
            // position: 'relative',
            display: 'flex',
            // alignItems: 'center',
            // minHeight: '56px',
            // height: '64px',
            // color: 'rgb(33, 43, 54)',
            // backgroundColor: 'transparent',
            // transition:
            //   'height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            // backdropFilter: 'blur(6px)',
            // justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            underline="none"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '150px',
              height: '120px',
              backgroundImage: `url(${wind})`,
              backgroundRepeat: 'no-repeat',
              // backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              // height: '100px',
              // width: '100px',
              // minHeight: '80vh',
            }}
          >
            {/* <ImgClose src={wind} alt="" /> */}
          </Link>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#060606',
                fontWeight: '500',
              }}
            >
              Комунальне підприємство
            </Typography>
            <Title
              variant="h1"
              style={{
                margin: '0',
              }}
            >
              "Екополіс"
            </Title>
          </Box>
        </Toolbar>
        {/* </Box> */}
        <Toolbar
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: '56px',
            height: '64px',
            color: 'rgb(0, 0, 0)',
            // backgroundColor: '#79c47933',
            backgroundColor: ' rgb(242 249 242 / 73%)',

            transition:
              'height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            backdropFilter: 'blur(6px)',
            justifyContent: 'center',
            boxShadow:
              '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
          }}
        >
          <Stack direction="row" spacing={2} style={{ alignItems: 'center' }}>
            <Box sx={{}}>
              <NavTabs />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
