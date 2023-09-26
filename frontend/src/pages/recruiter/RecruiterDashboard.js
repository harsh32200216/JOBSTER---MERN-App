import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { jobLoadAction } from '../../redux/actions/jobAction';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import { allUserAction } from '../../redux/actions/userAction';

const AdminDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobLoadAction());
        dispatch(jobTypeLoadAction());
        dispatch(allUserAction());
    }, []);

    const { jobs } = useSelector(state => state.loadJobs);
    const { jobType } = useSelector(state => state.jobTypeAll);
    const { users } = useSelector(state => state.allUsers);
    let data = [];
    data = (jobs !== undefined && jobs.length > 0) ? jobs : [];
    let jobCount = data.length;
    data = (jobType !== undefined && jobType.length > 0) ? jobType : [];
    let typeCount = data.length;
    data = (users !== undefined && users.length > 0) ? users : [];
    let userCount = 0;
    data.forEach(e => {
        if(e.role === 2){
            userCount++;
        }
    });

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <StatComponent
                        value={userCount}
                        icon={<SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Recruiters"
                        money=''
                    />
                    <StatComponent
                        value={jobCount}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                    />
                    <StatComponent
                        value={typeCount}
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
                    />
                </Stack>
            </Box>
        </>
    );
}

export default AdminDashboard;