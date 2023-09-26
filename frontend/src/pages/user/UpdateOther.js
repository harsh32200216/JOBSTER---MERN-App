import { Avatar, Box } from '@mui/material'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import InfoIcon from '@mui/icons-material/Info';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { userEditAction } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    skills: yup.string('Enter your Skills'),
    convenientLocations: yup.string('Enter your Convenient Locations'),
    resumeLink: yup.string('Enter your resume link')
});

const Update = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            skills: user.skills,
            convenientLocations: user.convenientLocations,
            resumeLink: user.resumeLink
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            console.log(user._id);
            dispatch(userEditAction({ ...values, id: user._id }, user._id));
            navigate("/user/info");
        }
    })

    return (
        <>
            <Navbar />
            <Box sx={{ margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 2 }}>
                            <InfoIcon />
                        </Avatar>
                        <h3>Other Details</h3>
                        <TextField
                            multiline
                            rows="3"
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="skills"
                            label="Skills"
                            name='skills'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Skills"
                            value={formik.values.skills}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.skills && Boolean(formik.errors.skills)}
                            helperText={formik.touched.skills && formik.errors.skills}
                        />
                        <TextField
                            multiline
                            rows="3"
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="convenientLocations"
                            label="Convenient Locations"
                            name='convenientLocations'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Convenient Locations"
                            value={formik.values.convenientLocations}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.convenientLocations && Boolean(formik.errors.convenientLocations)}
                            helperText={formik.touched.convenientLocations && formik.errors.convenientLocations}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="resumeLink"
                            label="Resume Link"
                            name='resumeLink'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Resume Link"
                            value={formik.values.resumeLink}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.resumeLink && Boolean(formik.errors.resumeLink)}
                            helperText={formik.touched.resumeLink && formik.errors.resumeLink}
                        />
                        <Button fullWidth variant="contained" type='submit'>Update & Next</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default Update;