import { Box, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';

// import BackImg5 from '../../assets/icons/15.jpeg';

export default function Activity() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

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
    <Container>
      <CustomBox
        style={{
          padding: '70px 20px',
          margin: '0',
        }}
      >
        {/* <Box sx={{ flex: '1.25' }}>
          <img
            src={BackImg5}
            alt="heroImg"
            style={{ maxWidth: '100%', marginBottom: '2rem' }}
          />
        </Box> */}
        <Box sx={{ flex: '1' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '32px',
              color: '#2b6de6',
              fontWeight: '500',
            }}
          >
            navbar.aloha
          </Typography>
          <Title variant="h2" style={{ fontSize: '50px' }}>
            home.title5
          </Title>
          <Typography
            variant="body2"
            sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
          >
            home.title6
          </Typography>
        </Box>
      </CustomBox>
      <Typography variant="body2" sx={{ fontSize: '18px', color: '#5A6473' }}>
        КОМУНАЛЬНЕ ПІДПРИЄМСТВО «ЕКОПОЛІС» ХЕРСОНСЬКОЇ МІСЬКОЇ РАДИ засноване на
        комунальній власності Херсонської міської територіальної громади,
        відповідно до Господарського кодексу України, Цивільного кодексу
        України, Закону України «Про місцеве самоврядування в Україні» та згідно
        з іншими нормативно-правовими актами, передбаченими чинним
        законодавством України. Підприємство створено з метою отримання прибутку
        від господарської діяльності, спрямованої на задоволення потреб
        юридичних та фізичних осіб шляхом здійснення господарської діяльності у
        сфері з провадження діяльності з твердими побутовими відходами та
        експлуатації міського звалища (полігону) твердих побутових відходів,
        шляхом надання послуг або виконання робіт, відповідно до предмета
        діяльності Підприємства в установленому чинним законодавством порядку.
      </Typography>
    </Container>
  );
}
