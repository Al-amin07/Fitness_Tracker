import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import SingleCommunity from "./SingleCommunity";

const Community = () => {
  const axiosCommon = useAxiosCommon();
  const { data: communitys = [] } = useQuery({
    queryKey: ["community"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/community");
      return data;
    },
  });
  return (
    <div>
        <h2 className="text-4xl font-medium text-center mb-12">All Community Posts</h2>
      <div className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {communitys.map((item) => (
          <SingleCommunity key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Community;
