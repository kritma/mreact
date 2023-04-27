import { Link } from "react-router-dom";
import { DialogData, UserData } from "../../types";

export function User({ user }: { user: UserData }) {
    return (
        <Link to={`/users/${user.name}`} className={`p-4 border border-info-border-color text-text-color bg-info-color rounded-xl flex flex-col overflow-hidden focus:h-auto`} >
            <div className="flex gap-4">
                <img className="bg-info-color rounded-full h-16 block aspect-square object-cover" src={user.image_url} />
                <div className="w-full">
                    <p className="text-xl font-semibold mt-1">{user.name}</p>
                </div>
            </div>
        </Link>
    )
}
