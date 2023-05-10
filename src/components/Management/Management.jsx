import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import BackImg2 from '../../assets/clean3.jpg';
import Photo from '../../assets/logo.png';

// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(name, position) {
  return { name, position };
}

const rows = [
  createData('Директор ', 'Коваль Володимир Валерійович'),
  createData('Заступник директора по розвитку', 'Данилов Володимир Вікторович'),
  createData('Головний бухгалтер ', 'Ільницький Борис Іванович '),
  createData('Економіст ', 'Бідножевська Тетяна Леонідівна'),
  createData('Діловод', 'Зелінська Олена Сергіівна'),
];

export default function CustomizedTables() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        minHeight: '80vh',
        backgroundColor: ' rgba(242, 249, 242, 0.73)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <Container
        style={{
          paddingTop: '50px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TableContainer component={Paper} style={{ width: 'auto' }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.position}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <div style={{ display: 'flex', margin: '20px' }}>
        <div style={{ display: 'flex', margin: '20px' }}>
          <CardMedia
            component="img"
            // alt="green iguana"
            height="100"
            style={{
              borderRadius: '50%',
              // background: 'red',
              width: '100px',
              backgroundImage: `url(${Photo})`,
            }}
          />
          <Card sx={{ maxWidth: 345, marginTop: '80px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{ display: 'flex', margin: '20px' }}>
          <CardMedia
            component="img"
            // alt="green iguana"
            height="100"
            style={{
              borderRadius: '50%',
              // background: 'red',
              width: '100px',
              backgroundImage: `url(${Photo})`,
            }}
          />
          <Card sx={{ maxWidth: 345, marginTop: '80px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Box>
  );
}
