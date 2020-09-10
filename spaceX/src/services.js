import axios from 'axios'


// const baseURL = 'https://api.spacexdata.com/v3';

// export const companyInfoAx = () => {
//     return Axios.get(`${baseURL}/info`);
// }

// export const getShips = () => {
//     return Axios.get(`${baseURL}/ships`);
// }

export const getCompanyInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const getAllShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
}

