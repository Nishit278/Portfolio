import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ContactSchema = Yup.object().shape({
  from_name: Yup.string().required("Name is required"),
  from_email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

const Contact = ({ contactRef }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      console.log(values);
      const res = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        values,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      );
      if (res.text === "OK") {
        toast.success("Message sent successfully");
        resetForm();
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      console.log(err);
      toast.error("Please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="py-10" ref={contactRef}>
      <h1 className="text-4xl uppercase text-center text-white font-semibold">
        Contact Me
      </h1>
      <Formik
        initialValues={{
          from_name: "",
          from_email: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4 lg:w-3/4 w-full px-4 m-auto mt-8">
            <label htmlFor="from_name" className="text-white">
              Name
            </label>
            <Field
              placeholder="Enter your name"
              name="from_name"
              type="text"
              className="p-2 rounded-md outline-none focus:ring-2 ring-emerald-500 bg-[#1C1B23] text-white"
            />
            {errors.from_name && touched.from_name ? (
              <div className="text-red-500">{errors.from_name}</div>
            ) : null}
            <label htmlFor="from_email" className="text-white">
              Email
            </label>
            <Field
              placeholder="Enter your email"
              name="from_email"
              type="email"
              className="p-2 rounded-md outline-none focus:ring-2 ring-emerald-500 bg-[#1C1B23] text-white"
            />
            {errors.from_email && touched.from_email ? (
              <div className="text-red-500">{errors.from_email}</div>
            ) : null}
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <Field
              placeholder="Enter your message"
              name="message"
              as="textarea"
              className="p-2 rounded-md min-h-[200px] outline-none focus:ring-2 ring-emerald-500 bg-[#1C1B23] text-white"
            />
            {errors.message && touched.message ? (
              <div className="text-red-500">{errors.message}</div>
            ) : null}
            <button
              type="submit"
              className="bg-emerald-500 h-10 text-white p-2 rounded-md grid place-items-center"
            >
              {isLoading ? <Spinner /> : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};
export default Contact;
