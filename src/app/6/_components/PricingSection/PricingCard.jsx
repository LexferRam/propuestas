// src/components/PricingCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)(({ theme, featured }) => ({
    background: '#1a1a1a',
    borderRadius: 20,
    padding: theme.spacing(4),
    textAlign: 'center',
    position: 'relative',
    border: `2px solid ${featured ? theme.palette.primary.main : '#333'}`,
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)',
        borderColor: theme.palette.primary.main,
        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
    },
    ...(featured && {
        transform: 'scale(1.05)',
        [theme.breakpoints.down('md')]: {
            transform: 'none',
        },
    }),
}));

const PopularBadge = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: -15,
    left: '50%',
    transform: 'translateX(-50%)',
    background: theme.palette.primary.main,
    color: '#000',
    padding: '0.5rem 1.5rem',
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: '0.9rem',
}));

const PricingCard = ({ plan, price, period, features, featured = false }) => (
    <StyledCard featured={featured}>
        {featured && <PopularBadge>Más Popular</PopularBadge>}
        <CardContent>
            <Typography variant="h3" sx={{ color: 'primary.main' }}>
                {plan}
            </Typography>
            <Box sx={{ my: 2 }}>
                <Typography component="span" sx={{ fontSize: '1.5rem', verticalAlign: 'top' }}>$</Typography>
                <Typography component="span" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>{price}</Typography>
                <Typography component="span" sx={{ fontSize: '1rem', color: '#ccc' }}>{period}</Typography>
            </Box>
            <List sx={{ mb: 4, textAlign: 'left' }}>
                {features.map((feature, index) => (
                    <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <FontAwesomeIcon icon={faCheck} style={{ color: '#FFD700' }} />
                        </ListItemIcon>
                        <ListItemText primary={feature} sx={{ color: '#fff' }} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" fullWidth>
                Elegir Plan
            </Button>
        </CardContent>
    </StyledCard>
);

export default PricingCard;