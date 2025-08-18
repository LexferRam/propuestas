// src/components/ClinicCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)(({ theme }) => ({
    background: '#f1f1f1ff',
    borderRadius: 15,
    color: '#333',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        borderColor: theme.palette.primary.main,
        boxShadow: '0 10px 20px rgba(255, 215, 0, 0.2)',
    },
}));

const ClinicCard = ({ name, address, schedules }) => (
    <StyledCard>
        <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#FFD700', fontSize: '1.5rem', marginRight: '1rem' }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>
            </Box>
            <Typography variant="body2" sx={{  mb: 1 }}>
                {address}
            </Typography>
            <Typography variant="body2" >
                **Horario:**
                <br />
                {schedules.map((schedule, index) => (
                    <React.Fragment key={index}>
                        {schedule}
                        {index < schedules.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </Typography>
        </CardContent>
    </StyledCard>
);

export default ClinicCard;