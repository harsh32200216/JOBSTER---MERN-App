import { Avatar, Box } from '@mui/material'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { userEditAction } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your First Name')
        .min(3, 'First Name should be of minimum 3 characters length')
        .required('First Name is required'),
    lastName: yup
        .string('Enter your Last Name')
        .min(3, 'Last Name should be of minimum 3 characters length')
        .required('Last Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    fatherName: yup
        .string('Enter your Father\'s Name')
        .min(3, 'Father\'s Name should be of minimum 3 characters length')
        .required('Father\'s Name is required'),
    motherName: yup
        .string('Enter your Mother\'s Name')
        .min(3, 'Mother\'s Name should be of minimum 3 characters length')
        .required('Mother\'s Name is required'),
    address: yup
        .string('Enter your address')
        .min(3, 'Address should be of minimum 3 characters length')
        .required('Address is required'),
});

const Update = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            fatherName: user.fatherName,
            motherName: user.motherName,
            address: user.address
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            console.log(user._id);
            dispatch(userEditAction({ ...values, id: user._id }, user._id));
            navigate("/user/edit/edu10");
        }
    })

    return (
        <>
            <Navbar />
            <Box sx={{ margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 2 }}>
                            <PersonIcon />
                        </Avatar>
                        <h3>Personal Details</h3>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
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
                            id="lastName"
                            label="Last Name"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
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
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
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
                            id="fatherName"
                            label="Father's Name"
                            name='fatherName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Father's Name"
                            value={formik.values.fatherName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
                            helperText={formik.touched.fatherName && formik.errors.fatherName}
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
                            id="motherName"
                            label="Mother's Name"
                            name='motherName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Mother's Name"
                            value={formik.values.motherName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.motherName && Boolean(formik.errors.motherName)}
                            helperText={formik.touched.motherName && formik.errors.motherName}
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
                            id="address"
                            label="Address"
                            name='address'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
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