import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import BackImg2 from '../../assets/DJI_0610-328.jpg';

import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

export default function Activity() {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${BackImg2})`,
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 134px)',
        // width: '100%',
        // minHeight: '80vh',
        backgroundColor: ' rgba(242, 249, 242, 0.73)',
        backdropFilter: 'blur(6px)',
        animation: 'change 10s infinite ease-in-out',
      }}
    >
      <Container
        style={{
          paddingTop: '100px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          // background: '#ffffffde',
        }}
      >
        <Box
          style={{
            // margin: '20px',
            background: '#ffffffde',
            minWidth: '350px',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '30px',
              color: '#030303',
              padding: '20px',
              // background: '#ffffffde',
              // boxShadow: '0px 4px 20px #d0d7de',
              borderRadius: '12px',
            }}
          >
            КОНТАКТИ
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: '18px',
              color: '#030303',
              // background: '#ffffffde',
              // boxShadow: '0px 4px 20px #d0d7de',
              // borderRadius: '12px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PinDropTwoToneIcon style={{ marginRight: '10px' }} />
            04053, м. Київ, вул. Кудрявська, 23.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: '18px',
              color: '#030303',
              // background: '#ffffffde',
              // boxShadow: '0px 4px 20px #d0d7de',
              // borderRadius: '12px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <MailTwoToneIcon style={{ marginRight: '10px' }} />
            info@kks.kiev.ua
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: '18px',
              color: '#030303',
              // background: '#ffffffde',
              // boxShadow: '0px 4px 20px #d0d7de',
              // borderRadius: '12px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CalendarMonthTwoToneIcon style={{ marginRight: '10px' }} />
            понеділок-четвер з 8.00 до 17.00 (перерва з 12.00 до 12.45) п’ятниця
            з 8.00 до 15.45 (перерва з 12:00 до 12:45)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
