// import toast from "react-hot-toast";
// import { useState } from "react";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

// const ManageUsers = () => {
//   const [search, setSearch] = useState("");
//   const axios = useAxiosPublic();

//   // Fetch users with query
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["users", search],
//     queryFn: async () => {
//       const res = await axios.get(`/users?search=${search}`);
//       return res.data;
//     },
//   });

//   // Handle role change
//   const handleRoleChange = (item, role) => {
//     axios.patch(`/users/role/${item._id}`, { role }).then((res) => {
//       if (res.data.modifiedCount > 0) {
//         refetch();
//         toast.success(`${item.name}'s role changed to ${role}`);
//       }
//     });
//   };

//   // Handle search
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const text = e.target.search.value;
//     setSearch(text);
//     refetch();
//   };

//   const handleReset = () => {
//     setSearch("");
//     refetch();
//   };

//   return (
//     <div>
//       <div className="md:flex justify-evenly my-7">
//         <h2 className="text-3xl font-bold text-center text-[#FF8E01]">
//           Manage Users
//         </h2>
//         <h2 className="text-3xl font-bold text-center text-[#FF8E01]">
//           Total Users: {users.length}
//         </h2>
//       </div>
//       <div className="mb-5">
//         <fieldset className="w-full space-y-1 dark:text-gray-800 flex justify-center">
//           <form
//             onSubmit={handleSearch}
//             className="relative border-2 border-[#FF8E01] rounded-md"
//           >
//             <input
//               type="search"
//               name="search"
//               placeholder="Search..."
//               className="w-32 rounded-md py-2 pl-3 text-sm sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800"
//             />
//             <button
//               type="submit"
//               title="search"
//               className="p-1 ml-2 focus:outline-none"
//             >
//               🔍
//             </button>
//             {search && (
//               <button
//                 onClick={handleReset}
//                 className="border ml-2 items-center"
//               >
//                 ❌
//               </button>
//             )}
//           </form>
//         </fieldset>
//       </div>
//       <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-xs">
//             <thead className="dark:bg-gray-300">
//               <tr className="text-left">
//                 <th className="p-3">#</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Email</th>
//                 <th className="p-3">Current Role</th>
//                 <th className="p-3">Change Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((item, index) => (
//                 <tr
//                   key={item._id}
//                   className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
//                 >
//                   <td className="p-3">{index + 1}</td>
//                   <td className="p-3">{item.name}</td>
//                   <td className="p-3">{item.email}</td>
//                   <td className="p-3">{item.role || "User"}</td>
//                   <td className="p-3 text-center">
//                     <select
//                       className="border rounded-md px-2 py-1"
//                       value={item.role || "user"}
//                       onChange={(e) => handleRoleChange(item, e.target.value)}
//                     >
//                       <option value="admin">Admin</option>
//                       <option value="seller">Seller</option>
//                       <option value="user">User</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;

const ManageUsers = () => {
  return <div>manage user</div>;
};

export default ManageUsers;
