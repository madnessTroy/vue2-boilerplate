import ApiServices from '@/utils/ApiServices'

export const ListUser = async (payload) => {
    try {
        const { data } = await ApiServices.get('/123123', payload)
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
