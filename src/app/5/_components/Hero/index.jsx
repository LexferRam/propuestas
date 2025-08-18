// components/Hero.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #2F9CE0 0%, #2FD4E0 50%, #2F64E0 100%)',
        color: 'white',
        padding: '30px 2rem 40px',
        display: 'flex',
        alignItems: 'center',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Grid container spacing={4} alignItems="center" sx={{  margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Grid size={{ xs: 12, md:6 }} >
          <Box>
            <Typography variant="h1" color="white" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Atención <span style={{ color: '#2FD4E0' }}>Inmediata</span> Cuando Más lo Necesitas
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 4, color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              En PinPamPum, tu <strong>confianza</strong> es nuestra prioridad. Contamos con más de 15 años de experiencia brindando atención médica de calidad, respaldados por profesionales certificados y tecnología de vanguardia que garantiza tu seguridad y bienestar.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained">Confía en Nosotros</Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12,  md:6 }}  sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: 500, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)', border: '4px solid rgba(47, 156, 224, 0.3)' }}>
            <Image
              src="/propuesta2/doctors-disc_1800x1200.jpg"
              alt="Equipo médico profesional de confianza"
              width={800}
              height={533}
              
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}