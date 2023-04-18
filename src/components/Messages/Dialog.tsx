import { NavLink } from "react-router-dom";
import { DialogData } from "../../types";

export function Dialog({ dialog }: { dialog: DialogData }) {
    let url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    if (dialog.sendTo.imageUrl !== null) {
        url = dialog.sendTo.imageUrl;
    }
    return (
        <NavLink to={`/messages/${dialog.sendTo.userId}`} className={({ isActive }) => `h-32 flex items-center border-slate-600 border-2 rounded-xl bg-slate-100 m-4 p-4 ${isActive ? "bg-blue-200" : ""}`} >
            <img src={url} alt="avatar" className="w-20 h-20 m-2 object-cover rounded-full border-2 border-slate-600" />
            <div className="flex flex-col overflow-hidden text-ellipsis">
                <p className="font-bold text-xl">{dialog.sendTo.username}</p>
                <p className="whitespace-nowrap">{dialog.lastMessage.text}</p>
            </div>
        </NavLink>
    )
}
