// components/Payments.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

const paymentData = [
  { name: 'Visa', logo: 'https://cdn-icons-png.flaticon.com/512/349/349221.png', alt: 'Visa' },
  { name: 'Mastercard', logo: 'https://cdn-icons-png.flaticon.com/512/349/349228.png', alt: 'Mastercard' },
  { name: 'American Express', logo: 'https://cdn-icons-png.flaticon.com/512/349/349226.png', alt: 'American Express' },
  { name: 'PayPal', logo: 'https://cdn-icons-png.flaticon.com/512/174/174861.png', alt: 'PayPal' },
];

export default function Payments() {
  return (
    <Box id="pagos" sx={{ py: 10, background: '#f8f9fa' }}>
      <Box className="container">
        <Typography variant="h2" align="center" color="primary">
          Formas de <span style={{ color: '#2FD4E0' }}>Pago</span>
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1, mb: 6, maxWidth: 600, mx: 'auto' }}>
          Aceptamos las principales tarjetas de crédito para tu comodidad y seguridad.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {paymentData.map((payment, index) => (
            <Grid size={{ xs: 6, sm:4, lg:2 }} key={index}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <CardContent>
                  <Image src={payment.logo} alt={payment.alt} width={80} height={50}  />
                  <Typography variant="body1" sx={{ mt: 1 }}>{payment.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}