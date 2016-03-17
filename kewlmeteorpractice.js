Cars = new Mongo.Collection ('cars')
var colorArray = [];


if (Meteor.isClient) {














  Template.body.helpers({
    cars: function () {
      
      if (Session.get('showAll')){
        return Cars.find()
      }
      
      if (Session.get('showBlack')){ //if black is checked
       colorArray.push('Black')
        return Cars.find({ carColor : {$in: colorArray} })
      }else{ // if black is not checked
        for (var i=colorArray.length-1; i>=0; i--) {
           if (colorArray[i] === 'Black') {
        colorArray.splice(i, 1);
          }
        }
      }
      
      if (Session.get('showRed')){ //if black is checked
       colorArray.push('Red')
        return Cars.find({ carColor : {$in: colorArray} })
      }else{ // if black is not checked
        for (var i=colorArray.length-1; i>=0; i--) {
           if (colorArray[i] === 'Red') {
        colorArray.splice(i, 1);
          }
        }
      }
      
      
      if (Session.get('showOrange')){ //if black is checked
       colorArray.push('Orange')
        return Cars.find({ carColor : {$in: colorArray} })
      }else{ // if black is not checked
        for (var i=colorArray.length-1; i>=0; i--) {
           if (colorArray[i] === 'Orange') {
        colorArray.splice(i, 1);
        }
      }
    }
      
      
      if (Session.get('showBlue')){ //if black is checked
       colorArray.push('Blue')
        return Cars.find({ carColor : {$in: colorArray} })
      }else{ // if black is not checked
        for (var i=colorArray.length-1; i>=0; i--) {
           if (colorArray[i] === 'Blue') {
        colorArray.splice(i, 1);
        }
      }
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