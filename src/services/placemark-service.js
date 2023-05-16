// @ts-nocheck
import axios from "axios";
import { user } from "../stores";

export const placemarkService = {
    baseUrl: "http://localhost:4000",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.placemark = JSON.stringify({ email: email, token: response.data.token });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },


    async logout() {
        user.set({
          email: "",
          token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("placemark");
    },

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    reload() {
        const placemarkCredentials = localStorage.placemark;
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },
    
    // working for all swimlists
    async getAllSwimlists() {
        try {
            const response = await axios.get(this.baseUrl + "/api/swimlists");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    // working for all spots
    async getAllSpots() {
        try {
            const response = await axios.get(this.baseUrl + "/api/spots");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    //Test by user??
    async getUserSwimlists() {
        const token = user.get().token;
        const response = await axios.get(this.baseUrl + "/api/swimlists", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return response.data;
    },
    
    //Test by ID
    async getSwimlist(id) {
        try {
            const response = await axios.get(`${this.baseUrl}/api/swimlists/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    //Test by ID
    async getSwimlistId(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/swimlists/" + id);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    

    // not yet working
    async addSpot(spot) {
        try {
            const response = await axios.post(this.baseUrl + "/api/swimlists/" + spot.swimlistid + "/spots", spot);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

    // alternative
    async createSpot(id, spot) {
        const response = await axios.post(`${this.baseUrl}/api/swimlists/${id}/spots`, spot);
        return response.data;
    }, 
    
};
