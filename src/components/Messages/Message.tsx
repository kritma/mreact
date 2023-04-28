import { MessageData } from "../../types";

export function Message({ message }: { message: MessageData }) {
    return (
        <div className={`text-text-color m-4 flex items-start gap-4 ${message.is_send_by_user ? "flex-row-reverse" : ""}`}>
            <img className="bg-field-color rounded-full w-8 block aspect-square object-cover" src={message.sender_image_url} />
            <div className="bg-field-color border border-field-border-color p-4 rounded-lg flex flex-col gap-2">
                <pre>{message.text}</pre>
                {
                    message.images.map(imageUrl => <img src={imageUrl} />)
                }
                {
                    message.videos.map(videoUrl => <video src={videoUrl} controls />)
                }
                {
                    message.music.map(audioUrl => <audio src={audioUrl} controls />)
                }
                {
                    message.files.map(fileUrl => <a href={fileUrl} download className="p-3 bg-field-border-color block rounded-lg border border-field-border-color hover:border-active-color">{fileUrl.split("/").at(-1)!.substring(36)}</a>)
                }
            </div>
        </div>
    )
}