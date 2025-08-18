// components/Pricing.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const pricingData = [
  {
    plan: 'Plan Básico',
    price: '$50',
    features: ['Consultas online ilimitadas', 'Acceso a red de clínicas', '20% de descuento en medicamentos', 'Soporte 24/7'],
  },
  {
    plan: 'Plan Premium',
    price: '$90',
    features: ['Todas las del Plan Básico', 'Consultas presenciales gratuitas', '50% de descuento en medicamentos', 'Servicio de ambulancia de emergencia'],
  },
  {
    plan: 'Plan Élite',
    price: '$150',
    features: ['Todas las del Plan Premium', 'Chequeos anuales completos', 'Asistencia médica internacional', 'Reembolso total de medicamentos'],
  },
];

export default function Pricing() {
  return (
    <Box id="precios" sx={{ py: 10, background: 'linear-gradient(135deg, #2F9CE0 0%, #2FD4E0 100%)', color: 'white' }}>
      <Box className="container">
        <Typography variant="h2" align="center" color="white">
          Nuestros <span style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Planes de Precios</span>
        </Typography>
        <Typography variant="subtitle1" align="center" color="white" sx={{ mt: 1, mb: 6, maxWidth: 600, mx: 'auto' }}>
          Elige el plan que mejor se adapte a tus necesidades y comienza a cuidar de tu salud.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {pricingData.map((tier, index) => (
            <Grid size={{ xs: 12, md:4 }}  key={index}>
              <Card sx={{ textAlign: 'center', p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'white' }}>
                <CardContent>
                  <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
                    {tier.plan}
                  </Typography>
                  <Typography variant="h2" color="secondary" sx={{ fontWeight: 'bold', my: 2 }}>
                    {tier.price}
                    <Typography component="span" variant="h6" color="text.secondary" sx={{ ml: 1 }}>
                      /mes
                    </Typography>
                  </Typography>
                  <List>
                    {tier.features.map((feature, i) => (
                      <ListItem key={i} disablePadding>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} sx={{ color: 'text.secondary' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Button variant="contained" fullWidth sx={{ mt: 'auto', p: 1.5 }}>
                  Contratar
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}