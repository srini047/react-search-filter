import axios from "axios"

export const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/jupyter-naas/awesome-notebooks/master/templates.json'
})

export const getTemplates = async () => {
    const response = await api.get()
    return response.data
}