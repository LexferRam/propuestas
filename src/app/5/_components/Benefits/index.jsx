// components/Benefits.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShieldAlt, faAward, faHandshake, faUsers, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: '2.5rem',
  boxShadow: '0 10px 30px rgba(47, 156, 224, 0.1)',
  border: '2px solid transparent',
  '&:hover': {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

const BenefitIcon = styled(Box)(({ theme }) => ({
  width: 90,
  height: 90,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1.5rem',
  boxShadow: '0 8px 20px rgba(47, 156, 224, 0.3)',
}));

const benefitsData = [
  { title: 'Profesionales Certificados', icon: faCertificate, text: 'Nuestro equipo médico cuenta con certificaciones internacionales y más de 10 años de experiencia promedio, garantizando atención de la más alta calidad.' },
  { title: 'Seguridad Garantizada', icon: faShieldAlt, text: 'Protocolos de seguridad validados por organismos internacionales. Tu información y salud están completamente protegidas con nosotros.' },
  { title: 'Reconocimiento Internacional', icon: faAward, text: 'Premiados como la mejor aseguradora de salud 3 años consecutivos. Nuestra excelencia está respaldada por reconocimientos oficiales.' },
  { title: 'Compromiso Transparente', icon: faHandshake, text: 'Sin letra pequeña, sin sorpresas. Nuestros contratos son claros y transparentes. Lo que prometes, lo cumplimos al 100%.' },
  { title: 'Atención Personalizada', icon: faUsers, text: 'Cada paciente es único. Nuestro equipo de especialistas diseña planes de atención personalizados para cada necesidad específica.' },
  { title: 'Soporte 24/7 Confiable', icon: faPhoneAlt, text: 'Nuestro equipo de atención está disponible las 24 horas, todos los días del año. Siempre tendrás a alguien en quien confiar.' },
];

export default function Benefits() {
  return (
    <Box id="beneficios" sx={{ padding: '100px 0' }}>
      <Box className="container">
        <Typography variant="h2" align="center" color="primary">
          ¿Por Qué <span style={{ color: '#2FD4E0' }}>Confiar</span> en PinPamPum?
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1, mb: 6, maxWidth: 600, mx: 'auto' }}>
          Respaldamos cada servicio con la experiencia de profesionales certificados y la seguridad de procesos validados internacionalmente
        </Typography>
        <Grid container spacing={4}>
          {benefitsData.map((benefit, index) => (
            <Grid size={{ xs: 12, sm: 6, lg:4 }}  key={index}>
              <StyledCard>
                <CardContent>
                  <BenefitIcon>
                    <FontAwesomeIcon icon={benefit.icon} size="2x" color="white" />
                  </BenefitIcon>
                  <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.text}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}