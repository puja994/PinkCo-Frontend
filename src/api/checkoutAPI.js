import axios from 'axios'
const rootUrl = "http://localhost:8001/api/v1/"
const checkoutAPIurl = rootUrl + "checkout"

export const checkoutAPI = () => {
    return new Promise(async(resolve,reject)=>{
        try{
        const result = await axios.post(checkoutAPIurl)
        resolve (result)
        }catch(error){
            reject(error)
        }
    })
}