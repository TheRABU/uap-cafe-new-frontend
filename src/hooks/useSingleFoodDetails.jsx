import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";

const useSingleFoodDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const { id } = useParams();
  /*
    using a menu.json file from public folder which can't be fetched by id individually.
    for this frontend part I am doing this 
    TODO:
    change the fetch api link which will handle the dynamic api.
    also the useState(null) will be changed if handled from a live backend api.
    
  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(`/api/foods/${id}`);
        setDetails(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosPublic, id]);

  return [details, loading];
};
export default useSingleFoodDetails;
