import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import errorIcon from "../../assets/icons/error.svg";

import css from "./BookingForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters.")
    .required("Please enter your name."),

  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
});

const initialValues = {
  name: "",
  email: "",
};

export default function BookingForm() {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    toast.success("Booking request sent!");

    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        Book your campervan now
      </h2>

      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.form}>

            <div className={css.field}>

              {errors.name && touched.name && (
                <span className={css.errorLabel}>
                  Name*
                </span>
              )}

              <Field
                name="name"
                type="text"
                placeholder={
                  errors.name && touched.name
                    ? ""
                    : "Name*"
                }
                className={`${css.input} ${
                  errors.name && touched.name
                    ? css.inputError
                    : ""
                }`}
              />

              {errors.name && touched.name && (
                <img
                  src={errorIcon}
                  alt=""
                  className={css.errorIcon}
                />
              )}

              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />

            </div>

            <div className={css.field}>

              {errors.email && touched.email && (
                <span className={css.errorLabel}>
                  Email*
                </span>
              )}

              <Field
                name="email"
                type="email"
                placeholder={
                  errors.email && touched.email
                    ? ""
                    : "Email*"
                }
                className={`${css.input} ${
                  errors.email && touched.email
                    ? css.inputError
                    : ""
                }`}
              />

              {errors.email && touched.email && (
                <img
                  src={errorIcon}
                  alt=""
                  className={css.errorIcon}
                />
              )}

              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />

            </div>

            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>

          </Form>
        )}
      </Formik>
    </div>
  );
}