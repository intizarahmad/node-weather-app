const {printErrorResponse} = require('./response');
const checkEmpty = (req, res, next)=>{
    let requestData = req.data;
    let toBeCheck = req.mandatoryFields;
    for(let i=0; i <toBeCheck.length; i++){
        let currentKey = toBeCheck[i] ? toBeCheck[i].toLowerCase():null;
        if( currentKey in requestData){
            console.log(requestData[currentKey]);
            if(!requestData[currentKey] || requestData[currentKey] === undefined || requestData[currentKey] ===''){
                console.log(res)
                printErrorResponse(res, `${currentKey} should not be empty`)
                break;
            }
        }else{
            printErrorResponse(res, `${currentKey} should not be empty`)
            break;
        }
    }
    next();
}

module.exports = {
    checkEmpty
}