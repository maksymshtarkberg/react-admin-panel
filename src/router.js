import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsPage from "./containers/Products-page";
import LoginPage from "./containers/Login";
import PreviewPage from "./containers/Products-preview";
import NotFound from "./containers/404";
import PrivateRoute from "./privatRoute";

function AppRouter() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<ProductsPage />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
