import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { useGetCurrentUserQuery } from "../redux/features/api/apiSlice";
import { Login } from "./Login/Login";
import { Conversation } from "./Messages/Conversation";
import { Dialogs } from "./Messages/Dialogs";
import { News } from "./News/News";
import { ProfileEdit } from "./Profile/ProfileEdit";
import { Users } from "./Users/Users";
import { Music } from "./Music/Music";
import { Header } from "./Header";
import { MusicPlayer } from "./Music/MusicPlayer";

export function App() {
  const { data, error } = useGetCurrentUserQuery()

  if (error) {
    return <Login />
  }

  if (data === undefined) {
    return null
  }

  return (
    <div className="bg-background-color grid grid-rows-auto_1 h-full overflow-scroll">
      <Header />
      <Routes>
        <Route Component={News} path="/" />
        <Route element={<ProfileEdit currentUser={data} />} path="/me" />
        <Route element={<ProfileEdit currentUser={data} />} path={`/users/${data.name}`} />
        <Route Component={Dialogs} path="/messages" />
        <Route Component={Conversation} path="/conversations/:id" />
        <Route Component={Profile} path="/users/:name" />
        <Route Component={Users} path="/users" />
        <Route Component={Music} path="/music" />
      </Routes>
    </div>
  )
}

