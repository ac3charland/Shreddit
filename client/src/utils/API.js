import axios from "axios";

export default {
    vote: function(votes, id){
        return axios.put("/api/votes/" + id, votes);
    },

    saveShred: function(shredData) {
        console.log("Posting shred with ShredData: ")
        console.log(shredData)
        return axios.post("api/posts", shredData);
    },

    // Calls passport user signup function 
    // POST req with user (w/ un and pw) 
    // Successful res: user (w/ id, un and token)
    saveUser: function(user) {
        return axios.post("/api/users/", user);
    },
    
    // Calls passport user login function 
    // POST req with user (w/ un and pw) 
    // Successful res: user (w/ id, un and token)
    loginUser: function(user) {
        return axios.post("/api/users/login", user);
    },

    getAllShreds: function() {
        return axios.get("/api/posts/");
    },

    getUserShreds: function(username){
        return axios.get("/api/posts/user/" + username)
    },

    getPostShred: function(id) {
        return axios.get("/api/posts/" + id);
    },

    postComment: function(comment, id) {
        return axios.post("/api/posts/" + id + "/comments", comment)
    }
}