import { Link, NavLink } from "react-router-dom";
import { MusicPlayer } from "./Music/MusicPlayer";

export function Header() {
  return (
    <header className="flex justify-center items-center gap-4 bg-info-color sticky top-0 z-10 p-2">
      <nav>
        <ul className="flex text-text-color text-lg p-2">
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-background-color" : ""}`} to="/">News</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-background-color" : ""}`} to="/messages">Messages</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-background-color" : ""}`} to='/me'>Profile</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-background-color" : ""}`} to="/users">Users</NavLink></li>
          <li><NavLink className={(e) => `block p-2 rounded-lg ${e.isActive ? "bg-background-color" : ""}`} to="/music">Music</NavLink></li>
        </ul>
      </nav>
      <MusicPlayer />

    </header>
  )
}

