import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="col-span-3 bg-slate-400">
      <Link to="/" className="p-4 inline-block hover:font-bold">Social</Link>
    </header>
  )
}

