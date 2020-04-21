import * as axios from "axios";

const samurai = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "bf835ffb-d57a-4e55-90ef-47ddc3e281d1"
    }
});

export const usersAPI = {
    getUsers(selectedPage = 1, pageSize = 10) {
        return samurai.get(`users?page=${selectedPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(userId) {
        return samurai.delete(`follow/${userId}`).then(response => response.data)
    },
    follow(userId) {
        return samurai.post(`follow/${userId}`).then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return samurai.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return samurai.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return samurai.put(`profile/status`, {status}).then(response => response.data);
    },
};

export const auth = () => {
    return samurai.get(`auth/me`).then(response => response.data);
};
