import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import BackImg2 from '../../assets/clean2.jpg';

const RootBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 120px)',
  },
}));

export default function Activity() {
  return (
    <RootBox
      sx={{
        // backgroundImage: `url(${BackImg2})`,
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // height: 'calc(100vh - 100px)',
        // width: '100%',
        // minHeight: '80vh',
        // backgroundColor: ' rgba(242, 249, 242, 0.73)',
        // backdropFilter: 'blur(6px)',
        // animation: 'change 10s infinite ease-in-out',
      }}
    >
      <Container
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          display: 'flex',
          justifyContent: 'center',
          // maxWidth: '700px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '18px',
            color: '#030303',
            background: '#ffffffde',
            // width: '100wv',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
            // maxWidth: '700px',
          }}
        >
          КОМУНАЛЬНЕ ПІДПРИЄМСТВО «ЕКОПОЛІС» ХЕРСОНСЬКОЇ МІСЬКОЇ РАДИ засноване
          на комунальній власності Херсонської міської територіальної громади,
          відповідно до Господарського кодексу України, Цивільного кодексу
          України, Закону України «Про місцеве самоврядування в Україні» та
          згідно з іншими нормативно-правовими актами, передбаченими чинним
          законодавством України. Підприємство створено з метою отримання
          прибутку від господарської діяльності, спрямованої на задоволення
          потреб юридичних та фізичних осіб шляхом здійснення господарської
          діяльності у сфері з провадження діяльності з твердими побутовими
          відходами та експлуатації міського звалища (полігону) твердих
          побутових відходів, шляхом надання послуг або виконання робіт,
          відповідно до предмета діяльності Підприємства в установленому чинним
          законодавством порядку.
        </Typography>
      </Container>
    </RootBox>
  );
}
