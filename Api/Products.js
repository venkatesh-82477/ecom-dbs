const {findAllFrom} = require("../database/Connections");
const Products = async (req,res)=>{
    try {
        const productsData = await findAllFrom({},"products")
        return res.status(200).send({productsData:productsData})
    } catch (error) {
        console.log("Error occur in fetching data",error);
        return res.status(500).send({message:"something went wrong"})
    }
 }

 module.exports.apiController = Products;