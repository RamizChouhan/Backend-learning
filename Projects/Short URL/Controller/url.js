const {nanoid} = require("nanoid");
const URL = require('../Models/url');
// console.log(URL);
async function handleGenerateNewShortURL(req,res){
   const body = req.body;
    console.log(body);
   if(!body.url) return res.status(400).json({error:"url is required"});
    const ShortID = nanoid(8);
   await URL.create({
    shortId : ShortID,
    redirectURL:body.url,
    visitHistory:[],

   });
   return res.render('home',{id:ShortID})


}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});

    return res.json({
        totalClicks : result.visitHistory.length,
        analytics:result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
}