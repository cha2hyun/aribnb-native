import axios from "axios";

const callApi = async (method, path, data, jwt) => {
    const header = {
        Authorization: jwt,
        ContentType: "application/json",
    };
    const baseUrl = "http://127.0.0.1:8000/api/v1";
    const fullUrl = `${baseUrl}${path}`;
    if (method == "get" || method === "delete") {
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};

export const createAccount = (form) => callApi("post", "/users/", form);
