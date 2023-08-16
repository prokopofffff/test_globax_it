import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const UsersApi = createApi({
    reducerPath: 'UsersApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    tagTypes: ['User'],
    endpoints: (builder) => ({

        // список пользователей
        getUsers: builder.query({
            query: ({term}) => ({
                url: term ? `?term=${term}` : '',
                method: "GET"
            }),
            providesTags: (result, error, arg) => {
                return result
                    ? [...result?.map(() => ({type: 'User'})), 'User']
                    : ['User'] // это тег для кеша RTK
            }

        }),

        
    }),
});

export const {
    useGetUsersQuery,
} = UsersApi;
