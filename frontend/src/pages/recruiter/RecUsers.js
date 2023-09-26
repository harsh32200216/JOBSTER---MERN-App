import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction } from '../../redux/actions/userAction';

const DashUsers = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userProfile);

    useEffect(() => {
        dispatch(allUserAction());
    }, []);

    const { users, loading } = useSelector(state => state.allUsers);
    let data = [], dat = [];
    dat = (users !== undefined && users.length > 0) ? users : [];
    for (let i = dat.length - 1; i >= 0; i--) {
        for (let j = dat[i].jobsHistory.length - 1; j >= 0; j--) {
            if (String(dat[i].jobsHistory[j].creater_id) === String(user._id)) {
                data.push({ ...dat[i], job_id: dat[i].jobsHistory[j].job_id, job_name: dat[i].jobsHistory[j].title });
            }
        }
    }

    const columns = [
        {
            field: '_id',
            headerName: 'User ID',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 150,
        },
        {
            field: 'firstName',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'skills',
            headerName: 'Skill set',
            width: 150,
        },
        {
            field: 'convenientLocations',
            headerName: 'Preferred Locations',
            width: 150,
        },
        {
            field: 'job_id',
            headerName: 'Job ID',
            width: 150,
        },
        {
            field: 'job_name',
            headerName: 'Job',
            width: 150,
        },
        {
            field: "Actions",
            width: 150,
            renderCell: (values) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "130px" }}>
                    <Button variant="contained" color="warning">
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/recruiter/view/user/${values.row._id}`}>View Details</Link>
                    </Button>
                </Box>
            )
        }
    ];

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    All users
                </Typography>
                <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                    <Link to="/register"><Button variant='contained' color="success" startIcon={<AddIcon />}> Create user</Button></Link>
                </Box>
                <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            sx={{
                                '& .MuiTablePagination-displayedRows': {
                                    color: 'white',
                                },
                                color: 'white',
                                [`& .${gridClasses.row}`]: {
                                    bgcolor: (theme) =>
                                        theme.palette.secondary.main
                                },
                                button: {
                                    color: '#ffffff'
                                }
                            }}
                            getRowId={(row) => row._id}
                            rows={data}
                            columns={columns}
                            pageSize={3}
                            rowsPerPageOptions={[3]}
                            checkboxSelection
                            slots={{ toolbar: GridToolbar }}
                        />
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default DashUsers;