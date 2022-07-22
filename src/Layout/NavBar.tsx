import { NavLink } from "react-router-dom";

export const StyledNavbar = () => {
  const styleFxn = (props: { isActive: boolean }): React.CSSProperties => {
    const { isActive } = props;
    return { color: isActive ? "red" : "blue" };
  };
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "18px",
        listStyle: "none",
        width: "100%",
        background: "#eee",
      }}
    >
      <li>
        <NavLink style={styleFxn} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink style={styleFxn} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink style={styleFxn} to="/teams">
          Teams
        </NavLink>
      </li>
    </ul>
  );
};
