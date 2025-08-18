// components/Testimonials.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  padding: '2rem',
  boxShadow: '0 10px 30px rgba(47, 156, 224, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10px',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '20px 20px 0 0',
  },
}));

const testimonialData = [
  { name: 'Ana M.', text: 'El servicio de PinPamPum superó mis expectativas. La atención es rápida y el personal es increíblemente amable. La mejor experiencia médica que he tenido.', avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Juan C.', text: 'Encontrar un seguro que realmente entienda mis necesidades era difícil. Con PinPamPum, encontré el plan perfecto. El equipo es muy transparente y profesional.', avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'María S.', text: 'Necesité asistencia de emergencia y la respuesta fue inmediata. Su equipo 24/7 es un salvavidas. Totalmente recomendable.', avatarUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export default function Testimonials() {
  return (
    <Box id="testimoniales" sx={{ py: 10, background: '#f8f9fa' }}>
      <Box className="container">
        <Typography variant="h2" align="center" color="primary">
          La <span style={{ color: '#2FD4E0' }}>Opinión</span> de Nuestros Clientes
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1, mb: 6, maxWidth: 600, mx: 'auto' }}>
          Conoce las experiencias de quienes han confiado en nosotros.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonialData.map((testimonial, index) => (
            <Grid size={{ xs: 12, md:4 }} key={index}>
              <StyledCard>
                <CardContent>
                  <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#2FD4E0" style={{ marginBottom: '1rem' }} />
                  <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                    <Avatar src={testimonial.avatarUrl} sx={{ width: 60, height: 60, mr: 2, border: '3px solid #2FD4E0' }} />
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}