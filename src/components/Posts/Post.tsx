import { PostData } from "../../posts/PostData";

export function Post({ post }: { post: PostData }) {
    return (
        <div className="m-4 p-4 border-slate-600 border-2 rounded-xl bg-slate-100 h-96 flex flex-col overflow-hidden focus:h-auto" tabIndex={1}>
            <p>{post.text}</p>
            {
                post.imageUrl !== null && <img src={post.imageUrl} className="w-full object-contain" />
            }
        </div>
    )
}
