// components/TrustIndicators.js
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faUsers, faStar, faHandshake } from '@fortawesome/free-solid-svg-icons';

const indicatorsData = [
  { icon: faHeartbeat, number: '+15', label: 'Años de Experiencia' },
  { icon: faUsers, number: '+500', label: 'Profesionales en Red' },
  { icon: faStar, number: '4.9', label: 'Calificación de Usuarios' },
  { icon: faHandshake, number: '+10K', label: 'Clientes Satisfechos' },
];

export default function TrustIndicators() {
  return (
    <Box sx={{ py: 6, textAlign: 'center', background: 'white' }}>
      <Box className="container">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {indicatorsData.map((indicator, index) => (
            <Grid size={{ xs: 6, sm:3 }}  key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FontAwesomeIcon icon={indicator.icon} size="3x" color="#2F9CE0" style={{ marginBottom: '1rem' }} />
                <Typography variant="h2" color="primary" sx={{ fontWeight: 'bold' }}>
                  {indicator.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {indicator.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ my: 6 }} />
    </Box>
  );
}