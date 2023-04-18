import { currentUser, getProfile } from "../../api/Api";
import { PostsView } from "../Posts/PostsView";
import { ProfileInfo } from "./ProfileInfo";


export function Profile({ userName }: { userName: string }) {
  return (
    <div className="w-8/12 mx-auto">
      <ProfileInfo user={getProfile(userName)} />
      <PostsView posts={[new PostData("wow", "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80")]} />
    </div>
  )
}
