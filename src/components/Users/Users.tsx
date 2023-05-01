import { useState } from "react";
import { FoundUsers } from "./FoundUsers";

export function Users() {
    const [name, setName] = useState<string>("")

    return (
        <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
            <input type="text" name="name" pattern="[a-zA-Z0-9_]+" id="name" onChange={e => setName(e.target.value)} className="border sm:text-sm rounded-lg block w-full p-2.5 bg-field-color border-field-border-color placeholder-text-color-placeholder text-text-color focus:border-active-color outline-none" placeholder="user_name" />
            {name.trim().length !== 0 ? <FoundUsers name={name} /> : null}
        </div>
    )
}
