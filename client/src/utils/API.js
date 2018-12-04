import axios from "axios";

export default {
    vote: function(votes, id){
        return axios.put("/api/users/" + id, votes);
    },

    saveShred: function(shredData) {
        return axios.post("api/post", shredData);
    },

    saveUser: function(user) {
        alert("saveUser called")
        return axios.post("/api/users/", user);
    },

    getAllShreds: function() {
        return axios.get("/api/posts/")
    }
}