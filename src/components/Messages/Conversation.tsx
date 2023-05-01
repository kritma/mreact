import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { useGetConversationMessagesQuery } from "../../redux/features/api/apiSlice";
import { Message } from "./Message";
import { SendMessageForm } from "./SendMessageForm";

export function Conversation() {
    const { id } = useParams()
    const { data } = useGetConversationMessagesQuery(+id!)

    if (data === undefined) {
        return <MoonLoader />
    }

    return (
        <div className="max-w-4xl w-full h-full overflow-scroll mx-auto p-4 flex flex-col gap-4">
            <div className="overflow-y-scroll h-full">
                {
                    data.map(m => <Message message={m} key={m.id} />)
                }
            </div>
            <SendMessageForm dialogId={+id!} type="conversations" />
        </div>
    )
}