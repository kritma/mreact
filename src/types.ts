export type DialogData = { id: number, name: string, image_url: string, type: "chats" | "conversations", last_message: { text: string, name: string, image_url: string } | null }
export type MessageData = {
    id: number, sender_id: number, sender_image_url: string, sender_name: string,
    is_send_by_user: boolean, text: string, created_at: string,
    images: string[], music: string[], videos: string[], files: string[]
}
export type UserData = { id: number, name: string, image_url: string }
export type PostData = { id: number, description: string, created_at: string, user: UserData, images: string[], music: string[], videos: string[], files: string[] }
export type SongData = { id: number, name: string, url: string, user_name: string, isFavorite: boolean }
export type ProfileData = { user: UserData, posts: PostData[] }
export type ApiErrorProfile = { err: "NOT_FOUND" }
export type ApiErrorLogin = { err: "INVALID_NAME_OR_PASSWORD" }

export function isApiError<T extends { err: string }>(val: T | any): val is T {
    return 'err' in val
}

