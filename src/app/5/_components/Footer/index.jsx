import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShieldIcon from '@mui/icons-material/Shield';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';

const SocialLink = styled(Link)(({ theme }) => ({
  width: 50,
  height: 50,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(47, 156, 224, 0.3)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.action.main})`,
    transform: 'translateY(-3px)',
  },
}));

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: 'linear-gradient(135deg, #2F9CE0 0%, #000 100%)', color: 'white', py: 10 }}>
      <Box className="container">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md:4 }} >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ShieldIcon sx={{ mr: 1, fontSize: '2rem', color: 'secondary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>PinPamPum</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#ccc' }}>
              En PinPamPum, tu confianza es nuestro mayor logro. Con más de 15 años de experiencia, somos líderes en brindar atención médica de calidad respaldada por profesionales certificados y tecnología de vanguardia.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md:4 }}>
            <Typography variant="h3" color="secondary" sx={{ mb: 2 }}>Contacto Confiable</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                <PhoneIcon color="secondary" sx={{ mr: 2 }} />
                <Typography>+1 (555) 123-4567 - Línea Principal</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                <PhoneInTalkIcon color="secondary" sx={{ mr: 2 }} />
                <Typography>+1 (555) 987-6543 - Emergencias 24/7</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                <HeadsetMicIcon color="secondary" sx={{ mr: 2 }} />
                <Typography>+1 (555) 456-7890 - Atención al Cliente</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md:4 }}>
            <Typography variant="h3" color="secondary" sx={{ mb: 2 }}>Síguenos</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <SocialLink href="#"><FacebookIcon /></SocialLink>
              <SocialLink href="#"><TwitterIcon /></SocialLink>
              <SocialLink href="#"><InstagramIcon /></SocialLink>
              <SocialLink href="#"><LinkedInIcon /></SocialLink>
              <SocialLink href="#"><YouTubeIcon /></SocialLink>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(47, 156, 224, 0.3)', pt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            &copy; 2025 PinPamPum. Todos los derechos reservados. Tu salud, nuestra responsabilidad y compromiso.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}