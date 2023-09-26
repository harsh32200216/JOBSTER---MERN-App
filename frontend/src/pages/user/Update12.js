import { Avatar, Box } from '@mui/material'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import SchoolIcon from '@mui/icons-material/School';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { userEditAction } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    institute: yup
        .string('Enter your Institute Name')
        .min(3, 'Institute Name should be of minimum 3 characters length')
        .required('Institute Name is required'),
    passingYear: yup
        .string('Enter your Passing Year')
        .min(4, 'Passing Year should be of minimum 4 characters length')
        .required('Passing Year is required'),
    marks: yup
        .string('Enter your marks')
        .required('Marks is required'),
});

const Update = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            institute: user.education12 && user.education12.institute,
            passingYear: user.education12 && user.education12.passingYear,
            marks: user.education12 && user.education12.marks
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userEditAction({ education12: {...values}, id: user._id }, user._id));
            navigate("/user/edit/eduBachelor");
        }
    })

    return (
        <>
            <Navbar />
            <Box sx={{ margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 2 }}>
                            <SchoolIcon />
                        </Avatar>
                        <h3>Class 12 details</h3>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="institute"
                            label="Institute"
                            name='institute'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Institute"
                            value={formik.values.institute}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.institute && Boolean(formik.errors.institute)}
                            helperText={formik.touched.institute && formik.errors.institute}
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
                            id="passingYear"
                            label="Passing Year"
                            name='passingYear'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Passing Year"
                            value={formik.values.passingYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.passingYear && Boolean(formik.errors.passingYear)}
                            helperText={formik.touched.passingYear && formik.errors.passingYear}
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
                            id="marks"
                            label="Percentage/CGPA"
                            name='marks'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Percentage/CGPA"
                            value={formik.values.marks}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.marks && Boolean(formik.errors.marks)}
                            helperText={formik.touched.marks && formik.errors.marks}
                        />
                        <Button fullWidth variant="contained" type='submit' >Update & Next</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default Update;