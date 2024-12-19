import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const Location = useLocation();

  const from = Location.state?.from || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    auth.signin(String(username), () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
