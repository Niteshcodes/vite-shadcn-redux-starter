import { Route, Routes } from "react-router";
import MainLayout from "./routes/layout";
import ProtectedRoutes from "./routes/protectedRoutes";
import PublicRoutes from "./routes/publicRoutes";
export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<MainLayout />} >
        <Route path="/*" element={<ProtectedRoutes />} />
      </Route>
      <Route path="/public/*" element={<PublicRoutes />} />
    </Routes>
  )
}
