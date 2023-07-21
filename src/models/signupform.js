const { error } = require("jquery");
const mongoose=require("mongoose");
const validator=require("validator");

const userSchema = mongoose.Schema({
    docName:{
        type:String,
        required:true,
        minLength:3
    },
    // docgender:{
    //     type:String,
    //     require:true,
    //     validate(value){
    //         if(!validator.isEmail(value))
    //         {
    //             throw new Error("Invalid email id");
    //         }
    //     }
    // },
    docmobilenumber:{
        type:Number,
        required:true,
        min:10

    },
    docdegree:{
        type:String,
        required:true,
        minLength:3
    },
    docExperience:{
        type:Number,
        required:true,
        minLength:1
    },
    docspeciality:{
        type:String,
        required:true,
        minLength:3
    },
    docNationality:{
        type:String,
        required:true,
        minLength:3
    },
    doccity:{
        type:String,
        required:true,
        minLength:3
    },
    docclinic:{
        type:String,
        required:true,
        minLength:3
    },
    docsignUpInputEmail1:{
            type:String,
            require:true,
            validate(value){
                if(!validator.isEmail(value))
                {
                    throw new Error("Invalid email id");
                }
            }
    },
    docsignUpInputPassword1:{
        type:String,
        required:true,
        minLength:6
    },
    docsignUpconfirmPassword1:{
        type:String,
        required:true,
        minLength:6
    }

});

//we need a collection

const User= mongoose.model("User",userSchema);
module.exports=User;