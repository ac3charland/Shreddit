import axios from "axios";

export default {
    vote: function(votes, id){
        return axios.put("/api/users/" + id, votes);
    }
}