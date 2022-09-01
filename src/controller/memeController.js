const axios = require('axios')

const meme = async function(req, res){
    try{
        let template = req.query.template_id
        let text1 = req.query.text0
        let text2 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text1}&text1=${text2}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.status(201).send(result.data)
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports.meme = meme