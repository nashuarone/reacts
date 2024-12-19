import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const AuthStatus = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSignout = () => {
        auth.signout(() => {
            navigate('/');
        })
    }

    if (!auth.user) {
        return (
            <p>You are not logged in</p>
        )
    }
    return (
        <p>
            Welcome user {auth.user}
            <button onClick={handleSignout}>Sign out</button>
        </p>
    )
}