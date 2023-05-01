import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { useGetProfileQuery } from "../../redux/features/api/apiSlice";
import { isApiError } from "../../types";
import { Post } from "../Posts/Post";
import { ProfileInfo } from "./ProfileInfo";

export function Profile() {
  const { name } = useParams()

  const { data } = useGetProfileQuery(name!);

  if (data === undefined) {
    return <MoonLoader />
  }

  if (isApiError(data)) {
    return <p>USER NOT FOUND</p>
  }

  return (
    <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
      <ProfileInfo user={data.user} />
      {
        data.posts.map((post) => <Post key={post.id} post={post} />)
      }
    </div>
  )
}
