import MoonLoader from "react-spinners/MoonLoader";
import { useGetCurrentUserPostsQuery } from "../../redux/features/api/apiSlice";
import { UserData } from "../../types";
import { Post } from "../Posts/Post";
import { PostForm } from "../Posts/PostForm";
import { ProfileInfoEdit } from "./ProfileInfoEdit";


export function ProfileEdit({ currentUser }: { currentUser: UserData }) {
  const { data } = useGetCurrentUserPostsQuery();

  if (data === undefined) {
    return <MoonLoader />
  }

  return (
    <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
      <ProfileInfoEdit user={currentUser} />
      <PostForm />
      {
        data.map((post) => <Post key={post.id} post={post} />)
      }
    </div>
  )
}
