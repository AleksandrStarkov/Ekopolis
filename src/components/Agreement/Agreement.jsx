import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import BackImg2 from '../../assets/kherson11.jpeg';

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
        backgroundColor: ' rgba(242, 249, 242, 0.73)',
        backdropFilter: 'blur(6px)',
        animation: 'change 10s infinite ease-in-out',
      }}
    >
      <Container
        style={{
          paddingTop: '250px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '24px',
            color: '#030303',
            background: '#ffffffde',
            // width: '900px',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
          }}
        >
          На даний момент інформація відсутня
        </Typography>
      </Container>
    </Box>
  );
}
