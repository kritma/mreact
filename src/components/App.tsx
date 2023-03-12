import { Header } from "./Header";
import { Profile } from "./Profile/Profile";
import { Sidebar } from "./Sidebar";

export function App() {
  return (
    <div className="grid grid-cols-auto_1_1 grid-rows-auto_1 h-full">
      <Header />
      <Sidebar />
      <main className="bg-slate-100 col-span-2">
        <Profile />
      </main>
    </div>
  )
}

