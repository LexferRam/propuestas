// components/Footer/Footer.js
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { 
  Phone as PhoneIcon,
  PhoneInTalk as PhoneInTalkIcon,
  Headset as HeadsetIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box 
      id="contacto"
      component="footer"
      sx={{
        background: (theme) => theme.palette.gradients.footer,
        color: '#fff',
        py: 8,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'secondary.main',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  P
                </Box>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                PinPamPum
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'text.disabled', lineHeight: 1.7 }}>
              En PinPamPum, tu confianza es nuestro mayor logro. Con más de 15 años de experiencia, 
              somos líderes en brindar atención médica de calidad respaldada por profesionales 
              certificados y tecnología de vanguardia.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 3, fontWeight: 'bold' }}>
              Contacto Confiable
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ color: 'secondary.main', mr: 2 }} />
                <Typography variant="body1" sx={{ color: 'text.disabled' }}>
                  +1 (555) 123-4567 - Línea Principal
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneInTalkIcon sx={{ color: 'secondary.main', mr: 2 }} />
                <Typography variant="body1" sx={{ color: 'text.disabled' }}>
                  +1 (555) 987-6543 - Emergencias 24/7
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HeadsetIcon sx={{ color: 'secondary.main', mr: 2 }} />
                <Typography variant="body1" sx={{ color: 'text.disabled' }}>
                  +1 (555) 456-7890 - Atención al Cliente
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 3, fontWeight: 'bold' }}>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {[
                { icon: <FacebookIcon />, label: 'Facebook' },
                { icon: <TwitterIcon />, label: 'Twitter' },
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <YouTubeIcon />, label: 'YouTube' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  sx={{
                    width: 50,
                    height: 50,
                    background: 'linear-gradient(135deg, #c23848, #db8aa8)',
                    color: '#fff',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #e1adbb, #db8aa8)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(194, 56, 72, 0.4)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(225, 173, 187, 0.3)',
            pt: 4,
            mt: 4,
            textAlign: 'center',
            color: 'text.disabled',
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} PinPamPum. Todos los derechos reservados. 
            Tu salud, nuestra responsabilidad y compromiso.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}