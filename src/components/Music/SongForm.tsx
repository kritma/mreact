import { useRef } from "react";
import { useAddSongMutation } from "../../redux/features/api/apiSlice";

export function SongForm() {
    let [addSong] = useAddSongMutation()
    const nameRef = useRef<HTMLInputElement>(null)
    const audioRef = useRef<HTMLInputElement>(null)
    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const name = nameRef.current!.value;
        const audio = audioRef.current!.files![0]
        addSong({ name, audio })
    }
    return (
        <div className="w-full rounded-lg shadow border bg-info-color border-info-border-color">
            <form className="p-4" onSubmit={onSubmit}>
                <div className="flex items-center justify-center w-full gap-4 text-sm">
                    <input ref={nameRef} className="border rounded-lg w-full bg-field-color border-field-border-color placeholder-text-color-placeholder text-text-color focus-within:border-active-color outline-none p-2" placeholder="Song Name - Artist Name" required />
                    <label htmlFor="files" className="w-1/2 border-2 p-2 text-center border-field-color border-dashed rounded-lg cursor-pointer bg-field-color hover:border-active-color-hover text-text-color-placeholder font-semibold">
                        <p>Audio file</p>
                        <input ref={audioRef} id="files" type="file" className="hidden" required />
                    </label>
                    <button type="submit" className="text-white bg-active-color hover:bg-active-color-hover active:bg-active-color-pressed outline-none font-medium rounded-lg p-2.5 text-center">Post</button>
                </div>
            </form>
        </div>
    )
}
