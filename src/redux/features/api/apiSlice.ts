import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiError, ApiErrorProfile, DialogData, UserData } from '../../../types'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/api' }),
    tagTypes: ['Friends', 'Profile'],
    endpoints: builder => ({
        getCurrentUser: builder.query<{ userId: number } | ApiError, void>({
            query: () => '/me'
        }),
        getDialogs: builder.query<DialogData[] | ApiError, void>({
            query: () => '/dialogs'
        }),
        getFriends: builder.query<UserData[] | ApiError, void>({
            query: () => '/friends',
            providesTags: ['Friends'],
        }),
        addFriend: builder.mutation<ApiError | void, number>({
            query: (id) => ({
                url: '/friends',
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ['Friends'],
        }),
        addPost: builder.mutation<ApiError | void, { description: string, files: File[] }>({
            query: (payload) => {
                const data = new FormData()
                data.set("description", payload.description)
                for (const file of payload.files) {
                    data.append('files', file);
                }
                return {
                    url: '/posts',
                    method: 'POST',
                    body: data
                }
            },
        }),
        searchUsers: builder.query<UserData[], string>({
            query: (name) => `/search/users/${name}`,
        }),
        getProfile: builder.query<UserData[] | ApiErrorProfile, string>({
            query: (name) => `/profiles/${name}`,
        }),
        addConversation: builder.mutation<ApiError | void, number>({
            query: (userId) => ({
                url: '/friends',
                method: 'POST',
                body: JSON.stringify({ userId }),
                headers: {
                    'Content-type': 'application/json',
                },
            }),
        }),
        addConversationMessage: builder.mutation<ApiError | void, { conversationId: number, text: string, files: File[] }>({
            query: (payload) => {
                const data = new FormData()
                data.set("conversationId", payload.conversationId.toString());
                data.set("text", payload.text);
                for (const file of payload.files) {
                    data.append('files', file);
                }
                return {
                    url: `conversations/${payload.conversationId}/messages`,
                    method: 'POST',
                    body: data
                }
            },
        }),
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
    useGetCurrentUserQuery,
    useAddConversationMessageMutation,
    useAddConversationMutation,
    useAddFriendMutation,
    useAddPostMutation,
    useGetDialogsQuery,
    useGetFriendsQuery,
    useGetProfileQuery
} = apiSlice