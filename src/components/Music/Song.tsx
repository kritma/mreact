import { Link } from "react-router-dom";
import { SongData } from "../../types";
import { useAddFavoriteSongMutation, useRemoveFavoriteSongMutation } from "../../redux/features/api/apiSlice";

export function Song({ song, onPlayPressed }: { song: SongData, onPlayPressed: () => void }) {
    const [addToFavorites] = useAddFavoriteSongMutation()
    const [removeFromFavorites] = useRemoveFavoriteSongMutation()

    function onAddPressed() {
        addToFavorites(song.id)
    }

    function onRemovePressed() {
        removeFromFavorites(song.id)
    }

    return (
        <div className="px-4 py-2 border border-field-border-color text-text-color bg-field-color rounded-xl flex flex-col overflow-hidden focus:h-auto" >
            <div className="flex gap-4 items-center">
                <button onClick={onPlayPressed}>Play</button>
                <div>
                    <p className="font-semibold text-lg">{song.name}</p>
                    <Link to={`/users/${song.user_name}`} className="text-sm block text-link-color hover:underline">{song.user_name}</Link>
                </div>
                <button onClick={song.isFavorite ? onRemovePressed : onAddPressed} className="ml-auto text-3xl">{song.isFavorite ? "-" : "+"}</button>
            </div>
        </div>
    )
}
