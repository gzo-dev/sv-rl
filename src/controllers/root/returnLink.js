/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const returnLink = (req, res) => {
    const json = "https://google.com"
    res.json({link: json})
}

export default returnLink
