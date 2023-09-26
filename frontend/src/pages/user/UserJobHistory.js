import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> Jobs History</Typography>
                <Box>
                    {
                        user && user.jobsHistory.map((history, i) => (
                            <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
                                <CardContent >
                                    <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
                                        <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {history.location}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {history.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1 }} color="text.secondary">
                                        {history.category}
                                    </Typography>
                                    <Typography sx={{ mb: 1 }} color="text.secondary">
                                        Salary: ₹ {history.salary}
                                    </Typography>
                                    <Typography sx={{ mb: 1 }} color="text.secondary">
                                        Status: {history.applicationStatus}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description: {history.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Box>
            </Box>
        </>
    );
};

export default UserJobsHistory;