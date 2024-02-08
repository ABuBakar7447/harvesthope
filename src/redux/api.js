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

        
    })
})


export const {useGetAllDonationQuery,useDonationDataUpdataMutation} = hopeharvestapi;