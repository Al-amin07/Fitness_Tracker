import Swal from "sweetalert2";
import GetPhoto from "../../Components/GetPhoto";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useRole from "../../Hooks/useRole";

const AddForum = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const handleForum = async e => {
    e.preventDefault();
    const form = e.target;
    const image =  await GetPhoto(form.image.files[0]);
    const description = form.details.value;
    // console.log(image, description);
    const post = {
        name: user.displayName,
        email: user?.email,
        user_image: user?.photoURL,
        role,
        image,
        description,
        time: new Date()
        
    }
    console.log(post);
    const { data } = await axiosSecure.post('/community', post)
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Post Added Successfully`,
            showConfirmButton: false,
            timer: 1000
          });

          form.reset();
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-8">
        Add a Community Forum Post
      </h1>
      <form onSubmit={handleForum} className="px-20 bg-cyan-50 py-8">
        <div className="flex gap-4 mb-5">
          <img
            className="h-14 w-14 rounded-full "
            src={user?.photoURL}
            alt=""
          />
          <div>
            <h2 className="text-xl font-medium">{user.displayName}</h2>
            <h2 className="text-sm text-white py-1 px-2 text-center rounded-full bg-cyan-500 font-medium">
              {role}
            </h2>
          </div>
        </div>
        <div className="col-span-full sm:col-span-3">
          <label className="text-lg font-medium text-slate-600 mb-2">
            Image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            required
        
            className="w-full bg-white border px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
          />
        </div>

        <div className="flex flex-col col-span-full">
          <label className="text-lg font-medium text-slate-600 ">
            Description
          </label>
          <textarea
            className="border "
            required
            rows="5"
            name="details"
            id=""
          ></textarea>
        </div>
        <div className="mt-8">
          <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-600 text-white px-5 text-sm font-medium tracking-wide ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForum;
