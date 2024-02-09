import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const hopeharvestapi = createApi({
    reducerPath: 'hopeharvestapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://hope-harvest-server.vercel.app/'}),
    tagTypes:['donationtData'],
    endpoints:(builder) =>({
        getAllDonation: builder.query({
            query:()=>'donationCollection',
            providesTags:['donationtData'],
        }),

        getAllUser: builder.query({
            query:()=>'alluser',
            providesTags:['donationtData'],
        }),

        getUserDonation: builder.query({
            query:({email})=>`userdonationCollection?email=${email}`,
            providesTags:['donationtData'],
        }),
        
        donationDataUpdata: builder.mutation({
            query: ({id, data})=>({
                url: `donationdataupdate/${id}`,//use axiosSecure
                method: 'PUT',
                body:data
            }),
            invalidatesTags:['donationtData'],
        }),

        donationDataAdd: builder.mutation({
            query:({newdonationdata})=>({
                url:'donationDataAdd',//use axiosSecure
                method:'POST',
                body:newdonationdata
            }),
            invalidatesTags:['donationtData']
        }),

        UserDonationDataAdd: builder.mutation({
            query:({newdonationdata})=>({
                url:'userDonationDataAdd',//use axiosSecure
                method:'POST',
                body:newdonationdata
            }),
            invalidatesTags:['donationtData']
        }),


        donationDelete: builder.mutation({
            query: (id)=>({
                url: `donationdelete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['donationtData'],
        }),


        makeAdmin: builder.mutation({
            query: (id)=>({
                url: `makeadmin/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags:['gadgetData'],
        }),


        
    })
})


export const {useGetAllDonationQuery,useGetUserDonationQuery,useDonationDataUpdataMutation, useDonationDataAddMutation, useUserDonationDataAddMutation, useDonationDeleteMutation, useGetAllUserQuery, useMakeAdminMutation} = hopeharvestapi;