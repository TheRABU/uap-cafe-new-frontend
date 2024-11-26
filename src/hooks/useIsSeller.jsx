import { useState, useEffect } from "react";

import useAxiosPublic from "./useAxiosPublic";

const useIsSeller = (email) => {
  const [isSeller, setIsSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const AxiosPublic = useAxiosPublic();
  useEffect(() => {
    if (!email) {
      setIsSeller(false);
      setLoading(false);
      return;
    }

    const fetchUserRole = async () => {
      try {
        setLoading(true);
        const response = await AxiosPublic.get(`/user/role/${email}`);
        setIsSeller(response.data.isSeller);
      } catch (err) {
        console.error("Error checking seller role:", err);
        setError(err.message || "Failed to fetch role");
        setIsSeller(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [AxiosPublic, email]);

  return { isSeller, loading, error };
};

export default useIsSeller;
