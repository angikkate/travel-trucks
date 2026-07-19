import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperPage from "./pages/CamperPage/CamperPage";

export default function App() {
  return (
    <>
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperPage />} />
        </Route>  
      </Routes>
    </>  
  );
}