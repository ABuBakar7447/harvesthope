import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const hopeharvestapi = createApi({
    reducerPath: 'hopeharvestapi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    tagTypes:['donationtData'],
    endpoints:(builder) =>({
        getAllDonation: builder.query({
            query:()=>'donationCollection',
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

        
    })
})


export const {useGetAllDonationQuery,useDonationDataUpdataMutation, useDonationDataAddMutation, useUserDonationDataAddMutation} = hopeharvestapi;