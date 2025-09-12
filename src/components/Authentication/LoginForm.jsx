


import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = e => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && email === stored.email && password === stored.password) {
      dispatch(login(stored));
      enqueueSnackbar("Login successful!", { variant: "success" });
      navigate("/");
    } else {
      enqueueSnackbar("Wrong credentials!", { variant: "error" });
    }
  };

  return (
<div className="bg-gradient-to-r min-h-screen lg:min-h-screen  from-cyan-500 to-blue-500">
      <div className="flex justify-center py-10 ">
        <div className="bg-white w-96 h-auto border border-gray-200 rounded-md">
          <h1 className="text-center pt-4 text-[#0c2650] text-lg font-bold">
            Login
          </h1>

          <div className="pl-8">

    {/* <form onSubmit={handleLogin} className="max-w-sm mx-auto bg-white p-6 rounded shadow mt-8"> */}
      <form onSubmit={handleLogin}>
      {/* <h2 className="text-xl font-bold mb-4">Login</h2> */}
      
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
        // className="block w-full mb-2 p-2 border rounded"
        className="py-2 border-b-2 text-sm rounded-md pl-10 focus:outline-none w-10/12 focus:bg-white focus:text-gray-900"
        type="email"
        value={email}
        placeholder="Enter your Email Address"
        onChange={e => setEmail(e.target.value)}
        required
      />

     </div>

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
        placeholder="Enter your password"
        onChange={e => setPassword(e.target.value)}
        required
      />

  </div>


      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2" type="submit">
        Login
      </button>
    </form>

           </div>
         </div>
      </div>
    </div>
  );
};

export default LoginForm;
