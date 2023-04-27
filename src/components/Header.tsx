import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="col-span-3 bg-info-color">
      <Link to="/" className="p-4 inline-block text-text-color hover:font-bold text-2xl">Social</Link>
    </header>
  )
}

