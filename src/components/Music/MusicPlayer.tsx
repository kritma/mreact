import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import AudioPlayer from "./AudioPlayer"
import { next, prev } from "../../redux/features/music/musicSlice"

export function MusicPlayer() {
    const currentSong = useSelector((state: RootState) => state.music.currentSong)
    const isWhereNext = useSelector((state: RootState) => {
        if (state.music.currentIndex === null) {
            return false
        }
        return state.music.currentIndex < state.music.songs.length - 1
    })
    const isWherePrev = useSelector((state: RootState) => {
        if (state.music.currentIndex === null) {
            return false
        }
        return state.music.currentIndex > 0
    })
    const dispatch = useDispatch<AppDispatch>()


    if (currentSong === null) {
        return null
    }


    function onPrevPressed() {
        dispatch(prev())
    }

    function onNextPressed() {
        dispatch(next())
    }

    return (
        <div className="text-text-color">
            <div className="bg-info-color rounded-lg flex px-4 gap-2 border border-field-border-color">
                <AudioPlayer audioSrc={currentSong.url} name={currentSong.name} userName={currentSong.user_name} />
                <button onClick={onPrevPressed} hidden={!isWherePrev}>prev</button>
                <button onClick={onNextPressed} hidden={!isWhereNext}>next</button>
            </div>
        </div>
    )
}
