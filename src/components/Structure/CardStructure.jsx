import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Photo from '../../assets/logo.png';

export default function CardStructure(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 350,
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        sx={{
          backgroundImage: `url(${Photo})`,
          backgroundRepeat: 'no-repeat',

          backgroundPosition: 'center',
          backgroundSize: 'containe',
          width: '200px',
          height: '190px',
        }}
      />
      <CardContent>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.position}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
