import axios from "axios";

export async function getAllCharacter() {
    const {data} = await axios.get(`https://hp-api.onrender.com/api/characters`);
    // console.log(data.slice(0,noOfresult));
    return data.slice(0,20);

}