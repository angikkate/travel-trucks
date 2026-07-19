// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// import errorIcon from "../../assets/icons/error.svg";

// import css from "./BookingForm.module.css";

// export default function BookingForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, touchedFields },
//   } = useForm();

//   const onSubmit = data => {
//     console.log(data);

//     toast.success("Booking request sent!");

//     reset();
//   };

//   return (
//     <div className={css.wrapper}>
//       <h2 className={css.title}>
//         Book your campervan now
//       </h2>

//       <p className={css.text}>
//         Stay connected! We are always ready to help you.
//       </p>

//       <form
//         className={css.form}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <div className={css.field}>
//           {(errors.name && touchedFields.name) && (
//             <span className={css.errorLabel}>
//               Name*
//             </span>
//           )}

//           <input
//             id="name"
//             className={`${css.input} ${
//               errors.name && touchedFields.name
//                 ? css.inputError
//                 : ""
//             }`}
//             placeholder={
//               errors.name && touchedFields.name
//                 ? ""
//                 : "Name*"
//             }
//             {...register("name", {
//               required: "Please enter your name.",
//               minLength: {
//                 value: 2,
//                 message: "Name must contain at least 2 characters.",
//               },
//               pattern: {
//                 value: /^[A-Za-zА-Яа-яЇїІіЄєҐґ\s'-]+$/,
//                 message: "Please enter your name.",
//               },
//             })}
//           />

//           {(errors.name && touchedFields.name) && (
//             <img
//               src={errorIcon}
//               alt=""
//               className={css.errorIcon}
//             />
//           )}

//           <span className={css.error}>
//             {errors.name?.message}
//           </span>
//         </div>

//         <div className={css.field}>
//           {(errors.email && touchedFields.email) && (
//             <span className={css.errorLabel}>
//               Email*
//             </span>
//           )}

//           <input
//             id="email"
//             className={`${css.input} ${
//               errors.email && touchedFields.email
//                 ? css.inputError
//                 : ""
//             }`}
//             placeholder={
//               errors.email && touchedFields.email
//                 ? ""
//                 : "Email*"
//             }
//             {...register("email", {
//               required: "Please enter your email.",
//               pattern: {
//                 value:
//                   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "Please enter a valid email.",
//               },
//             })}
//           />

//           {(errors.email && touchedFields.email) && (
//             <img
//               src={errorIcon}
//               alt=""
//               className={css.errorIcon}
//             />
//           )}

//           <span className={css.error}>
//             {errors.email?.message}
//           </span>
//         </div>

//         <button
//           className={css.button}
//           type="submit"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }
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