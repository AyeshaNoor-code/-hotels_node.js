const mongoose =require('mongoose');
const menuItemsSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
taste:{
type:String,
enum:['sweet', 'sour', 'spicy']
},
is_drink:{
    type:Boolean,
    default:false
},
ingredients:{
type:[String],
default:[]
},
num_sales:{
    default:0,
    type:Number
}

})
const menuItems= mongoose.model('menuItems', menuItemsSchema);
module.exports=menuItems;