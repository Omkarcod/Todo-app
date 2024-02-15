import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikTest = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            gender: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(10, "username characters cannot be greater than 10")
                .required("This is required field"),
            email: Yup.string()
                .email("Please provide valid email")
                .required("This is required field"),
            gender: Yup.string()
                .required("This is required field"),
            password: Yup.string()
                .required("This is required field"),
            confirm_password: Yup.string()
                .required("This is required field")

        }),
        onSubmit: (values, action) => {
            if (values.password === values.confirm_password) {
                alert("Form is submitted");
                action.resetForm();
            } else {
                console.log(formik.errors.password);
            }

        }
    });
    return (
        <>
            <div className="container">
                <form action="" onSubmit={formik.handleSubmit}>
                    <input type="text" placeholder='Name' name="username" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} />
                    {formik.touched.username && formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}


                    <input type="email" placeholder='Email' name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}

                    <div>
                        <span>Gende:</span>
                        <input type="radio" placeholder='Email' name="gender" onChange={formik.handleChange} value="female" /><span>Female</span>

                        <input type="radio" placeholder='Email' name="gender" onChange={formik.handleChange} value="male" /><span>Male</span>
                        {formik.touched.gender && formik.errors.gender && <p style={{ color: "red" }}>{formik.errors.gender}</p>}
                    </div>

                    <input type="password" placeholder='Password' name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}


                    <input type="password" placeholder='Confirm Password' name="confirm_password" onChange={formik.handleChange} value={formik.values.confirm_password} onBlur={formik.handleBlur} />
                    {formik.touched.confirm_password && formik.errors.confirm_password && <p style={{ color: "red" }}>{formik.errors.confirm_password}</p>}


                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default FormikTest;