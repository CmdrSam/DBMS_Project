let oracledb = require('oracledb');  

let empid=document.getElementById(emp_id);

oracledb.getConnection({  
     user: "C##AYUSH",  
     password: "ayush123#",  
     connectString: "localhost/xe"  
}, function(err, connection) {  
     if (err) {  
          console.error(err.message);  
          return;  
     }  
     connection.execute( "select password from employee where employee_id=empid.value",  
     [],  
     function(err, result) {  
          if (err) {  
               console.error(err.message);  
               doRelease(connection);  
               return;  
          }
          console.log(result);  
          console.log(result.metaData);  
          doRelease(connection);
          return result.rows[0][0];  // return the password for authentication back to the server
            
     });  
});  
  
function doRelease(connection) {  
     connection.release(  
          function(err) {  
               if (err) {console.error(err.message);}  
          }  
     );  
}  