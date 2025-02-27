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
        const queryCopy = {...this.queryStr}; // is sy queryStr ki aik copy bn jay gi  /////  jis sy original querystr ko kuch nai ho ga 
        console.log(`Before the delete keyword applied :`,queryCopy)
        const deleteKeywords = ["name","limit","page"];
        deleteKeywords.forEach((key) => delete queryCopy[key]);
        console.log(`After the delete keyword applied : ` , queryCopy);

//pehly string main convert kia and dollars sign add up kia
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`)
        
        console.log(queryStr)
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    //pagination to show only 5 posts per page
    pagination(pageLimit){
        const currentpage  = Number(this.queryStr.page);

        const skip = pageLimit * (currentpage - 1);

        this.query = this.query.limit(pageLimit).skip(skip);

        return this;

    }
}



module.exports = ApiFeatures

