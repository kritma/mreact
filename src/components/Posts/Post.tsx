import { Link } from "react-router-dom";
import { PostData } from "../../types";

export function Post({ post }: { post: PostData }) {
    return (
        <article className="p-4 border border-info-border-color text-text-color bg-info-color rounded-xl flex flex-col gap-2 overflow-hidden">
            <div className="flex gap-4 mb-2">
                <Link to={`/users/${post.user.name}`}><img className="rounded-full bg-info-color w-16 aspect-square object-cover" src={post.user.image_url} /></Link>
                <div className="w-full flex">
                    <p className="text-xl mt-1">{post.user.name}</p>
                    <p className="text-right text-xs w-full">{new Date(post.created_at).toLocaleString()}</p>
                </div>
            </div>
            <pre>{post.description}</pre>
            {
                post.images.map(imageUrl => <img src={imageUrl} />)
            }
            {
                post.videos.map(videoUrl => <video src={videoUrl} controls />)
            }
            {
                post.music.map(audioUrl => <audio src={audioUrl} controls />)
            }
            {
                post.files.map(fileUrl => <a href={fileUrl} download className="p-3 bg-field-border-color block rounded-lg border border-field-border-color hover:border-active-color">{fileUrl.split("/").at(-1)!.substring(36)}</a>)
            }
        </article>
    )
}
