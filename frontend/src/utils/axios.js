import * as coreAxios from "axios";

const baseUrl = process.env.REACT_APP_API_HOST;

export const axios = coreAxios.default.create({

    baseURL: baseUrl,

});

export const axiosInterceptor = () => {

    axios.interceptors.request.use(async (request) => {

        request["headers"]["Content-Type"] = `application/json`;
        request['mode'] = "cors";

        return request;

    });

    //response interceptors

    axios.interceptors.response.use(

        async (response) => {

            if (!response.data) {
                return response;
            }

            return response.data;

        },

        (error) => {

            const { response } = error;

            if (response) {

                const { status, data } = response;

            }

            return Promise.reject(error);

        }

    );

};

axiosInterceptor();