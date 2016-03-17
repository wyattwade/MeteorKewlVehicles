Cars = new Mongo.Collection ('cars')


if (Meteor.isClient) {


  Template.body.helpers({
    cars: function () {
      
      if (Session.get('showAll')){
        return Cars.find()
      }
      if (Session.get('showColor')){
        return Cars.find({ carColor : "Silver"})
      }
      if (Session.get('showBlack')){
        return Cars.find({ carColor : "Black"})
      }
      if (Session.get('showRed')){
        return Cars.find({ carColor : "Red"})
      }
      if (Session.get('showOrange')){             
        return Cars.find({ carColor : "Orange"})           
      } 
      if (Session.get('showBlue')){
        return Cars.find({ carColor : "Blue"})
      }
      if (Session.get('showSubaru')){
        return Cars.find({})
      }
 //     return Cars.find();
    }
  });
  
  
  

  Template.body.events({
    'submit .carForm': function (event) {
    var carType = event.target.carInputMake.value;
    var carColor = event.target.carInputColor.value;
    var carPrice = event.target.carInputPrice.value;
    var carPicture = event.target.carInputPicture.value;
    var carStyle = event.target.carInputStyle.value;
    Meteor.call('addCar', carType, carColor, carPicture, carStyle, carPrice);
    },
    
    'change .show-all': function(event){
      Session.set('showAll', event.target.checked);
    },
    
    'change .show-silver': function(event){
      Session.set('showSilver', event.target.checked);
    },
    
        'change .show-black': function(event){
      Session.set('showBlack', event.target.checked);
    },
    
        'change .show-red': function(event){
      Session.set('showRed', event.target.checked);
    },
    
        'change .show-orange': function(event){
      Session.set('showOrange', event.target.checked);
    },
    
        'change .show-blue': function(event){
      Session.set('showBlue', event.target.checked);
    },

        'change .Subaru': function(event){
      Session.set('showSubaru', event.target.checked);
    },   
   
   
   
   
   
  });




  Template.carTemplate.helpers({
  carPictureExists : function(){
    if (this.carPicture.length !== 0){
     return true
    }else{
      return false
    }
  },
  
  
  
  
})
  
  
  
  Template.carTemplate.events({
  
         'click .delete': function(){
           Meteor.call("deleteCar", this._id);  //calls deleteResollution method (in meteorproject.js) with the users id as a param. 
       
         }
  });
}








Meteor.methods({ 
  
  addCar: function(carType, carColor, carPicture, carStyle, carPrice){
    Cars.insert({
      carType : carType,
      carColor : carColor,
      carPicture : carPicture,
      carStyle : carStyle,
      carPrice : carPrice,
      date : new Date
    })
  },
  
  deleteCar: function(id){
        Cars.remove(id);
    }
  
  
  
})







 if (Meteor.isServer) {
   Meteor.startup(function () {
  });
}