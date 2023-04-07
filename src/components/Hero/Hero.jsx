import { Box, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';

import BackImg from '../../assets/khersoncleanup.jpg';

const Hero = () => {
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
      <Box
        sx={{
          backgroundImage: `url(${BackImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          minHeight: '80vh',
        }}
      >
        <Container style={{ paddingTop: '200px' }}>
          <Box
            sx={{ flex: '1' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // border: '2px solid rgba(14, 1, 1, 0.5)',
              // borderRadius: '5px',
              // background: '#9324e746',
              padding: '2px',
              width: '500px',
              height: '300px',
              // boxShadow: '0 0 15px rgb(191, 2, 248)',
            }}
          >
            {/* <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#0f0494',
                fontWeight: '500',
              }}
            >
              'home.title'
            </Typography> */}
            {/* <Title variant="h1">КП "Екополіс"</Title> */}
          </Box>
        </Container>
      </Box>
      {/* <Main /> */}
    </>
  );
};

export default Hero;
