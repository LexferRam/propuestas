import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { faHeartbeat, faHospitalUser, faClock, faPills, faAmbulance, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import BenefitCard from './BenefitCard';

const benefitsData = [
    { icon: faHeartbeat, title: 'Respuesta en 5 Minutos', description: 'Garantizamos respuesta a tu llamada en menos de 5 minutos. Tu urgencia médica no puede esperar.' },
    { icon: faHospitalUser, title: 'Citas el Mismo Día', description: 'Agenda tu cita médica para el mismo día. Sin listas de espera, sin demoras innecesarias.' },
    { icon: faClock, title: 'Cero Tiempo de Espera', description: 'Eliminamos las salas de espera. Atención médica inmediata desde el momento que llegas.' },
    { icon: faPills, title: 'Medicamentos Express', description: 'Entrega de medicamentos en 30 minutos o menos. Servicio express a domicilio incluido.' },
    { icon: faAmbulance, title: 'Ambulancia en 8 Minutos', description: 'Tiempo promedio de llegada de ambulancia: 8 minutos. Emergencias atendidas al instante.' },
    { icon: faUserDoctor, title: 'Especialistas Sin Espera', description: 'Consulta con especialistas sin referencias previas. Acceso directo y programación inmediata.' },
];

const BenefitsSection = () => {
    return (
        <Box id="beneficios" sx={{ background: '#fff', py: 10 }}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom>
                    <span style={{ color: '#113344' }}>Nuestros</span> <span style={{ color: '#FFD700' }}>Beneficios</span>
                </Typography>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {benefitsData.map((benefit, index) => (
                        <Grid size={{ xs: 12, sm:6, md:4 }}  key={index}>
                            <BenefitCard {...benefit} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default BenefitsSection;