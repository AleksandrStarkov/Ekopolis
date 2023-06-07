import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import { Box, Container, Typography } from '@mui/material';
// import BackImg2 from '../../assets/kherson.jpg';
import BackImg2 from '../../assets/clean2.jpg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // width: '54px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, number) {
  return { name, calories, number };
}

const rows = [
  // createData('1.Промислові відходи  ІV кл. небезпеки '),
  createData('Сортовані побутові відходи ', '124,00', 'ТПВ 1.1'),
  createData(
    'Вуличний змет (відходи комунальні, одержані в процесі очищення вулиць, місць загального використання)',
    '124,00',
    'ТПВ 1.2',
  ),
  createData(
    'Відходи зеленого господарства (трава, листя, гілки від насаджень, одержані в процесі очищення місць загального використання) ',
    '124,00',
    'ТПВ 1.3',
  ),
  createData('Великогабаритні  побутові відходи', '124,00', 'ТПВ 1.4'),
  createData('Ремонтні побутові відходи', '124,00', 'ТПВ 1.5'),
];

const row = [
  // createData('2.Промислові відходи  ІV кл. небезпеки '),
  createData(
    'Одяг захисний зіпсований, відпрацьований чи забруднений',
    '124,00',
    'ПВ 2.1',
  ),
  createData(
    'Полімери синтетичні, забруднені або не ідентифіковані, які не можуть бути використані за призначенням (пінопласт)',
    '162,00',
    'ПВ 2.2',
  ),
  createData('Тирса деревинна, відходи деревини', '162,00', 'ПВ 2.3'),
  createData('Обрізки склотканини (скловата, мінвата)', '162,00', 'ПВ 2.4'),
  createData('Залишки зернові від очищення  зерна', '140,00', 'ПВ 2.5'),
  createData('Продукти харчування інші некондиційні', '124,00', 'ПВ 2.6'),
  createData(
    'Овочі, фрукти зіпсовані або не ідентифіковані , їх залишки, які не можуть бути використані за призначенням',
    '124,00',
    'ПВ 2.7',
  ),
  createData('Мулові відходи очисних споруд', '200,00', 'ПВ 2.8'),
  createData(
    'Відходи змішані будівництва, знесення будівель і споруд',
    '124,00',
    'ПВ 2.9',
  ),
  createData(
    'Матеріали пакувальні змішані, зіпсовані, відпрацьовані чи забруднені (непридатні для утилізації)',
    '190,00',
    'ПВ 2.10',
  ),
  // createData('Промислові відходи  ІV класу небезпеки:'),
  // createData(
  //   '1.Вуличний змет (відходи комунальні, одержані в процесі очищення вулиць, місць загального використання)',
  //   '124,00',
  // ),
  // createData(
  //   '2.Відходи зеленого господарства (трава, листя, гілки від насаджень, одержані в процесі очищення місць загального використання)',
  //   '124,00',
  // ),
];
const rowse = [
  // createData('3.Промислові відходи  ІII кл. небезпеки:'),
  createData('Залишки шкіри вичиненої', '236,00', 'ПВ 3.1'),
];

export default function CustomizedTables() {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${BackImg2})`,
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

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

          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '28px',
            color: '#030303',
            background: '#ffffffde',
            maxWidth: '700px',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
            marginBottom: '20px',
          }}
        >
          Назва відходів
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
          <Table sx={{ maxWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey' }}>
                <StyledTableCell>Код</StyledTableCell>
                <StyledTableCell style={{ textAlign: 'center' }}>
                  1.Тверді побутові відходи
                </StyledTableCell>
                <StyledTableCell align="right">ЦІНА</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ width: '54px' }}
                  >
                    {row.number}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Typography
          variant="body2"
          sx={{
            fontSize: '17px',
            color: '#030303',
            background: '#ffffffde',
            maxWidth: '700px',
            padding: '30px',
            // boxShadow: '0px 4px 20px #d0d7de',
            borderRadius: '12px',
            marginBottom: '20px',
            marginTop: '40px',
          }}
        >
          Вартість послуг по захороненню відходів зеленого господарства,
          вуличного змету
        </Typography> */}
        <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
          <Table sx={{ maxWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey' }}>
                <StyledTableCell>Код</StyledTableCell>
                <StyledTableCell style={{ textAlign: 'center' }}>
                  2.Промислові відходи ІV кл. небезпеки
                </StyledTableCell>
                <StyledTableCell align="right">ЦІНА</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ width: '54px' }}
                  >
                    {row.number}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
          <Table sx={{ maxWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey' }}>
                <StyledTableCell>Код</StyledTableCell>
                <StyledTableCell style={{ textAlign: 'center' }}>
                  3.Промислові відходи ІII кл. небезпеки:
                </StyledTableCell>
                <StyledTableCell align="right">ЦІНА</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowse.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ width: '54px' }}
                  >
                    {row.number}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
