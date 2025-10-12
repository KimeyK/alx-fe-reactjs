import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required.")
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto p-4 border rounded mt-8">
      <h2 className="text-xl font-semibold mb-4">Register (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus(undefined);
          try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values)
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus({ type: "success", message: "Registered successfully (mock)!" });
            resetForm();
          } catch (e) {
            setStatus({ type: "error", message: "Registration failed (mock)." });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form noValidate>
            {status?.message && (
              <div
                className={
                  "mb-3 rounded px-3 py-2 " +
                  (status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200")
                }
              >
                {status.message}
              </div>
            )}

            <label className="block mb-2">
              <span className="block text-sm font-medium">Username</span>
              <Field className="w-full rounded border border-gray-300 px-3 py-2" name="username" />
              <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
            </label>

            <label className="block mb-2">
              <span className="block text-sm font-medium">Email</span>
              <Field className="w-full rounded border border-gray-300 px-3 py-2" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Password</span>
              <Field className="w-full rounded border border-gray-300 px-3 py-2" type="password" name="password" />
              <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
            </label>

            <button
              disabled={isSubmitting}
              className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 disabled:opacity-50"
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
