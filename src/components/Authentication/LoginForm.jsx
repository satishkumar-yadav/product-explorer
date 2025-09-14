
import { Link } from "react-router-dom";
 
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

    <main className="w-full h-screen flex flex-col items-center justify-center px-4">

            <div className="max-w-sm w-full text-gray-600 shadow-2xl">

                <div className="text-center">
                    {/* <img src="asset/loginlogo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                    </div>
                </div>

                <form
                   onSubmit={handleLogin}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your Email Address"
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>

                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        type="submit"
                    >
                        Sign in
                    </button>

                    <div className="text-center">
                        <Link to="/forget-password" className="hover:text-indigo-600">Forgot password?</Link>
                    </div>
                </form>
            </div>
        </main>

  );
};

export default LoginForm;










