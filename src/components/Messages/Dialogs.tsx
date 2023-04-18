import { DialogData } from "../../types";
import { Dialog } from "./Dialog";

export function Dialogs({ dialogs }: { dialogs: DialogData[] }) {
    return (
        <div className="w-96">
            {
                dialogs.map(e => <Dialog dialog={e} key={e.user.userId} />)
            }
        </div>
    )
}
