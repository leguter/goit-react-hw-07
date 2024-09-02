import * as Yup from "yup";
import css from './ContactForm.module.css'
import { Field, Formik, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";
const ContactForm = () => {
  const userNameId = nanoid();
  const userNumberId = nanoid();
  const FeedbackSchema = Yup.object().shape({
    userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    userNumber: Yup.string().min(2, "Too Short!").max(12, "Too Long!").required("Required"),
  });
  const dispatch = useDispatch()
  function addCard(values) {
    dispatch(addContact(values));
  }
  return (
    <Formik
      initialValues={{
        userName: "",
        userNumber: "",
      }}
      onSubmit={(values,actions) => {
        addCard(values);
        actions.resetForm()
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.labelForm}>
          <span>Name</span>
          <Field
            className={css.input}
            id={userNameId}
            type="text"
            name="userName"
          />
          <ErrorMessage
            className={css.error}
            name="userName"
            component="span"
          />
        </label>
        <label className={css.labelForm}>
          <span>Phone</span>
          <Field
            className={css.input}
            id={userNumberId}
            type="tel"
            name="userNumber"
          />
          <ErrorMessage
            className={css.error}
            name="userNumber"
            component="span"
          />
        </label>
        <button className={css.btnSubmit}type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
