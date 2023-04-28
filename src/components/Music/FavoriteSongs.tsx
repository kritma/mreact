import { useGetFavoriteSongsQuery } from "../../redux/features/api/apiSlice"
import { Song } from "./Song"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { setSongs } from "../../redux/features/music/musicSlice"

export function FavoriteSongs({ name }: { name: string }) {
    const dispatch = useDispatch<AppDispatch>()
    const { data: favoriteSongs } = useGetFavoriteSongsQuery()

    if (favoriteSongs === undefined) {
        return null
    }

    function onPlayPressed(index: number) {
        dispatch(setSongs({ index, songs: favoriteSongs! }))
    }

    return (
        <div className="text-text-color bg-info-color border border-info-border-color p-4 rounded-lg flex flex-col gap-3">
            <p>Favorite</p>
            {favoriteSongs.filter(song => song.name.includes(name)).map((song, i) => <Song key={song.id} song={song} onPlayPressed={onPlayPressed.bind(null, i)} />)}
        </div>
    )
}
