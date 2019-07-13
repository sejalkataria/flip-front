import axios from "axios";
let api=axios.create({
    baseURL:"http://192.168.200.180/api/"
})
export default api