import axios from "axios";

const baseURL = "http://localhost:8080/api/Air";

export const TaskDataServices = {

    getAllAir() {
        return axios.get(`${baseURL}/Air`).then(res => res.data);
    },

    getAirById(id) {
        return axios.get(`${baseURL}/Air/${id}`).then(res => res.data);
    },

    getAirBySearch(search) {
        return axios.get(`${baseURL}/Air?search=${search}`).then(res => res.data);
    },

    getFavoriteAir() {
        return axios.get(`${baseURL}/Air`).then(res => 
            res.data.filter(Air => Air.isFavorite === true)
        );
    },

    updateAir(id, data) {
        return axios.put(`${baseURL}/Air/${id}`, data).then(res => res.data);
    }
};