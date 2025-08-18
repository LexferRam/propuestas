// components/Hero/HeroSection.js
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{
        background: theme.palette.gradients.hero,
        color: '#fff',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: '35px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg) center/cover',
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
        <Box sx={{ flex: 1, maxWidth: '800px', mb: { xs: 4, md: 0 } }}>
          <Typography 
            variant="h1"
            sx={{ 
              mb: 3,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Atención <Box component="span" sx={{ color: 'secondary.main', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Inmediata</Box> Cuando Más lo Necesitas
          </Typography>
          
          <Typography variant="subtitle1" sx={{ mb: 3, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
            En PinPamPum, tu <Box component="strong">confianza</Box> es nuestra prioridad. Contamos con más de 15 años de experiencia brindando atención médica de calidad.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="primary"
              href="#beneficios"
              sx={{
                px: 5,
                py: 2,
              }}
            >
              Confía en Nosotros
            </Button>
            
            <Button 
              variant="secondary"
              href="#clinicas"
              sx={{
                px: 5,
                py: 2,
              }}
            >
              Conoce Nuestros Expertos
            </Button>
          </Box>
        </Box>
        
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Image 
            src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg" 
            alt="Equipo médico profesional de confianza" 
            width={500} 
            height={350}
            style={{
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              border: '4px solid rgba(225, 173, 187, 0.3)',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}