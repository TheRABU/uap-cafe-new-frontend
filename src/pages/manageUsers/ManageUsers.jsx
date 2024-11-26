import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import debounce from "lodash.debounce"; // Install lodash if not already added

const ManageUsers = () => {
  const axios = useAxiosPublic();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch users based on search term
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/users?search=${search}`);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce the fetchUsers function to avoid frequent API calls
    const debouncedFetch = debounce(fetchUsers, 300);
    debouncedFetch();

    // Cleanup the debounce on component unmount
    return () => debouncedFetch.cancel();
  }, [search, axios]);

  // Handle role change
  const handleRoleChange = async (userId, newRole) => {
    try {
      const res = await axios.patch(`/users/role/${userId}`, { role: newRole });

      console.log("Server response:", res.data); // Debugging

      if (res.data.modifiedCount > 0) {
        toast.success("User role updated successfully");

        // Update the state immediately
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
      } else {
        // Handle if no changes were made
        toast.error(res.data.message || "Failed to update user role");
      }
    } catch (error) {
      console.error("Error updating user role:", error);
      toast.error("An error occurred while updating user role");
    }
  };

  // Update search term dynamically
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="md:flex justify-evenly my-7">
        <h2 className="text-3xl font-bold text-center text-[#1F2544]">
          Manage Users
        </h2>
        <h2 className="text-3xl font-bold text-center text-[#1F25441]">
          Total Users: {users.length}
        </h2>
      </div>
      <div className="mb-5">
        <fieldset className="w-full space-y-1 dark:text-gray-800 flex justify-center">
          <div className="relative border-2 border-[#1F2544] rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-32 rounded-md py-2 pl-10 text-sm sm:w-auto focus:outline-none dark:bg-gray-200 dark:text-gray-800"
            />
          </div>
        </fieldset>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-[#1F2544] text-white">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                      >
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ManageUsers;
