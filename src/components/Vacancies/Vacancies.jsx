import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

import BackImg2 from '../../assets/khersoncleanup.jpg';

export default function About() {
  // const CustomBox = styled(Box)(({ theme }) => ({
  //   display: 'flex',
  //   justifyContent: 'center',
  //   gap: theme.spacing(5),
  //   marginTop: theme.spacing(3),
  //   [theme.breakpoints.down('md')]: {
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     textAlign: 'center',
  //   },
  // }));

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
        // backgroundImage: `url(${BackImg2})`,
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 134px)',

        // backgroundColor: ' rgba(242, 249, 242, 0.73)',
        // backdropFilter: 'blur(6px)',
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
            // width: '100wv',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
          }}
        >
          На даний момент вакансії відсутні
        </Typography>
      </Container>
    </Box>
  );
}
