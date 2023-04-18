import { DialogData, MessageData, ProfileData, UserData } from "../types";

export async function login(name: string, password: string): Promise<{ err?: string | undefined }> {
    const response = await fetch_api("login", {
        method: "POST",
        body: JSON.stringify({ name, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}


export async function currentUser(): Promise<UserData> {
    const response = await fetch_api("me", {
        method: "GET",
    })
    return response.json()
}

export async function getDialogs(): Promise<DialogData[]> {
    const response = await fetch_api("dialogs", {
        method: "GET",
    })
    return response.json()
}

export async function getFriends(): Promise<UserData[]> {
    const response = await fetch_api("friends", {
        method: "GET",
    })
    return response.json()
}

export async function addFriend(id: number): Promise<boolean> {
    const response = await fetch_api("friends", {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.ok
}

export async function addPost(description: string, files: File[]): Promise<boolean> {
    const data = new FormData()
    data.set("description", description)
    for (const file of files) {
        data.append('files', file);
    }

    const response = await fetch_api("posts", {
        method: "POST",
        body: data,
    })
    return response.ok
}

export async function searchUsers(name: string): Promise<UserData[]> {
    const response = await fetch_api(`search/users/${name}`, {
        method: "GET",
    })
    return response.json()
}

export async function getProfile(name: string): Promise<ProfileData> {
    const response = await fetch_api(`profiles/${name}`, {
        method: "GET",
    })
    return response.json()
}

export async function addConversation(userId: number): Promise<boolean> {
    const response = await fetch_api("conversations", {
        method: "POST",
        body: JSON.stringify({ userId }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.ok
}

export async function addConversationMessage(conversationId: number, text: string, files: File[]): Promise<MessageData> {
    const data = new FormData()
    data.set("conversationId", conversationId.toString());
    data.set("text", text);
    for (const file of files) {
        data.append('files', file);
    }
    const response = await fetch_api(`conversations/${conversationId}/messages`, {
        method: "POST",
        body: data
    })
    return response.json()
}

function fetch_api(url: string, init?: RequestInit | undefined) {
    return fetch(new URL(url, "http://127.0.0.1:3000/api/"), init)
}