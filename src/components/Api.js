import axios from "axios";

const BASE_URL = "https://i-am-wellbeing-backend.onrender.com/wellBeing/api";

export const sendMessage = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/message`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const sendAccountDetails = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/Account`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const sendNeeds = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/needs`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}