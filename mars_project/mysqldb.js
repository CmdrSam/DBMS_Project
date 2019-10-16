let mysql=require('mysql');

let con=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'ayush123#',
    database: 'mars'
});

con.connect(function(error){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Connected!!');
        con.query('use mars');
    }
});
let id=1;

let login=function(id){
    let query1=`select password from employee where id=${id}`;
    con.query(query1,function(err,results){
        if (err) console.log(err);
        console.log(results[0].password)
    return results[0].password;
});
}
module.exports=login;

