// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetPhoto from "../../Components/GetPhoto";

const Register = () => {
  const { register, setLoading,   saveUser, logOut } = useAuth();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.username.value;
    const photo = form.photo.files[0];
    const email = form.email.value;
    const password = form.password.value;
    if (!/[A-Z]/.test(password)) {
      toast("Please Enter Uppercase");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast("Please Enter Lowercase");
      return;
    }

    if (password.length < 6) {
      toast("Pass Must be 6 Char");
      return;
    }
    // const formData = new FormData();
    // formData.append("image", photo);
  
    try {
  
      // const { data } = await axios.post(
      //   `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
      //   formData
      // );
      const image = await GetPhoto(photo)
      console.log(image);
     
      // fun(name, data.data.display_url);

    
      register(email, password).then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log(result.user);
            saveUser(result.user)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "SuccessFully Register!!!",
              showConfirmButton: false,
              timer: 1500,
            });
            logOut()
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
       
      });

      
      
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="w-full bg-cyan-50 mx-auto border max-w-md p-8 space-y-3 rounded-xl ">
      <h1 className="text-2xl font-bold text-center">Register Now!!!</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Username
          </label>
          <input
            type="text"
            required
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md  border"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Photo URL</label>
          <input
            type="file"
            required
            name="photo"
            id="photo"
            placeholder="Username"
            className="w-full "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md  border"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            required
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md  border"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-cyan-600 text-white">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
    
      <p className="text-sm text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link
          to="/login"
          className="underline dark:text-gray-800 hover:text-cyan-600"
        >
          Login
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Register;
