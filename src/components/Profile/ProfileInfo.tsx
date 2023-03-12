import { ProfileData } from "../../profile/ProfileData";

export function ProfileInfo({ profile }: { profile: ProfileData }) {
    let url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    if (profile.imageUrl !== null) {
        url = profile.imageUrl;
    }
    return (
        <div className="border-slate-600 border-2  rounded-xl bg-slate-200 grid grid-cols-2 h-60 m-4 p-4">
            <img src={url} className="h-full rounded-full border-2 border-slate-600" />
            {profile.username}
        </div>
    )
}

