// src/components/PricingSection.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import PricingCard from './PricingCard';

const pricingData = [
    {
        plan: 'Plan Básico',
        price: '30',
        period: '/mes',
        features: [
            'Acceso a clínica principal',
            'Descuento en medicamentos',
            'Consultas generales ilimitadas',
            'Soporte 24/7'
        ],
        featured: false,
    },
    {
        plan: 'Plan Familiar',
        price: '75',
        period: '/mes',
        features: [
            'Todos los beneficios del Plan Básico',
            'Acceso a todas las clínicas',
            'Atención a domicilio',
            'Consultas de especialistas'
        ],
        featured: true,
    },
    {
        plan: 'Plan Platinum',
        price: '120',
        period: '/mes',
        features: [
            'Todos los beneficios del Plan Familiar',
            'Servicio de ambulancia en 8 minutos',
            'Chequeos preventivos anuales',
            'Asistencia dental y oftalmológica'
        ],
        featured: false,
    },
];

const PricingSection = () => {
    return (
        <Box id="precios" sx={{ background: '#000', py: 10 }}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom sx={{ color: '#fff' }}>
                    Nuestros <span style={{ color: '#FFD700' }}>Planes</span>
                </Typography>
                <Typography variant="body1" align="center" sx={{ color: '#ccc', mb: 6 }}>
                    Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de atención médica sin esperas.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {pricingData.map((plan, index) => (
                        <Grid size={{ xs: 12, sm:6, md:4 }} key={index}>
                            <PricingCard {...plan} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PricingSection;