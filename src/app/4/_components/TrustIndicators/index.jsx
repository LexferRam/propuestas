import { Box, Grid, Typography, Container, useTheme } from '@mui/material';

const trustItems = [
  { number: '15+', label: 'Años de Experiencia' },
  { number: '50,000+', label: 'Pacientes Satisfechos' },
  { number: '98%', label: 'Índice de Confianza' },
  { number: '24/7', label: 'Disponibilidad Garantizada' },
];

export default function TrustIndicators() {
  const theme = useTheme();
  
  return (
    <Box sx={{ backgroundColor: 'background.default', py: 5, borderBottom: '1px solid', borderColor: 'secondary.main' }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {trustItems.map((item, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index} sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 1 }}>
                {item.number}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}