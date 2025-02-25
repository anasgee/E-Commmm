class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
        const name = this.queryStr.name ? {
            name:{
                $regex:this.queryStr.name,
                $options:"i"
            }
        }:{}

        this.query = this.query.find({...name});
        return this
    }

    // Filter for category search


    filter(){
        const queryCopy = {...this.queryStr};
        console.log(queryCopy)
        const deleteKeywords = ["name","limit","page"];
        deleteKeywords.forEach((key) => delete queryCopy[key]);
        console.log(queryCopy)

        this.query = this.query.find(queryCopy);
        return this;
    }



}



module.exports = ApiFeatures

