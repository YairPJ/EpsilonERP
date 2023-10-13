import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { loadImageSecurity } from '../../../helpers/loadImageSecurity';
import whitOutImage from '../../../../public/images/iconSinImage.png';
import { useDispatch } from 'react-redux';
import { setUserActive } from '../../../store/Gestion/Gestion';

export default function CardUsuario({ dataUsuario }) {
  const [securityUrl, setSecurityUrl] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchImageSecurityUrl() {
      try {
        const url = await loadImageSecurity(dataUsuario.ImagenUrl);
        setSecurityUrl(url);
      } catch (error) {
        // Maneja el error aquí si es necesario
      }
    }

    fetchImageSecurityUrl();
  }, []);


  return (
    <Card sx={{ width: 200, height: 300, backgroundColor: '#B2BABB', marginLeft: '25px' }}>
      <CardActionArea onClick={()=>dispatch(setUserActive(dataUsuario))}>
        {securityUrl ? (
          <CardMedia component="img" height="140" image={securityUrl} />
        ) : (
          <CardMedia component="img" height="140"  image={whitOutImage} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataUsuario.Nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dataUsuario.Puesto}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
