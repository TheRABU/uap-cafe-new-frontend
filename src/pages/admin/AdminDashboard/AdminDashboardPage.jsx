import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdminDashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [foodReq, setFoodReq] = useState([]);
  const [clientReview, setClientReview] = useState([]);
  const AxiosPublic = useAxiosPublic();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // get Order Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosPublic.get(`/orders`);
        setOrderData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [AxiosPublic]);
  // get Food Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosPublic.get(`/api/foods`);
        setFoodData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [AxiosPublic]);
  // get Food Request Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosPublic.get(`/api/food-reviews`);
        setFoodReq(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [AxiosPublic]);
  // get ClientReviews Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosPublic.get(`/client-reviews`);
        setClientReview(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [AxiosPublic]);

  return (
    <>
      <div className="bg-indigo-50 min-h-screen overflow-x-hidden">
        {/* Overlay for mobile menu */}
        <div
          className={`fixed inset-0 bg-indigo-900/50 z-40 ${
            isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
          } transition-opacity duration-300`}
          onClick={toggleSidebar}
        ></div>

        {/* Header */}
        <header className="fixed w-full bg-white text-indigo-800 z-50 shadow-lg animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
            <button className="p-2 lg:hidden" onClick={toggleSidebar}>
              <span className="material-icons-outlined text-2xl">menu</span>
            </button>
            <div className="text-xl font-bold text-blue-900">
              Admin<span className="text-indigo-800">Panel</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <span className="material-icons-outlined p-2 text-2xl cursor-pointer hover:text-indigo-800 transition-transform duration-300 hover:scale-110 hidden md:block">
                search
              </span>
              <span className="material-icons-outlined p-2 text-2xl cursor-pointer hover:text-indigo-800 transition-transform duration-300 hover:scale-110 hidden md:block">
                notifications
              </span> */}
              <img
                className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110 object-cover"
                src="https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="pt-16 max-w-7xl mx-auto flex">
          {/* Sidebar */}
          <aside
            className={`fixed lg:static w-[240px] bg-indigo-50 h-[calc(100vh-4rem)] lg:h-auto transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 z-45 overflow-y-auto p-4`}
          >
            <div className="bg-white rounded-xl shadow-lg mb-6 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              >
                <span className="material-icons-outlined mr-2">dashboard</span>
                Home
                <span className="material-icons-outlined ml-auto">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              >
                <span className="material-icons-outlined mr-2">tune</span>
                Some menu item
                <span className="material-icons-outlined ml-auto">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              >
                <span className="material-icons-outlined mr-2">file_copy</span>
                Another menu item
                <span className="material-icons-outlined ml-auto">
                  keyboard_arrow_right
                </span>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              >
                <span className="material-icons-outlined mr-2">face</span>
                Profile
                <span className="material-icons-outlined ml-auto">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              >
                <span className="material-icons-outlined mr-2">settings</span>
                Settings
                <span className="material-icons-outlined ml-auto">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              >
                <span className="material-icons-outlined mr-2">
                  power_settings_new
                </span>
                Log out
                <span className="material-icons-outlined ml-auto">
                  keyboard_arrow_right
                </span>
              </a>
            </div>
          </aside>

          {/* Main content area */}
          <main className="flex-1 p-4">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 bg-indigo-100 border border-indigo-200 rounded-xl p-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl text-blue-900">
                  Welcome <br />
                  <strong>Admin</strong>
                </h2>
                <span className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-indigo-800">
                  01:51
                </span>
              </div>

              <div className="flex-1 bg-blue-100 border border-blue-200 rounded-xl p-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl text-blue-900">
                  Total Orders are <br />
                  <strong>{orderData.length}</strong>
                </h2>
                <a
                  href="#"
                  className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-blue-800 hover:bg-blue-900 transition-transform duration-300 hover:scale-105"
                >
                  See messages
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-xl font-bold text-indigo-800">
                  Total Food Requests:{" "}
                  <span className="text-black font-bold">{foodReq.length}</span>
                </h3>
              </div>
              <div
                className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-bold text-indigo-800">
                  Number of foods in our current Database:{" "}
                  <span className="font-extrabold">{foodData.length}</span>
                </h3>
              </div>
              <div
                className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-xl font-bold text-indigo-800">
                  Total reviews to UAP cafe given by clients are:{" "}
                  <span className="font-bold text-black">
                    {clientReview.length}
                  </span>
                </h3>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
