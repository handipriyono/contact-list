import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";
import UpdatePage from "../pages/update";
import AddPage from "../pages/addPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="update/:id" element={<UpdatePage />} />
        <Route path="add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
}
