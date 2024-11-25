import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthenticationProvider";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!user || !user.email) {
      // Skip fetching if user or email is missing
      setLoading(false);
      setError("User not logged in or email not available");
      return;
    }

    let isMounted = true; // To prevent state updates if component unmounts

    const fetchUserData = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error before fetching
      try {
        const res = await axiosPublic.get(`/user/${user.email}`);
        if (isMounted) {
          setUsers(res.data);
        }
      } catch (error) {
        if (isMounted) {
          setError("Error fetching user data. Please try again.");
          console.error("Error fetching user data:", error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUserData();

    // Cleanup function to set `isMounted` to false on unmount
    return () => {
      isMounted = false;
    };
  }, [axiosPublic, user]);

  return [users, loading, error];
};

export default useUser;
