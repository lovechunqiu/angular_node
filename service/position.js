
var sql = require('mysql');
var connection = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'test'
});
connection.connect();
/**
 * 获取所有标记点
 * @param req
 * @param res
 */
exports.getAllMarker = function(req,res) {
    console.log('获取所有标记点服务器端');
    console.log(req.body);

    var con = connection.query("select * from ang_node",function(err,result,fields){
        if(err){
            throw err;
        }
        console.log("rows",result[0].site_id);
        var ang_node = [];
        result.forEach(function (item) {
            var new_1item = {
                site_id: item.site_id,
                lng: item.lng,
                lat: item.lat
            };
            ang_node.push(new_1item);
        });
        console.log("rowsss",ang_node);
        res.send({retCode:1,data:ang_node});
    })

};
