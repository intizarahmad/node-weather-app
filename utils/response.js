const printErrorResponse = (res, error )=>{
    res.status(400);
    res.json({data: null,message : null, error});
}
const printSuccessResponse  = (res, data, msg)=>{
    res.status(200).json(data);
}
module.exports = {
    printSuccessResponse, printErrorResponse
}