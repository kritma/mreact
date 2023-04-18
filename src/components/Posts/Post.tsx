import { PostData } from "../../types";

export function Post({ post }: { post: PostData }) {
    return (
        <div className="m-4 p-4 border-slate-600 border-2 rounded-xl bg-slate-100 h-96 flex flex-col overflow-hidden focus:h-auto" tabIndex={-1}>
            <p>{post.description}</p>
            {
                post.images[0] !== null && <img src={post.images[0]} className="w-full object-contain" alt="post img" />
            }
        </div>
    )
}
