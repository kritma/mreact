import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SongData } from '../../../types'

interface MusicState {
    currentIndex: number | null,
    currentSong: SongData | null,
    songs: SongData[]
}

const initialState: MusicState = {
    currentIndex: null,
    currentSong: null,
    songs: []
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        next(state) {
            if (state.currentIndex !== null) {
                state.currentIndex++
                state.currentSong = state.songs[state.currentIndex]
            }
        },
        prev(state) {
            if (state.currentIndex !== null) {
                state.currentIndex--
                state.currentSong = state.songs[state.currentIndex]
            }
        },
        setIndex(state, action: PayloadAction<number>) {
            state.currentIndex = action.payload
            state.currentSong = state.songs[state.currentIndex]
        },
        setSongs(state, action: PayloadAction<{ songs: SongData[], index: number }>) {
            state.songs = action.payload.songs
            state.currentIndex = action.payload.index
            state.currentSong = state.songs[state.currentIndex]
        },
    },
})

export const { next, prev, setIndex, setSongs } = musicSlice.actions
