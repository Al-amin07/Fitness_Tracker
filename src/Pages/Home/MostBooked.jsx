import { useQuery } from "@tanstack/react-query";
// import useAllClass from "../../Hooks/useAllClass";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import SingleBooked from "./SingleBooked";

const MostBooked = () => {
    const axiosCommon = useAxiosCommon();
    const { data: classes = []}  = useQuery({
        queryKey: ['bookedClass'],
        queryFn: async() =>{
            const { data } = await axiosCommon.get('/allclassess')
            return data;
        }
    })
    console.log(classes);
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center ">Trending Now: Most Booked Class</h2>
            <p className="text-slate-600 w-3/4 mx-auto text-center mt-4 mb-10">This classes is trending for a reason! With a unique blend of exercises and a vibrant atmosphere, it is the perfect way to stay motivated and reach your fitness goals.</p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                    classes.slice(0,6).map(item => <SingleBooked 
                    key={item._id}
                    item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default MostBooked;