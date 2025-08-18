import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { 
  Verified as VerifiedIcon,
  Security as SecurityIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  Handshake as HandshakeIcon,
  People as PeopleIcon,
  SupportAgent as SupportAgentIcon
} from '@mui/icons-material';

const benefits = [
  { icon: <VerifiedIcon fontSize="large" />, title: 'Profesionales Certificados', description: 'Nuestro equipo médico cuenta con certificaciones internacionales y más de 10 años de experiencia promedio.' },
  { icon: <SecurityIcon fontSize="large" />, title: 'Seguridad Garantizada', description: 'Protocolos de seguridad validados por organismos internacionales. Tu información y salud están protegidas.' },
  { icon: <WorkspacePremiumIcon fontSize="large" />, title: 'Reconocimiento Internacional', description: 'Premiados como la mejor aseguradora de salud 3 años consecutivos.' },
  { icon: <HandshakeIcon fontSize="large" />, title: 'Compromiso Transparente', description: 'Sin letra pequeña, sin sorpresas. Nuestros contratos son claros y transparentes.' },
  { icon: <PeopleIcon fontSize="large" />, title: 'Atención Personalizada', description: 'Cada paciente es único. Nuestro equipo diseña planes de atención personalizados.' },
  { icon: <SupportAgentIcon fontSize="large" />, title: 'Soporte 24/7 Confiable', description: 'Nuestro equipo de atención está disponible las 24 horas, todos los días del año.' },
];

export default function BenefitsSection() {
  const theme = useTheme();
  
  return (
    <Box 
      id="beneficios"
      sx={{ 
        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
        py: 10,
      }}
    >
      <Container>
        <Typography variant="h2">
          ¿Por Qué <Box component="span" sx={{ color: 'primary.light' }}>Confiar</Box> en PinPamPum?
        </Typography>
        
        <Typography variant="subtitle1">
          Respaldamos cada servicio con la experiencia de profesionales certificados y la seguridad de procesos validados internacionalmente
        </Typography>
        
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid  size={{ xs: 12, sm: 6, md:4 }}  key={index}>
              <Card
                sx={{
                  height: '100%',
                  '&:hover': {
                    borderColor: 'secondary.main',
                  },
                  '&::before': {
                    background: theme.palette.gradients.hero,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      width: '90px',
                      height: '90px',
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
                    {benefit.icon}
                  </Box>
                  
                  <Typography variant="h5" sx={{ color: 'primary.main' }}>
                    {benefit.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {benefit.description}
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