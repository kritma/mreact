import { PostData } from "../../posts/PostData";
import { Post } from "./Post";

export function PostsView({ posts }: { posts: PostData[] }) {
    // new PostData("wow",null)
    return (
        <div className="border-slate-600 border-2 rounded-xl bg-slate-200 m-4 p-4">
            {
                posts.map((post) => <Post post={post} />)
            }
        </div>
    )
}

