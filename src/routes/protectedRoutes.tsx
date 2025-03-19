import { lazy } from "react";
import { Route, Routes } from "react-router";
const LendingPage = lazy(() => import("../pages/main"));
export default function ProtectedRoutes() {
    return (
        <Routes  >
            <Route index element={<LendingPage />} />
        </Routes>
    )
}
