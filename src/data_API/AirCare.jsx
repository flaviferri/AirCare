import axios from "axios";
const baseURL = "http://localhost:8080";
export const motoServices = {

    getAllMotos() {
        const motos = axios.get(baseURL + "/motos").then(res => res.data);
        return motos;
    },

    getMotoById(id) {
        const motoById = axios.get(baseURL + "/motos/"+id).then(res => res.data);
        return motoById;
    },

    getMotosBySearch(search){
        const motosBySearch = axios.get(baseURL + `/motos?search=${search}`).then(res => res.data);
        return motosBySearch;
    },    

    getFavoriteMotos(){
        const favMotos = axios.get(baseURL + "/motos").then(res => res.data
            .filter(moto => moto.isFavorite === true));
        return favMotos;
    },    

    updateMoto(id, data){
        const updatedMoto = axios.put(baseURL + `/motos/${id}`, data).then(res => res.data);
        return updatedMoto;

    }
}