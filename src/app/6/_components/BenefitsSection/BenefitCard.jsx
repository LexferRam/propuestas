import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: 20,
    background: ' rgba(210, 220,225, 0.1)', 
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
        borderColor: theme.palette.primary.main,
    },
}));

const IconBox = styled(Box)(({ theme }) => ({
    width: 80,
    height: 80,
    background: theme.palette.primary.main,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
}));

const BenefitCard = ({ icon, title, description }) => (
    <StyledCard>
        <CardContent>
            <IconBox>
                <FontAwesomeIcon icon={icon} style={{ fontSize: '2rem', color: '#000' }} />
            </IconBox>
            <Typography variant="h3" gutterBottom sx={{ color: '#666' }} >
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
                {description}
            </Typography>
        </CardContent>
    </StyledCard>
);

export default BenefitCard;