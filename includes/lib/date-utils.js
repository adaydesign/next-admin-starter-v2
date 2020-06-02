export const getDateYMDFormat = (dateString) => {
    const date = new Date(dateString)

    // out > YYYY-MM-DD
    const year = date.getFullYear()
    const month = date.getMonth().toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    // const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

    return `${year}-${month}-${day}`
}