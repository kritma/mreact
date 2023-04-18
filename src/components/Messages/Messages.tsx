import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getCurrentUser, getDialogsByUser, getMessagesOfDialog } from "../../api/Api";
import { MessageData } from "../../User/MessageData";
import { Chat } from "./Chat";
import { Dialogs } from "./Dialogs";

export function Messages() {
    const { id } = useParams()
    let messages: MessageData[] = [];
    if (id !== undefined) {
        messages = useMemo(() => getMessagesOfDialog(getDialogsByUser(getCurrentUser()).find(e => e.sendTo.userId === +id)!), [id])
    }
    return (
        <div className="w-11/12 mx-auto border-slate-600 border-2 rounded-xl bg-slate-200 m-4 p-4 grid grid-cols-auto_1">
            <Dialogs dialogs={getDialogsByUser(getCurrentUser())} />
            <Chat messages={messages} />
        </div>
    )
}
