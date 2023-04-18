export type DialogData = { id: number, name: string, type: "CHAT" | "CONVERSATION", last_message: { text: string, name: string, image_url: string } | undefined }
export type MessageData = { id: number, sender_id: number, sender_image_url: string, sender_name: string, text: string, created_at: Date, images: string[], files: string[] }
export type UserData = { id: number, name: string, image_url: string | null }
export type PostData = { id: number, description: string, files: string[], images: string[] }
export type ProfileData = { user: UserData, posts: PostData[], conversation_id: number | null }
export type ApiError = { err: "NO_TOKEN" | "INVALID_TOKEN" }
export type ApiErrorProfile = { err: "NO_TOKEN" | "INVALID_TOKEN" | "NOT_FOUND" }