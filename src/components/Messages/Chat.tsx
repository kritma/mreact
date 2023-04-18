import { MessageData } from "../../types";
import { Message } from "./Message";

export function Chat({ messages }: { messages: MessageData[] }) {
    return (
        <div className="border-slate-600 border-2 rounded-xl bg-slate-100 m-4 p-4">
            {messages.map(m => <Message key={m.created_at.toString()} message={m} />)
            }
        </div >
    )
}