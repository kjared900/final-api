const connection = require('./db.configs');



/*
--------------------------------------------------------------------------------------------------------------------------------
                                                            usuarios
--------------------------------------------------------------------------------------------------------------------------------*/



module.exports.createUser = function(email,password,callback){
    connection.query(`INSERT INTO usuario VALUES (DEFAULT,'${email}','${password}')`,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}


module.exports.loginUser = function(email,password,callback){
    connection.query(`Select * from usuario where correo = '${email}' and contraseña='${password}'`,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}



/*
--------------------------------------------------------------------------------------------------------------------------------
                                                            Productos
--------------------------------------------------------------------------------------------------------------------------------*/



module.exports.createProduct = function(codigoDeBarras,nombre,descripcion,precio,cantidadMinima, cantidadMaxima, cantidadActual, callback){
    connection.query(`INSERT INTO producto VALUES ('${codigoDeBarras}','${nombre}', '${descripcion}',${precio},${parseInt(cantidadMinima)}, ${parseInt(cantidadMaxima)},${cantidadActual})`,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}


module.exports.updateProduct = function(codigoDeBarras,nombre,descripcion,precio,cantidadMinima, cantidadMaxima, cantidadActual, callback){
    connection.query(`Update producto SET codigoDeBarras = '${codigoDeBarras}', nombre = '${nombre}', descripcion = '${descripcion}', precio =  ${precio},cantidadMinima = ${parseInt(cantidadMinima)}, cantidadMaxima = ${parseInt(cantidadMaxima)}, cantidadActual = ${cantidadActual} WHERE codigoDeBarras = '${codigoDeBarras}'`,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}


module.exports.deleteProduct = function(codigoDeBarras, callback){
    connection.query(`DELETE FROM producto WHERE codigoDeBarras = '${codigoDeBarras}'`,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}


module.exports.selectProduct = function( callback){
    connection.query(`SELECT * FROM producto`,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}
