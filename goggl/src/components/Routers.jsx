import { Routes, Route, Navigate } from "react-router-dom";
import Result from "./Result";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/search" element={<Result />} />
        <Route path="/images" element={<Result />} />
        <Route path="/videos" element={<Result />} />
        <Route path="/news" element={<Result />} />
        <Route path="/shopping" element={<Result />} />
      </Routes>
    </div>
  );
};
export default Routers;
