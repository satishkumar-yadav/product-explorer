


import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../features/userSlice";
 
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = e => { 
    e.preventDefault();
    if (!email || !password) {
      enqueueSnackbar("All fields are required!", { variant: "warning" });
      return;
    }
    const userData = { email, password };
    dispatch(register(userData));
    localStorage.setItem("user", JSON.stringify(userData));
    enqueueSnackbar("Registration successful!", { variant: "success" });
    navigate("/");
  };

  return (

    <div className="bg-gradient-to-r min-h-screen lg:min-h-screen  from-cyan-500 to-blue-500">
      <div className="flex justify-center py-10 ">
        <div className="bg-white w-96 h-auto border border-gray-200 rounded-md">
          <h1 className="text-center pt-4 text-[#0c2650] text-lg font-bold">
            Sign up
          </h1>
          {message && (
            <div className="px-11 py-4">
              <div className="font-bold bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-200 p-4  text-center text-white ">
                {message}
              </div>
            </div>
          )}

          <div className="pl-8">

           {/* <form onSubmit={handleRegister} className="max-w-sm mx-auto bg-white p-6 rounded shadow mt-8"> */}
          <form onSubmit={handleRegister}>

          <h2 className="text-xl font-bold mb-4">Register</h2>


           {/* First Name */}
          <div className="text-sm">First Name</div>

            <div className="relative text-gray-600 focus-within:text-gray-400">

    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>

      <input
        // className="block w-full mb-2 p-2 border rounded"
         className="py-2 border-b-2 text-sm rounded-md pl-10 focus:outline-none w-10/12 focus:bg-white focus:text-gray-900"
        type="email"
        value={email}
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
      />

            </div>

            {/* Email */}
            <div className="pt-6 text-sm">Email:</div>

            <div className="relative text-gray-600 focus-within:text-gray-400">

                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>

                <input
                  type="email"
                  name="email"
                  className="py-2 border-b-2 text-sm rounded-md pl-10 focus:outline-none w-10/12 focus:bg-white focus:text-gray-900"
                  placeholder="Enter your Email Address"
                  autoComplete="on"
                  {...register("email", {
                    required: true,
                  })}
                />

            </div>


           {/* Password */}
           <div className="pt-6 text-sm">Password:</div>   

           <div className="relative text-gray-600 focus-within:text-gray-400">

            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
            </span>

       <input
        // className="block w-full mb-2 p-2 border rounded"
         className="py-2 border-b-2 text-sm rounded-md pl-10 focus:outline-none w-10/12 focus:bg-white focus:text-gray-900"
        type="password"
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />

           </div>


      <button className="bg-green-600 text-white px-4 py-2 rounded w-full mt-2" type="submit">
        Register
      </button>
    </form>

          </div>

        </div>
      </div>
    </div>

  );
};

export default RegisterForm;
