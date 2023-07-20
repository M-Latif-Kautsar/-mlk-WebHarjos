import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import DetailMenu from "./pages/DetailMenu";
import Error from "./pages/Error";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import Layout from "./pages/admin/Layout";
import Orders from "./pages/admin/Orders";
import Reviews from "./pages/admin/Reviews";
import FormProduct from "./pages/admin/FormProduct";
import FormEdit from "./pages/admin/FormEdit";
import Meja from "./pages/admin/Meja";
import Protected from "./middleware/Protected";
import Review from "./pages/Review";
import Pivot from "./pages/Pivot";
// import Profit from "./pages/Profit";
// import { AuthProvider } from "./context/UserContext";

function App() {
  const [meja, setMeja] = React.useState([]);
  const getMeja = async () => {
    const response = await fetch("https://harjos.draf.app/api/meja");
    const data = await response.json();
    setMeja(data.data);
  };

  React.useEffect(() => {
    getMeja();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {meja.map((item) => (
          <Route
            index
            path={`${item.nomor_meja}/menu`}
            element={<Menu />}
            exact
          />
        ))}
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<DetailMenu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/review" element={<Review />} />
        <Route path="/section" element={<Pivot />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route
          index
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="orders"
          element={
            <Protected>
              <Orders />
            </Protected>
          }
        />
        <Route
          path="meja"
          element={
            <Protected>
              <Meja />
            </Protected>
          }
        />
        <Route
          path="reviews"
          element={
            <Protected>
              <Reviews />
            </Protected>
          }
        />
        <Route
          path="add-product"
          element={
            <Protected>
              <FormProduct />
            </Protected>
          }
        />
        <Route
          path="edit-product/:id"
          element={
            <Protected>
              <FormEdit />
            </Protected>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />

      {/* Tambahkan route untuk halaman error 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
