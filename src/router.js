import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProductsPage from "./containers/Products-page";
import LoginPage from "./containers/Login";
import PreviewPage from "./containers/Products-preview";
import NotFound from "./containers/404";
import PrivateRoute from "./privatRoute";
import DetailPreview from "./containers/Products-detail-preview";

function AppRouter() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<ProductsPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/preview/:CurrentProd" element={<DetailPreview />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
