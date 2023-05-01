import { useRef } from "react";
import { useAddPostMutation } from "../../redux/features/api/apiSlice";

export function PostForm() {
    let [addPost] = useAddPostMutation()
    const descriptionRef = useRef<HTMLDivElement>(null)
    const filesRef = useRef<HTMLInputElement>(null)

    console.debug("add filenames")

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const description = descriptionRef.current!.innerText;
        const files = [...filesRef.current!.files!]
        if (files.length === 0 && description.trim().length === 0) {
            return
        }
        addPost({ description, files })
    }

    return (
        <div className="w-full rounded-lg shadow border bg-info-color border-info-border-color">
            <form className="p-4" onSubmit={onSubmit}>
                <div id="name" className="border sm:text-sm rounded-lg w-full bg-field-color border-field-border-color placeholder-text-color-placeholder text-text-color focus-within:border-active-color outline-none resize-none overflow-auto p-4 mb-4">
                    <div ref={descriptionRef} contentEditable className="outline-none"></div>
                </div>
                <div className="flex items-center justify-center w-full gap-4">
                    <label htmlFor="files" className="w-full border-2 py-2 text-center border-field-color border-dashed rounded-lg cursor-pointer bg-field-color hover:border-active-color-hover text-text-color-placeholder text-sm">
                        <p><span className="font-semibold">Click to upload</span></p>
                        <input ref={filesRef} id="files" type="file" className="hidden" multiple />
                    </label>
                    <button type="submit" className="w-full text-white bg-active-color hover:bg-active-color-hover active:bg-active-color-pressed outline-none font-medium rounded-lg text-sm py-2.5 text-center">Post</button>
                </div>
            </form>
        </div>
    )
}
