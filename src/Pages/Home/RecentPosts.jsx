import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import SinglePost from "./SinglePost";


const RecentPosts = () => {
    const axiosCommon = useAxiosCommon();
    const { data: communitys = [] } = useQuery({
      queryKey: ["community"],
      queryFn: async () => {
        const { data } = await axiosCommon.get("/community/time");
        return data;
      },
    });
    return (
        <div>
        <h2 className="text-4xl font-semibold   text-center ">Discover the Latest Insights and Discussions</h2>
        <p className="text-slate-500 w-8/12 mx-auto text-center mt-4 mb-10">  Explore our vibrant community forum where ideas converge and discussions flourish. Dive into the latest six thought-provoking posts covering a range of topics—from technology trends to personal development tips.</p>
      <div className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {communitys?.slice(0,6).map((item) => (
          <SinglePost key={item._id} item={item} />
        ))}
      </div>
    </div>
    );
};

export default RecentPosts;