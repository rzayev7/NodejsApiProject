
const generateResponce = (status,res,data)=>{
    res.writeHead(status,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
}

module.exports=generateResponce;