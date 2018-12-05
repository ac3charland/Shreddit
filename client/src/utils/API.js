import axios from "axios";

export default {
    vote: function(votes, id){
        return axios.put("/api/votes/" + id, votes);
    },

    saveShred: function(shredData) {
        return axios.post("api/posts", shredData);
    },

    saveUser: function(user) {
        return axios.post("/api/users/", user);
    },

    loginUser: function(user) {
        return axios.post("/api/users/login", user);
    },

    getAllShreds: function() {
        return axios.get("/api/posts/");
    },

    getPostShred: function(id) {
        return axios.get("/api/posts/" + id);
    },

    postComment: function(comment, id) {
        return axios.post("/api/posts/" + id + "/comments", comment)
    }
}