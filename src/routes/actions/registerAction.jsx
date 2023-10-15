import axios from "axios";
import Cookies from "js-cookie";

export const registerAction = async ({request}) => {
    const formData = await request.formData()

    const data = Object.fromEntries(formData)

    console.log(data)
    const res = await axios.post("https://beta-ubi-api.techpark.ir/api/v1/admin-api/processes/64f6cb145a97c362701f7193?apiKey=2140a1236748fd15d72f5e9f5649fbde", {
        message: "This case is started from REST-API",
        variables: [
            {
                name: "number",
                value: data.number
            },
            {
                name: "text",
                value: data.text
            }
        ]
    })

    if (res.status === 202){
        Cookies.set("code", data.number)
        Cookies.set("mobile", data.text)
    }
    return res.status === 202
}