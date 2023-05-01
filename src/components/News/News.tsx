import MoonLoader from "react-spinners/MoonLoader";
import { Post } from "../Posts/Post";
import { useGetNewsQuery } from "../../redux/features/api/apiSlice";

export function News() {
  const { data } = useGetNewsQuery();

  if (data === undefined) {
    return <MoonLoader />
  }

  return (
    <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
      {
        data.map((post) => <Post key={post.id} post={post} />)
      }
    </div>
  )
}
