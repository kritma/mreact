import { useChangeSubscriptionStateMutation, useGetSubscriptionStateQuery } from "../../redux/features/api/apiSlice";
import { UserData } from "../../types";

export function SubscribeButton({ user }: { user: UserData }) {
    const { data } = useGetSubscriptionStateQuery(user.id)
    const [changeSubscription] = useChangeSubscriptionStateMutation()

    function onSubscribePressed(event: React.MouseEvent<HTMLButtonElement>) {
        changeSubscription({ userId: user.id, to: !data!.isSubscribed })
    }

    if (data === undefined) {
        return null
    }

    return (
        <button onClick={onSubscribePressed} className="bg-active-color rounded-lg p-2 hover:bg-active-color-hover block">{data.isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
    )
}
