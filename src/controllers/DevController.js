const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async store(req,res){
        const {github_username,techs, latitude, longitude} = req.body;
        let dev = await Dev.findOne({github_username});

        if(!dev){
            const apiEesponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const {name = login, avatar_url, bio} = apiEesponse.data;
            const techsArray = techs.split(',').map(tech => tech.trim());
            const location = {
                type:'Point',
                coordinates: [longitude,latitude]
            }
            techsArray = parseStringAsArray(techs);
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });//short sintax
        }

        return res.json(dev);
    },
    async index(req,res){
        const devs = await Dev.find({
            name:"diogoo9"
        });
        return res.json(devs);
    }
};