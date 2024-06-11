import axios from "axios";

const axiosCommon = axios.create({
    baseURL: 'https://fitness-server-psi.vercel.app'
})

const useAxiosCommon = () => {
 return axiosCommon
};

export default useAxiosCommon;