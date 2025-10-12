import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">Form Handling in React</h1>
        <p className="text-gray-600">
          Controlled Components (top) → Formik + Yup (bottom)
        </p>

        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}
