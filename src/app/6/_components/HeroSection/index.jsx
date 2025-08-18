// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';

const HeroContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
    color: '#fff',
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    padding: '35px 0 30px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
}));

const HighlightedText = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const HeroSection = () => {
    return (
        <HeroContainer>
            <Container sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ flex: 1, maxWidth: 800 }}>
                    <Typography variant="h1" gutterBottom>
                        Atención <HighlightedText>Inmediata</HighlightedText> Cuando Más lo Necesitas
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 4, color: '#ccc' }}>
                        En PinPumPam entendemos que tu tiempo es valioso. Por eso garantizamos atención médica rápida, sin esperas, con respuesta inmediata las 24 horas del día.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button variant="contained" color="primary">
                            Atención Inmediata
                        </Button>
                        <Button variant="outlined" color="primary">
                            Planes Rápidos
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 4, md: 0 } }}>
                    <FontAwesomeIcon icon={faShieldHeart} style={{ fontSize: '15rem', color: '#FFD700', opacity: 0.8 }} />
                </Box>
            </Container>
        </HeroContainer>
    );
};

export default HeroSection;