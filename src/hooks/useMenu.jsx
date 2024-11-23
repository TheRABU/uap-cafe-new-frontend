import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await axiosPublic.get(`/api/foods`);
        setMenu(res.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenuData();
  }, [axiosPublic]);

  //   const {
  //     data: menu = [],
  //     isPending: loading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["menu"],
  //     queryFn: async () => {
  //       const res = await axiosPublic.get("/menu");
  //       return res.data;
  //     },
  //   });

  return [menu, loading];
};

export default useMenu;
