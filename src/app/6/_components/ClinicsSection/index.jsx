// src/components/ClinicsSection.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ClinicCard from './ClinicCard';

const clinicsData = [
    {
        name: 'Clínica Centro',
        address: 'Av. Libertador #123, Caracas',
        schedules: ['Lunes a Viernes: 8am - 8pm', 'Sábados: 9am - 2pm']
    },
    {
        name: 'Clínica Norte',
        address: 'Calle 50, Urb. El Bosque',
        schedules: ['Lunes a Sábado: 7am - 9pm', 'Domingos: 10am - 4pm']
    },
    {
        name: 'Clínica Sur',
        address: 'Carrera 15, Sector Los Mangos',
        schedules: ['24/7 de Lunes a Domingo']
    },
    {
        name: 'Clínica Este',
        address: 'Av. Principal, Urb. La Castellana',
        schedules: ['Lunes a Viernes: 7am - 8pm', 'Sábados y Domingos: 8am - 6pm']
    },
];

const ClinicsSection = () => {
    return (
        <Box id="clinicas" sx={{ background: '#fff', py: 10 }}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom>
                    <span style={{ color: '#113344' }}>Nuestras</span> <span style={{ color: '#FFD700' }}>Clínicas Afiliadas</span>
                </Typography>
                <Typography variant="body1" align="center" sx={{ color: '#666', mb: 6 }}>
                    Encuentra la clínica más cercana para recibir atención médica inmediata.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {clinicsData.map((clinic, index) => (
                        <Grid size={{ xs: 12, sm:6, md:3 }} key={index}>
                            <ClinicCard {...clinic} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ClinicsSection;