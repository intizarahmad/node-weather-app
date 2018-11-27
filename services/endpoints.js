
const endpoints =  {
    googleAutoSuggest :(str)=>{
        return `${process.env.AUTOCOMPLETE_URL}&key=${process.env.GOOGLE_API_KEY}&input=${str}`;
    }, 
    googleGeocode :(str)=>{
        return `${process.env.GEOCODE_URL}?key=${process.env.GOOGLE_API_KEY}&address=${str}`;
    }
}
module.exports = {
    endpoints
}