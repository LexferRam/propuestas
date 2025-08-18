// components/Pricing/PricingSection.js
import { Box, Container, Typography, Grid, Card, CardHeader, CardContent, List, ListItem, ListItemIcon, Button, useTheme } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

const plans = [
  {
    name: 'Plan Confianza Básico',
    price: 29,
    features: [
      'Médicos certificados',
      'Garantía de calidad',
      'Atención personalizada',
      '2 centros de confianza'
    ],
    featured: false
  },
  {
    name: 'Plan Familiar Seguro',
    price: 79,
    features: [
      'Todo del plan básico',
      'Cobertura familiar completa',
      'Especialistas certificados',
      'Todos los centros médicos',
      'Atención de emergencia 24/7'
    ],
    featured: true
  },
  {
    name: 'Plan Premium Confianza',
    price: 129,
    features: [
      'Todo del plan familiar',
      'Cirugías programadas',
      'Chequeos preventivos',
      'Médico a domicilio',
      'Cobertura internacional'
    ],
    featured: false
  }
];

export default function PricingSection() {
  const theme = useTheme();
  
  return (
    <Box 
      id="precios"
      sx={{ 
        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
        py: 10 
      }}
    >
      <Container>
        <Typography variant="h2">
          Planes de <Box component="span" sx={{ color: 'primary.light' }}>Confianza</Box>
        </Typography>
        
        <Typography variant="subtitle1">
          Planes respaldados por nuestra garantía de satisfacción del 100% y atención médica de calidad certificada
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid  xs={12} size={{  md:4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: '2px solid',
                  borderColor: plan.featured ? 'primary.main' : 'secondary.main',
                  position: 'relative',
                  ...(plan.featured && {
                    transform: 'scale(1.05)',
                  }),
                  '&:hover': {
                    transform: plan.featured ? 'scale(1.05) translateY(-15px)' : 'translateY(-15px)',
                    borderColor: 'primary.light',
                  },
                }}
              >
                {/*plan.featured && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: theme.palette.gradients.clinics,
                      color: '#fff',
                      px: 4,
                      py: 1,
                      borderRadius: '25px',
                      fontWeight: 'bold',
                    }}
                  >
                    Más Popular
                  </Box>
                ) */}
                
                <CardHeader
                  title={plan.name}
                  titleTypographyProps={{
                    variant: 'h5',
                    sx: {
                      color: 'primary.main',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }
                  }}
                />
                
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography component="span" sx={{ 
                      fontSize: '1.5rem',
                      verticalAlign: 'top',
                      color: 'primary.light',
                    }}>
                      $
                    </Typography>
                    
                    <Typography component="span" sx={{ 
                      fontSize: '3.5rem',
                      fontWeight: 'bold',
                      color: 'primary.main',
                    }}>
                      {plan.price}
                    </Typography>
                    
                    <Typography component="span" sx={{ 
                      fontSize: '1rem',
                      color: 'text.secondary',
                    }}>
                      /mes
                    </Typography>
                  </Box>
                  
                  <List sx={{ mb: 3 }}>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} sx={{ py: 0.7 }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                          <CheckIcon sx={{ color: 'primary.light' }} />
                        </ListItemIcon>
                        <Typography variant="body1">{feature}</Typography>
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: theme.palette.gradients.clinics,
                      py: 2,
                    }}
                    onClick={() => alert(`¡Excelente elección! Has seleccionado el ${plan.name}. Nuestro equipo te contactará pronto.`)}
                  >
                    Elegir Plan
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}