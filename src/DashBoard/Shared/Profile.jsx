import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

import pro from '/pro2.jpg'
import UpdateUserModal from "./UpdateUserModal";
import { updateProfile } from "firebase/auth";
import auth from '../../Firebase/Firebase.config'
import GetPhoto from "../../Components/GetPhoto";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }


    const modalHandler =async (e) => {
        e.preventDefault();
        // console.log('Hello');
        const form = e.target;
        const name = form.name.value;
        const image = await GetPhoto(form.photo.files[0]);
        console.log(name);
        console.log(image );
        const users = {
          name, 
          image,
          email: user?.email
        }
        console.log(users);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
          .then(async() => {
            // // console.log('Hello');
            const { data } = await axiosSecure.patch('/users', users )
            if(data.modifiedCount > 0){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Profile Updated Successfully!!!",
                showConfirmButton: false,
                timer: 1000
              });
              closeModal();
            }
           
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
    return (
        <div className='bg-white shadow-lg rounded-2xl w-3/5 '>
        <img
          alt='profile'
        //   src='https://wallpapercave.com/wp/wp10784415.jpg'
        src={pro}
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 mt-2 text-xs text-white bg-pink-500 rounded-full'>
            {/* {role} */}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            {/* User Id: {user?.uid} */}
            Last Login : {user.metadata.lastSignInTime}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button
                onClick={() => setIsOpen(true)}
                className='bg-cyan-500 hover:bg-cyan-600 px-10 py-1 rounded-lg text-white cursor-pointer  block mb-1'>
                  Update Profile
                </button>
                <UpdateUserModal
                isOpen={isOpen}
                closeModal={closeModal}
                user={user}
                modalHandler={modalHandler}
                setIsOpen={setIsOpen}
                />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;