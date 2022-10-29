import userData from "../data/users.json"
import axios from "axios";


export function getUsers(){
    return new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve(userData.users);
        }, 1000);
    })
}

export function getPosts() {
    return axios
      .get("https://three-points.herokuapp.com/api/posts", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => response.data);      
  }
 
  export function onLoginComplete(username, password) {
    return axios
      .post("https://three-points.herokuapp.com/api/login", { username, password })
      .then((response) => response.data);
  }