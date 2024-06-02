import axios from "axios";


const usePhoto =async ({photo}) => {
const formData = new FormData();
formData.append('image', photo);
const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
    formData
  );
  return data.data.display_url;
};

export default usePhoto;