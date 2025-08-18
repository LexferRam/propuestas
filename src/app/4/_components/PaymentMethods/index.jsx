// components/Payment/PaymentMethods.js
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { 
  CreditCard as CreditCardIcon,
  AccountBalance as AccountBalanceIcon,
  Smartphone as SmartphoneIcon,
  Money as MoneyIcon,
  CalendarToday as CalendarTodayIcon,
  Store as StoreIcon
} from '@mui/icons-material';

const paymentMethods = [
  {
    icon: <CreditCardIcon fontSize="large" />,
    title: 'Tarjetas Seguras',
    description: 'Encriptación SSL 256-bit - Visa, Mastercard, Amex con máxima seguridad'
  },
  {
    icon: <AccountBalanceIcon fontSize="large" />,
    title: 'Transferencia Bancaria',
    description: 'Protocolos bancarios seguros - Todos los bancos certificados'
  },
  {
    icon: <SmartphoneIcon fontSize="large" />,
    title: 'Pago Móvil Seguro',
    description: 'Autenticación biométrica - PayPal, Apple Pay, Google Pay'
  },
  {
    icon: <MoneyIcon fontSize="large" />,
    title: 'Efectivo Confiable',
    description: 'Agentes autorizados - Oficinas y puntos de pago verificados'
  },
  {
    icon: <CalendarTodayIcon fontSize="large" />,
    title: 'Débito Automático',
    description: 'Procesamiento seguro - Autorización bancaria protegida'
  },
  {
    icon: <StoreIcon fontSize="large" />,
    title: 'Puntos de Pago Verificados',
    description: 'Red confiable - Farmacias y tiendas certificadas'
  }
];

export default function PaymentMethods() {
  const theme = useTheme();
  
  return (
    <Box 
      id="pagos"
      sx={{ 
        background: theme.palette.gradients.payment,
        py: 10,
        color: '#fff',
      }}
    >
      <Container>
        <Typography variant="h2">
          Métodos de Pago <Box component="span" sx={{ color: 'secondary.main' }}>Seguros</Box>
        </Typography>
        
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Procesamiento seguro con encriptación bancaria - Tu información financiera está completamente protegida
        </Typography>
        
        <Grid container spacing={4}>
          {paymentMethods.map((method, index) => (
            <Grid size={{ xs:12, sm:6,  md:4 }}  key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      background: theme.palette.gradients.clinics,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 8px 20px rgba(147, 21, 46, 0.3)',
                      color: '#fff',
                    }}
                  >
                    {method.icon}
                  </Box>
                  
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
                    {method.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {method.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}