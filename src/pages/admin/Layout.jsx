import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import Swal from "sweetalert2";

const routes = [
  {
    path: "/admin",
    icon: <AlignJustify size={24} />,
    name: "Dashboard",
  },
  {
    path: "/admin/orders",
    icon: <AlignJustify size={24} />,
    name: "Orders",
  },
  {
    path: "/admin/meja",
    icon: <AlignJustify size={24} />,
    name: "Meja",
  },
  {
    path: "/admin/reviews",
    icon: <AlignJustify size={24} />,
    name: "Reviews",
  },
];
function SideMenu({ title, icon, route }) {
  return (
    <li className="relative px-6 py-3">
      <Link
        to={route}
        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100"
      >
        <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
        {icon}
        <span className="ml-4">{title}</span>
      </Link>
    </li>
  );
}

export default function Layout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    Swal.fire({
      icon: "success",
      title: "Logout success",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
      <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
        <a
          href="/admin"
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        >
          The Harjos Java Resto
        </a>
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <ul className="mt-6">
            {routes.map((route, index) => (
              <SideMenu
                key={index}
                title={route.name}
                icon={route.icon}
                route={route.path}
              />
            ))}
          </ul>
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-full" id="main-layout">
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <div></div>
            <button
              onClick={handleLogout}
              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
            >
              Logout
            </button>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
