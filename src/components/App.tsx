import { Route, Routes } from "react-router-dom";
import { Messages } from "./Messages/Messages";
import { Header } from "./Header";
import { Profile } from "./Profile/Profile";
import { Sidebar } from "./Sidebar";
import { useGetCurrentUserQuery } from "../redux/features/api/apiSlice";

export function App() {
  const { data } = useGetCurrentUserQuery()
  return (
    <div className="grid grid-cols-auto_1_1 grid-rows-auto_1 h-full">
      <Header />
      <Sidebar />
      <main className="bg-slate-100 col-span-2 flex">
        <Routes>
          <Route Component={Profile} path="/" />
          <Route Component={Messages} path="/messages/:id?" />
        </Routes>
      </main>
    </div>

  )
}

