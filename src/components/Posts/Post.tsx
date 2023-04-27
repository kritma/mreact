import { Link } from "react-router-dom";
import { PostData } from "../../types";

export function Post({ post }: { post: PostData }) {
    return (
        <article className="p-4 border border-info-border-color text-text-color bg-info-color rounded-xl flex flex-col overflow-hidden">
            <div className="flex gap-4 mb-2">
                <Link to={`/users/${post.user.name}`}><img className="rounded-full bg-info-color w-16 aspect-square object-cover" src={post.user.image_url} /></Link>
                <div className="w-full flex">
                    <p className="text-xl mt-1">{post.user.name}</p>
                    <p className="text-right text-xs w-full">{new Date(post.created_at).toLocaleString()}</p>
                </div>
            </div>
            <p>{post.description}</p>
            {
                post.images.map(image => <img key={image} src={image} className="w-full object-contain" alt="post img" />)
            }
        </article>
    )
}
