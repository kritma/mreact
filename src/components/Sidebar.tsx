import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="bg-blue-400 p-4">
      <nav>
        <ul>
          <li><NavLink to="/">Profile</NavLink></li>
          <li><NavLink to="/messages">messages</NavLink></li>
          <li><NavLink to="/friends">friends</NavLink></li>
          <li><NavLink to="/news">news</NavLink></li>
          <li><NavLink to="/music">music</NavLink></li>
          <li><NavLink to="/settings">settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

