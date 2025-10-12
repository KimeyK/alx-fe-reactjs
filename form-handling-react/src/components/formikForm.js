import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const schema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const [status, setStatus] = useState({ type: "", message: "" });

  return (
    <div className="max-w-md mx-auto p-4 border rounded mt-8">
      <h2 className="text-xl font-semibold mb-4">Register (Formik + Yup)</h2>

      {status.message && (
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

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setStatus({ type: "", message: "" });
          try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
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
        {({ isSubmitting }) => (
          <Form noValidate>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Username</span>
              <Field
                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="username"
                placeholder="john_doe"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-sm text-red-600"
              />
            </label>

            <label className="block mb-2">
              <span className="block text-sm font-medium">Email</span>
              <Field
                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                type="email"
                placeholder="john@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-600"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Password</span>
              <Field
                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                type="password"
                placeholder="••••••••"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-600"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
