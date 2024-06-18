import { Routes, Route, Navigate } from "react-router-dom";
import Layouts from "./layouts/layouts";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts>home page</Layouts>} />
      <Route path="/user-profile" element={<span>user profile page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
