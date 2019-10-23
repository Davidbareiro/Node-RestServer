

//********************
// Puerto
//********************

process.env.PORT = process.env.PORT || 3000;

// mongodb+srv://scott:baradero@cafecrudnodejs-b1g10.mongodb.net/cafe

//mongodb://localhost:27017/cafe



//********************
// Entorno
//********************

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//********************
// BAse de Datos
//********************

let urlDB;

 if (process.env.NODE_ENV === 'dev') {
     urlDB = 'mongodb://localhost:27017/cafe';
     } else
     {
        urlDB= 'mongodb+srv://scott:baradero@cluster0-yyxbi.mongodb.net/cafe'
     }
process.env.urlDB= urlDB;