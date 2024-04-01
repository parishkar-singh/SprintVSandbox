import Dashboard from "../Containers/Dashboard";
import Navbar from "../Containers/Navbar";
import Sidebar from "../Containers/Sidebar";

const Home = () => {
  return (
    <div className="flex bg-white dark:bg-black bg flex-col h-full w-full ">
      <Navbar />
      <div className=" bg-white dark:bg-black flex overflow-x-hidden overflow-y-hidden h-full w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;