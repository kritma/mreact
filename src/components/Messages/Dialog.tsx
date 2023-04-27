import { Link } from "react-router-dom";
import { DialogData } from "../../types";

export function Dialog({ dialog }: { dialog: DialogData }) {
    return (
        <Link to={`/${dialog.type}/${dialog.id}`} className={`p-4 border border-info-border-color text-text-color bg-info-color rounded-xl flex flex-col overflow-hidden focus:h-auto`} >
            <div className="flex gap-4">
                <img className="bg-info-color rounded-full h-16 block aspect-square object-cover" src={dialog.image_url} />
                <div className="w-full">
                    <p className="text-xl font-semibold mt-1">{dialog.name}</p>
                    <div className="text-sm">{dialog.last_message?.name}: {dialog.last_message?.text.substring(0, 50)}</div>
                </div>
            </div>
        </Link>
    )
}
