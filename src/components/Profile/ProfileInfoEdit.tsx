import { Navigate } from "react-router-dom";
import { useAddConversationMutation, useLogoutMutation, useSetProfileImageMutation } from "../../redux/features/api/apiSlice";
import { UserData } from "../../types";
import { SubscribeButton } from "./SubscribeButton";

export function ProfileInfoEdit({ user }: { user: UserData }) {
    const [addConversation, { data }] = useAddConversationMutation()
    const [logout] = useLogoutMutation()
    const [setImage] = useSetProfileImageMutation();
    function onSendMessagePressed(event: React.MouseEvent<HTMLButtonElement>) {
        addConversation(user.id)
    }

    if (data !== undefined) {
        return <Navigate to={`/conversations/${data.conversation_id}`} />
    }

    function onImageChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.files![0])
    }

    function onLogoutPressed() {
        logout()
    }

    return (
        <div className="border-info-border-color border rounded-lg bg-info-color max-h-32 mt-36 p-4 flex gap-4 justify-items-center">
            <label htmlFor="image" className="-mt-32 h-52 w-80 block" >
                <img src={user.image_url} className="rounded-full bg-info-color h-full aspect-square border-2 border-info-border-color object-cover border-dashed cursor-pointer hover:border-active-color-hover" />
                <input onChange={onImageChanged} id="image" type="file" className="hidden" />
            </label>
            <div className="text-text-color w-full flex gap-4 items-center">
                <h1 className="text-3xl">
                    {user.name}
                </h1>
                <button onClick={onSendMessagePressed} className="bg-active-color ml-auto rounded-lg p-2 hover:bg-active-color-hover block">Send message</button>
                <SubscribeButton user={user} />
                <button onClick={onLogoutPressed} className="bg-red-600 hover:bg-red-500 rounded-lg p-2 block">logout</button>
            </div>
        </div>
    )
}
