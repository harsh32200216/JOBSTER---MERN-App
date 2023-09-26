import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { allUserAction } from '../../redux/actions/userAction';

const UserInfoDashboard = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    
    useEffect(() => {
        dispatch(allUserAction());
    }, []);

    const { users } = useSelector(state => state.allUsers);
    let user = {};
    const { palette } = useTheme();

    users.forEach(e => {
        if(e._id === id){
            user = e;
        }
    });
    
    return (
        <>
            <Box sx={{ maxWidth: "80%", margin: "auto", pt: 8 }}>
                <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Name: {user && user.firstName + " " + user.lastName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            E-mail:  {user && user.email}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Father's name: {user && user.fatherName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Mother's name: {user && user.motherName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Address: {user && user.address}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "grey", pt: 2 }} color="text.secondary">
                            Status: {user && user.role === 0 ? "Regular user" : user && user.role === 1 ? "Admin" : "Recruiter"}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ maxWidth: "80%", margin: "auto", pt: 8 }}>
                <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
                            Educational Qualifications
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <table style={{width: "100%"}}>
                            <tr>
                                <td style={{border: "1px solid #fff"}}>
                                    <Typography variant="h5" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                                        Class 10 Details:
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        Institute: {user && user.education10 && user.education10.institute}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        Passing Year: {user && user.education10 && user.education10.passingYear}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        CGPA/Percentage: {user && user.education10 && user.education10.marks}
                                    </Typography>
                                    <br />
                                </td>
                                <td style={{border: "1px solid #fff"}}>
                                    <Typography variant="h5" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                                        Class 12 Details:
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        Institute: {user && user.education12 && user.education12.institute}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        Passing Year: {user && user.education12 && user.education12.passingYear}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        CGPA/Percentage: {user && user.education12 && user.education12.marks}
                                    </Typography>
                                    <br />
                                </td>
                                <td style={{border: "1px solid #fff"}}>
                                    <Typography variant="h5" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                                        Bachelor Degree Details:
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        Institute: {user && user.educationBachelor && user.educationBachelor.institute}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        Passing Year: {user && user.educationBachelor && user.educationBachelor.passingYear}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: "#fafafa", marginLeft: "50px" }} >
                                        CGPA/Percentage: {user && user.educationBachelor && user.educationBachelor.marks}
                                    </Typography>
                                    <br />
                                </td>
                            </tr>
                        </table>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ maxWidth: "80%", margin: "auto", pt: 8 }}>
                <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
                            Other Details
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Skill set: {user && user.skills}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Preferred Locations:  {user && user.convenientLocations}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa", margin: "10px" }} >
                            Resume Link: {user && user.resumeLink}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default UserInfoDashboard;
