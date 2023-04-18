import { currentUser } from "../../api/Api";
import { MessageData } from "../../types";

export function Message({ message }: { message: MessageData }) {
    useEf
    return (
        <div className={`border-slate-600 border-2 rounded-xl bg-slate-100 m-4 p-4 ${(currentUser()).id === message.sender_id ? "bg-blue-300" : ""}`}>
            {
                message.text
            }
        </div >
    )
}