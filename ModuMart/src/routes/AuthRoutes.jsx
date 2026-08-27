import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";

export const PrivateRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) {
        return <p>Loading...</p>;
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export const LoggedInRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) {
        return <p>Loading...</p>;
    }
    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}