import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiErrorLogin, ApiErrorProfile, DialogData, MessageData, PostData, ProfileData, UserData } from '../../../types'

import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' })
const baseQueryCors: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let newArgs: FetchArgs;
    if (typeof args === "string") {
        newArgs = {
            url: args,
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        }
    } else {
        args.mode = 'cors'
        args.credentials = "include"
        newArgs = args
    }
    let result = await baseQuery(newArgs, api, extraOptions)
    if (result.error && result.error.status === 401) {
        api.dispatch(apiSlice.util.invalidateTags(["CurrentUser"]))
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryCors,
    tagTypes: ['CurrentUser', 'Subscriptions', 'News', 'CurrentUserPosts', 'Messages', 'Dialogs'],
    endpoints: builder => ({
        login: builder.mutation<UserData | ApiErrorLogin, { name: string, password: string }>({
            query: (payload) => ({
                url: '/login',
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ['CurrentUser', 'News', 'CurrentUserPosts', 'Subscriptions', 'Dialogs'],
        }),
        getCurrentUser: builder.query<UserData, void>({
            query: () => '/me',
            providesTags: ['CurrentUser'],
        }),
        logout: builder.mutation<void, void>({
            query: () => '/me/logout',
            invalidatesTags: ['CurrentUser'],
        }),
        getCurrentUserPosts: builder.query<PostData[], void>({
            query: () => '/me/posts',
            providesTags: ['CurrentUserPosts'],
        }),
        setProfileImage: builder.mutation<void, File>({
            query: (payload) => {
                const data = new FormData()
                data.set("image", payload)
                return {
                    url: '/me',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['CurrentUser', 'CurrentUserPosts'],
        }),
        getDialogs: builder.query<DialogData[], void>({
            query: () => '/dialogs',
            providesTags: ['Dialogs']
        }),
        addPost: builder.mutation<void, { description: string, files: File[] }>({
            query: (payload) => {
                const data = new FormData()
                data.set("description", payload.description)
                for (const file of payload.files) {
                    data.append('files', file);
                }
                return {
                    url: '/posts',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['CurrentUserPosts', 'News']
        }),
        searchUsers: builder.query<UserData[], string>({
            query: (name) => `/search/users/${name}`,
        }),
        getProfile: builder.query<ProfileData | ApiErrorProfile, string>({
            query: (name) => `/profiles/${name}`,
        }),
        AddConversation: builder.mutation<{ conversation_id: number }, number>({
            query: (userId) => ({
                url: '/conversations',
                method: 'POST',
                body: JSON.stringify({ userId }),
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ['Dialogs']
        }),
        addConversationMessage: builder.mutation<void, { conversationId: number, text: string, files: File[] }>({
            query: (payload) => {
                const data = new FormData()
                data.set("conversationId", payload.conversationId.toString());
                data.set("text", payload.text);
                for (const file of payload.files) {
                    data.append('files', file);
                }
                return {
                    url: `/conversations/${payload.conversationId}/messages`,
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['Messages', 'Dialogs']
        }),
        getConversationMessages: builder.query<MessageData[], number>({
            query: (id) => `/conversations/${id}/messages`,
            providesTags: ['Messages']
        }),
        getNews: builder.query<PostData[], void>({
            query: () => "/news",
            providesTags: ['News']
        }),
        changeSubscriptionState: builder.mutation<void, { userId: number, to: boolean }>({
            query: (payload) => ({
                url: '/subscriptions',
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ['Subscriptions', 'News']
        }),
        getSubscriptionState: builder.query<{ isSubscribed: boolean }, number>({
            query: (userId) => `/subscriptions/${userId}`,
            providesTags: ['Subscriptions']
        }),
        getUsers: builder.query<UserData[], string>({
            query: (name) => `/search/users/${name}`,
        }),
    }),

})


// Export the auto-generated hook for the `getPosts` query endpoint
export const {
    useLoginMutation,
    useGetCurrentUserQuery,
    useGetCurrentUserPostsQuery,
    useAddConversationMessageMutation,
    useAddConversationMutation,
    useAddPostMutation,
    useGetDialogsQuery,
    useGetProfileQuery,
    useGetConversationMessagesQuery,
    useChangeSubscriptionStateMutation,
    useGetSubscriptionStateQuery,
    useGetNewsQuery,
    useSetProfileImageMutation,
    useLogoutMutation,
    useGetUsersQuery
} = apiSlice