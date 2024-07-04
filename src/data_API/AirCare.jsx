import axios from "axios";
const baseURL = "http://localhost:8080/api/Air";
export const TaskDataServices = {

    getAllAir() {
        const Air = axios.get(baseURL + "/Air").then(res => res.data);
        return Air;
    },

    getAirById(id) {
        const AirById = axios.get(baseURL + "/Air/"+id).then(res => res.data);
        return AirById;
    },

    getAirBySearch(search){
        const AirBySearch = axios.get(baseURL + `/Air?search=${search}`).then(res => res.data);
        return AirBySearch;
    },    

    getFavoriteAir(){
        const favAir = axios.get(baseURL + "/Air").then(res => res.data
            .filter(Air => Air.isFavorite === true));
        return favAir;
    },    

    updateAir(id, data){
        const updatedAir = axios.put(baseURL + `/Air/${id}`, data).then(res => res.data);
        return updatedAir;

    }
}