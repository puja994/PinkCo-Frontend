import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1"
const contactApi = rootUrl + "contact"

export const contactAPI = frmDt => {
    return new Promise(async(resolve, reject)=>{
        try{
            const {data} = await axios.post(contactApi, frmDt)
            resolve(data)

        }catch(error){
            reject(error)
        }
    })
}