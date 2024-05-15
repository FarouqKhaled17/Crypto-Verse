import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '40740e5289mshf23b2aa05955f17p1c639bjsnde03b99500af',
    'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'

}

const baseUrl = 'https://google-news13.p.rapidapi.com';
const createRequest = (url, params = {}) => ({
    url,
    headers: cryptoNewsHeaders,
    params: {
        lr: 'en-US', // Use a valid language region code, for example, 'en-US'
        ...params,
    },
});


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/business?limit=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;