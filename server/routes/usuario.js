
const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require ('../models/usuario');
const _ = require('underscore');

const app = express()
 


// app.get('/usuario', function (req, res) {

//     let desde   = req.query.desde  || 0; 
//     let limite  = req.query.limite || 5;

//     desde = Number(desde)
//     limite = Number(limite)

//     Usuario.find({})
//     .skip(desde)
//     .limit(limite)
//     .exec ((err, usuarios) => {

//         if (err) {
//             return res.status (400).json ( 
//                 {
//                 ok:false, 
//                 err
//                 })
//            }

//            res.json ({
//                ok:true,
//                usuarios, 
//                cuantos: usuarios.length
//            })
//     })
  
//   })


app.get('/usuario', function (req, res) {

    let desde   = req.query.desde  || 0; 
    let limite  = req.query.limite || 5;

    desde = Number(desde)
    limite = Number(limite)

    Usuario.find({estado: true})
    .skip(desde)
    .limit(limite)
    .exec ((err, usuarios) => {

        if (err) {
            return res.status (400).json ( 
                {
                ok:false, 
                err
                })
           }

        Usuario.countDocuments ({estado: true}, (err, valor) => {

            res.json ({
                ok:true,
                usuarios, 
                cuantos: valor
            })

            
        })

    })
  
  })

  
  app.post('/usuario', function (req, res) {
      
      let body = req.body; 

      let usuario = new Usuario ({
          nombre: body.nombre, 
          email: body.email, 
          password: bcrypt.hashSync (  body.password, 10)  ,
          role: body.role          
      })

      console.log (body);

      usuario.save((err, usuarioDB) => {

          if (err) {
              return res.status (400).json ( 
                  {
                  ok:false, 
                  err
              })
             }

            // usuarioDB.password = null;

             res.json ({
                 ok: true, 
                 usuario:usuarioDB
             })
      });

  
    //   if (body.nombre === undefined) {
    //       res.status (400).json ({
    //           ok:false, 
    //           mensaje: "El nombre es obligatorioxxx"
    //       })
    //   } else {
    //       res.json ({
    //           persona: body
    //       })
    //   }
    })
  
  
  app.put('/usuario/:id', function (req, res) {
     
      let id = req.params.id;
      //let body = req.body;

      let body = _.pick ( req.body, ['nombre',    'email',    'img',    'role',    'estado'] )

      
    

      Usuario.findByIdAndUpdate (id, body ,{runValidators: true,new: true},  (err, usuarioDB ) =>{

        if (err) {

            console.log(err)    

            return res.status (400).json ( 
                {
                ok:false, 
                err
                })
           }

        res.json ({
                ok:true, 
                usuario: usuarioDB
            })
         });
  
        //  res.json ({
        //     id
        // })
    
  
    })
  
  


app.delete('/usuario/:id', function (req, res) {

        let id = req.params.id;
        //let body = req.body;
  
        let body = _.pick ( req.body, [  'estado'] )
  
  
        Usuario.findByIdAndUpdate (id, body ,{runValidators: true,new: true},  (err, usuarioDB ) =>{
  
          if (err) {
  
              console.log(err)    
  
              return res.status (400).json ( 
                  {
                  ok:false, 
                  err
                  })
             }
  
          res.json ({
                  ok:true, 
                  usuario: usuarioDB
              })
           });
 
        });



 module.exports =app;



 
//   app.delete('/usuario/:id', function (req, res) {

//     let id = req.params.id;

//     Usuario.findByIdAndRemove ( id, (err, usuarioBorrado)  => {

                

//         if (!usuarioBorrado) {
//             return res.status (400).json (  {
//                 ok:false, 
//                 err: {
//                             messaje: 'Usuario no encontrado.'
//                      }
//                 })
//          }
//             if (err) {
//                         return res.status (400).json (  {
//                             ok:false, 
//                             err
//                             })
//                      }
        
             
            
//             res.json ({
//                 ok:true, 
//                 usuario: usuarioBorrado
//             });
//         });
            


//     });
  