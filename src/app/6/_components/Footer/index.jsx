// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, Link as MuiLink, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faPhone, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 0),
}));

const SocialLink = styled(MuiLink)(({ theme }) => ({
    width: 40,
    height: 40,
    background: '#333',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    '&:hover': {
        background: theme.palette.primary.main,
        color: '#000',
        transform: 'translateY(-3px)',
    },
}));

const Footer = () => {
    return (
        <Box component="footer" sx={{ background: '#000', color: '#fff', py: 8 }}>
            <Container>
                <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, md:4 }} >
                        <FooterSection>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <FontAwesomeIcon icon={faShieldAlt} style={{ fontSize: '1.8rem', color: '#FFD700', marginRight: '0.5rem' }} />
                                <Typography variant="h6" component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                                    PinPumPam
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#ccc', lineHeight: 1.6 }}>
                                En PinPumPam, tu tiempo es oro. Brindamos atención médica inmediata sin esperas, porque entendemos que tu salud no puede esperar.
                            </Typography>
                        </FooterSection>
                    </Grid>
                    <Grid size={{ xs: 12, md:4 }}>
                        <FooterSection>
                            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                                Contacto Inmediato
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                                    <FontAwesomeIcon icon={faPhone} style={{ color: '#FFD700', marginRight: '0.5rem', width: 20 }} />
                                    <Typography variant="body2">+1 (555) 123-4567 - Línea Express</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                                    <FontAwesomeIcon icon={faPhone} style={{ color: '#FFD700', marginRight: '0.5rem', width: 20 }} />
                                    <Typography variant="body2">+1 (555) 987-6543 - Emergencias 24/7</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                                    <FontAwesomeIcon icon={faHeadset} style={{ color: '#FFD700', marginRight: '0.5rem', width: 20 }} />
                                    <Typography variant="body2">+1 (555) 456-7890 - Atención Rápida</Typography>
                                </Box>
                            </Box>
                        </FooterSection>
                    </Grid>
                    <Grid size={{ xs: 12, md:4 }}>
                        <FooterSection>
                            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                                Síguenos
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <SocialLink href="#"><FontAwesomeIcon icon={faFacebookF} /></SocialLink>
                                <SocialLink href="#"><FontAwesomeIcon icon={faTwitter} /></SocialLink>
                                <SocialLink href="#"><FontAwesomeIcon icon={faInstagram} /></SocialLink>
                                <SocialLink href="#"><FontAwesomeIcon icon={faLinkedinIn} /></SocialLink>
                                <SocialLink href="#"><FontAwesomeIcon icon={faYoutube} /></SocialLink>
                            </Box>
                        </FooterSection>
                    </Grid>
                </Grid>
                <Box sx={{ borderTop: '1px solid #333', pt: 2, textAlign: 'center', color: '#ccc' }}>
                    <Typography variant="body2">
                        &copy; 2025 PinPumPam. Todos los derechos reservados. Atención médica sin esperas.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;