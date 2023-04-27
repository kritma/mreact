import { MoonLoader } from "react-spinners";
import { useGetDialogsQuery } from "../../redux/features/api/apiSlice";
import { Dialog } from "./Dialog";

export function Dialogs() {
    const { data: dialogs } = useGetDialogsQuery()
    if (dialogs === undefined) {
        return <MoonLoader />
    }

    if (dialogs.length === 0) {
        return <p className="text-7xl text-text-color m-auto">No chats</p>
    }
    return <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
        {
            dialogs.map(d => <Dialog dialog={d} key={d.id + d.type} />)
        }
    </div>

}
