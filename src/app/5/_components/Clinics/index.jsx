// components/Clinics.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link';

const clinicsData = [
  { name: 'Clínica Integral del Pacífico', city: 'Ciudad de México', imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Hospital de la Salud', city: 'Guadalajara', imageUrl: 'https://images.pexels.com/photos/338166/pexels-photo-338166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Centro de Especialidades Médicas', city: 'Monterrey', imageUrl: 'https://images.pexels.com/photos/3394348/pexels-photo-3394348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export default function Clinics() {
  return (
    <Box id="clinicas" sx={{ py: 10, background: 'linear-gradient(135deg, #f0f4f7 0%, #fff 100%)' }}>
      <Box className="container">
        <Typography variant="h2" align="center" color="primary">
          Nuestras <span style={{ color: '#2FD4E0' }}>Clínicas</span>
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1, mb: 6, maxWidth: 600, mx: 'auto' }}>
          Contamos con una amplia red de clínicas de prestigio en todo el país.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {clinicsData.map((clinic, index) => (
            <Grid size={{ xs: 12, sm:6, lg:4 }}  key={index}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={clinic.imageUrl}
                  alt={clinic.name}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h3" color="primary">
                    {clinic.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Ubicada en {clinic.city}
                  </Typography>
                  <Link href="#" passHref>
                    <Button variant="outlined" sx={{ mt: 2 }}>
                      Ver Detalles
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}