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
}

module.exports = ApiFeatures

