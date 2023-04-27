import { MoonLoader } from "react-spinners"
import { useGetUsersQuery } from "../../redux/features/api/apiSlice"
import { User } from "./User"

export function FoundUsers({ name }: { name: string }) {
    if (name === "") {
        return null
    }
    const { data } = useGetUsersQuery(name)

    if (data === undefined) {
        return <MoonLoader />
    }

    return <>{data.map(user => <User key={user.id} user={user} />)}</>

}
