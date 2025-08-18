// components/Clinics/ClinicsSection.js
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { 
  //Hospital as HospitalIcon,
  LocalHospital as LocalHospitalIcon,
  MedicalServices as MedicalServicesIcon,
  Healing as HealingIcon
} from '@mui/icons-material';

const clinics = [
  {
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
    icon:  <LocalHospitalIcon fontSize="large" />,
    name: 'Hospital Confianza Central',
    description: 'Certificación ISO 9001. Más de 20 años brindando atención médica de excelencia con tecnología de vanguardia.',
    location: 'Ciudad Principal'
  },
  {
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
    icon:  <LocalHospitalIcon fontSize="large" />,
    name: 'Clínica Segura San Rafael',
    description: 'Acreditación internacional JCI. Especialistas con formación en las mejores universidades del mundo.',
    location: 'Zona Norte'
  },
  {
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg',
    icon: <MedicalServicesIcon fontSize="large" />,
    name: 'Centro Médico Vida Segura',
    description: 'Equipamiento médico de última generación. Protocolos de seguridad validados por organismos internacionales.',
    location: 'Zona Sur'
  },
  {
    image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg',
    icon: <HealingIcon fontSize="large" />,
    name: 'Hospital Metro Confiable',
    description: 'Centro de referencia nacional. Más de 100 especialistas certificados trabajando por tu bienestar y tranquilidad.',
    location: 'Centro'
  }
];

export default function ClinicsSection() {
  const theme = useTheme();
  
  return (
    <Box 
      id="clinicas"
      sx={{ 
        background: theme.palette.gradients.clinics,
        py: 10,
        color: '#fff',
      }}
    >
      <Container>
        <Typography variant="h2">
          Centros Médicos de <Box component="span" sx={{ color: 'secondary.main' }}>Confianza</Box>
        </Typography>
        
        <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
          Red de centros médicos certificados con los más altos estándares de calidad y seguridad
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {clinics.map((clinic, index) => (
            <Grid size={{ xs: 12, sm: 6, md:3 }} key={index}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(225, 173, 187, 0.3)',
                }}
              >
                <Box
                  component="img"
                  src={clinic.image}
                  alt={clinic.name}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    mb: 2,
                  }}
                />
                
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '70px',
                      height: '70px',
                      background: theme.palette.gradients.clinics,
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      boxShadow: '0 6px 15px rgba(147, 21, 46, 0.3)',
                      color: '#fff',
                    }}
                  >
                    {clinic.icon}
                  </Box>
                  
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>
                    {clinic.name}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                    {clinic.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.light' }}>
                    <Box
                      component="span"
                      sx={{
                        mr: 1,
                        color: 'primary.light',
                      }}
                    >
                      <HealingIcon fontSize="small" />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {clinic.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}