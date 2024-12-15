import { Link, Outlet } from "react-router-dom";

export const CategoriesLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="characters">characters</Link>
        </li>
        <li>
          <Link to="locations">locations</Link>
        </li>
        <li>
          <Link to="episodes">episodes</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
