import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/thunks/authThunk";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import validationSchema from "./validationSchema";
import Loader from "../../components/Loader";

const Login = () => {

  const [show, setShow] = useState(false);
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 h-screen">
      <div className="w-full max-w-5xl   flex overflow-hidden h-screen p-10">

        {/* Left Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10">
          <img
            src="./src/assets/Illustration.png"
            alt="login illustration"
            className="max-w-sm"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Welcome to <span className="text-purple-600">Unstop</span>
          </h2>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center border rounded-lg py-2 mb-3 hover:bg-gray-50">
            <img src="./src/assets/img2.png" style={{ width: "30px", paddingRight: "5px" }} alt="" /> Login with Google
          </button>
          <button className="w-full flex items-center justify-center border rounded-lg py-2 mb-5 hover:bg-gray-50">
            <img src="./src/assets/Vector.png" style={{ width: "15px", paddingRight: "5px" }} alt="" /> Login with Facebook
          </button>

          <div className="flex items-center mb-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Login Form */}
          <Formik
            initialValues={{ email: '', username: '', password: '' }}
            onSubmit={(data) => {
              console.log("data", data);
              dispatch(userLogin(data));
            }}
            validationSchema={validationSchema}
          >
            {(
              {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }
            ) => {
              return (

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm text-gray-600">Username</label>
                    <input
                      type="text"
                      placeholder="username"
                      name='username'
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.username && touched.username && (
                      <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      placeholder="username@gmail.com"
                      name='email'
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      name='password'
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-purple-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Login
                    <Loader isLoading={loading} />
                  </button>
                </form>
              )
            }}
          </Formik>

          <p className="text-sm text-gray-600 text-center mt-5">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-600 font-medium hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;