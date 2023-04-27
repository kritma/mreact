import { Navigate } from "react-router-dom";
import { useAddConversationMutation } from "../../redux/features/api/apiSlice";
import { UserData } from "../../types";
import { SubscribeButton } from "./SubscribeButton";

export function ProfileInfo({ user }: { user: UserData }) {
    const [addConversation, { data }] = useAddConversationMutation()

    function onSendMessagePressed(event: React.MouseEvent<HTMLButtonElement>) {
        addConversation(user.id)
    }

    if (data !== undefined) {
        return <Navigate to={`/conversations/${data.conversation_id}`} />
    }

    return (
        <div className="border-info-border-color border rounded-lg bg-info-color max-h-32 mt-36 p-4 flex gap-4 justify-items-center">
            <div className="-mt-32 h-52 w-80">
                <img src={user.image_url} className="rounded-full bg-info-color h-full aspect-square border-2 border-info-border-color object-cover" />
            </div>
            <div className="text-text-color w-full flex gap-2 items-center">
                <h1 className="text-3xl">
                    {user.name}
                </h1>
                <button onClick={onSendMessagePressed} className="bg-active-color mx-auto rounded-lg p-2 hover:bg-active-color-hover block">Send message</button>
                <SubscribeButton user={user} />
            </div>
        </div>
    )
}
