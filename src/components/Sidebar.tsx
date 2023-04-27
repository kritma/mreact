import { NavLink } from "react-router-dom";

export function Sidebar({ userName }: { userName: string }) {
  return (
    <aside className="bg-background-color text-text-color p-4 text-lg flex fixed top-1/2 -translate-y-1/2 ">
      <nav>
        <ul>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-info-color" : ""}`} to="/">News</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-info-color" : ""}`} to="/messages">Messages</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-info-color" : ""}`} to={`/me`}>Profile</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-info-color" : ""}`} to="/users">Users</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-info-color" : ""}`} to="/music">Music</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

