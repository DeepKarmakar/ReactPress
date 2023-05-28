import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Utilities from '../../Helper/utilities';

export const ReactPressAPI = createApi({
	reducerPath: 'ReactPressAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5050/api',
		prepareHeaders: (headers) => {
			const token = Utilities.getToken();
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: (builder) => ({
		getAllPosts: builder.query({ query: () => '/post/all-posts' }),
		addPost: builder.mutation({
			query: (post) => ({
				url: '/post/create-new',
				method: 'POST',
				body: post
			}),
		}),
	}),

})

export const {
	useGetAllPostsQuery,
	useAddPostMutation,
} = ReactPressAPI;