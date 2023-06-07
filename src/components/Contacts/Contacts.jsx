import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import BackImg2 from '../../assets/DJI_0610-328.jpg';

import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';

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
            Украина, місто Херсон, ПРОСПЕКТ УШАКОВА, будинок 37, 73000
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
            kpekopolis@gmail.com
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
            понеділок- п’ятниця з 9.00 до 18.00 (перерва з 12.00 до 13.00)
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
            <LocalPhoneTwoToneIcon style={{ marginRight: '10px' }} />
            +380957491669
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
