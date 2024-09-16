import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ReportResponse } from "../../types/Product/PostProb";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const reportApi = createApi({
    reducerPath: 'reportApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        getAllReport: build.query<ReportResponse, void>({
            query: () => `reports`,
        }),
        changeReportStatus: build.mutation<string, { id: number; status: string }>({
            query: ({ id, status }) => ({
                url: `reports/${id}/status`,
                method: 'PUT',
                params: { status },
            }),
        }),
    }),
});

export const {
    useGetAllReportQuery,
    useChangeReportStatusMutation,
} = reportApi;
