import React, { useRef, useState } from "react";
import { useAddConversationMessageMutation } from "../../redux/features/api/apiSlice";
import paperClipUrl from '../../assets/paper-clip.svg'

export function SendMessageForm({ dialogId, type }: { dialogId: number, type: "chats" | "conversations" }) {
    const [addMessage,] = useAddConversationMessageMutation()
    const [files, setFiles] = useState<File[]>([])
    const textRef = useRef<HTMLDivElement>(null)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        const text = textRef.current!.innerText
        await addMessage({ conversationId: dialogId, files, text })
        textRef.current!.innerText = ""
        setFiles([])
    }


    function onFilesChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setFiles([...event.target.files!])
    }

    return (
        <form onSubmit={onSubmit} className="text-text-color">
            <div>
                {
                    files.map(f => <p>{f.name}</p>)
                }
            </div>
            <div className="flex items-end justify-center w-full gap-4">
                <div id="name" className="border p-2 text-sm rounded-lg w-full bg-field-color border-field-border-color placeholder-text-color-placeholder focus-within:border-active-color outline-none resize-none overflow-auto">
                    <div contentEditable ref={textRef} className="outline-none"></div>
                </div>
                <label htmlFor="files" className="border-2 p-2 text-center border-dashed rounded-lg cursor-pointer bg-field-color hover:border-active-color-hover text-text-color-placeholder text-sm">
                    <img src={paperClipUrl} alt="files" className="h-5" />
                    <input id="files" onChange={onFilesChanged} type="file" className="hidden" multiple />
                </label>
                <button type="submit" className="p-2 bg-active-color hover:bg-active-color-hover active:bg-active-color-pressed outline-none font-medium rounded-lg text-sm py-2.5 text-center">Send</button>
            </div>
        </form>
    )
}