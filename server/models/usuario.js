

const mongoose = require('mongoose');


const uniqueValidator = require('mongoose-unique-validator');

let enumeraciones = {
    values :['ADMIN_ROLE','USER_ROLE'],
    message : '{VALUE}  no es un rol valido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type:String, 
        required: [true, 'El nombre es obligatorio']
    }, 
    email:{
        type:String, 
        unique: true,
        index:true,
        required: [true, 'El nombre es obligatorio']
        
        
    },     
    password:{
        type:String, 
        required: [true, 'El password es obligatorio']
    },         
    img:{
        type:String, 
        required: false
    },         
    role: {
        type:String, 
        default: 'USER_ROLE', 
        enum : enumeraciones
    }, 
    estado: {
        type: Boolean, 
        default:true
    },
    google: {
        type: Boolean, 
        default:false
    }

});


usuarioSchema.methods.toJSON = function () {

    let user = this
    let userObject = user.toObject()

    delete userObject.password 

    return userObject
}


usuarioSchema.plugin (uniqueValidator, {message: '{PATH} debe de ser unico'})

module.exports = mongoose.model ('usuario', usuarioSchema);