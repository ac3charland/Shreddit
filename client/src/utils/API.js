import axios from "axios";

export default {
    vote: function(votes, id){
        return axios.put("/api/users/" + id, votes);
    },

    saveShred: function(shredData) {
        return axios.post("api/posts", shredData);
    },

    saveUser: function(user) {
        alert("saveUser called")
        return axios.post("/api/users/", user);
    },

    loginUser: function(user) {
        alert("loginUser called")
        return axios.post("/api/users/login", user);
    },

    getAllShreds: function() {
        return axios.get("/api/posts/");
    },

    getPostShred: function(id) {
        return axios.get("/api/posts/" + id);
    }
}