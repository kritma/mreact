import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { Sidebar } from "./Sidebar";
import { useGetCurrentUserQuery } from "../redux/features/api/apiSlice";
import { Login } from "./Login/Login";
import { Conversation } from "./Messages/Conversation";
import { Dialogs } from "./Messages/Dialogs";
import { News } from "./News/News";
import { ProfileEdit } from "./Profile/ProfileEdit";
import { Users } from "./Users/Users";

export function App() {
  const { data, error } = useGetCurrentUserQuery()

  if (error) {
    return <Login />
  }

  if (data === undefined) {
    return null
  }

  return (
    <div className="bg-background-color relative h-full">
      <Sidebar userName={data.name} />
      <main className="h-full">
        <Routes>
          <Route element={<ProfileEdit currentUser={data} />} path={`/users/${data.name}`} />
          <Route element={<ProfileEdit currentUser={data} />} path="/me" />
          <Route Component={Dialogs} path="/messages" />
          <Route Component={Conversation} path="/conversations/:id" />
          <Route element={<Profile />} path="/users/:name" />
          <Route Component={Users} path="/users" />
          <Route Component={News} path="/" />
        </Routes>
      </main>
    </div>
  )
}

