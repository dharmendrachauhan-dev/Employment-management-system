import { useState } from "react";

function Login({handleLogin}) {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Browser DOM obj ko destructure

    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  };


  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(formData.email, formData.password)

    // Reset Form
    setFormData({
      email:'',
      password:''
    })
  };

  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl">
        <form
          onSubmit={handleForm}
          className="flex flex-col items-center text-white justify-center p-20"
        >
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-2 outline-none border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
            type="text"
            placeholder="Enter your email"
          />
          <input
            required
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-2 outline-none border-emerald-600 rounded-full text-xl py-3 px-5 mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="mt-10 font-semibold active:scale-95 duration-200 cursor-pointer outline-none border-none bg-emerald-600 rounded-full text-xl py-2 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
