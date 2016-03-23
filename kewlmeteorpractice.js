Cars = new Mongo.Collection ('cars')
var colorArray =[] //["Black","Blue","Red","White","Silver","Orange"];
var carArray = []  //["Subaru","Toyota","Aston Martin","BMW"];
var black = 0, blue = 0, red = 0, white = 0, silver = 0, orange = 0, subaru = 0, toyota = 0, astonMartin = 0, bmw;
var colorsChecked = 0;
var carsChecked = 0;
var maximumPrice = 10000000;








   





if (Meteor.isClient) {


//    setTimeout(function() {                   // checks allCars onload
//        $(".show-all").trigger('click');
//    }, 10);





  Template.body.helpers({
    cars: function () {
      
//     if (Session.get('showAll')){
//        return Cars.find()
//      }
      
      

      
     
     if (Session.get('showBlack') && black === 0){ //if black is checked and blacks value is not in the array already
       colorArray.push('Black');
       colorsChecked += 1
       black = 1; //indicate black is in the array
      }else if (Session.get('showBlack') == false){ // if black is not checked
        for (var color in colorArray){
          if (colorArray[color] === "Black"){
              colorArray.splice(color, 1);
              black = 0;
              colorsChecked -= 1

          }
        }
      }
      

      
      
      if (Session.get('showRed') && red === 0){ //if orange is checked
       colorArray.push('Red');
       colorsChecked += 1
       red = 1;
      }else if (Session.get('showRed') == false){ // if black is not checked
        for (var color in colorArray){
          if (colorArray[color] === "Red"){
              colorArray.splice(color, 1);
              red = 0;
              colorsChecked -= 1
          }
        }
    }
      
      
      if (Session.get('showOrange') && orange === 0){ //if orange is checked
       colorArray.push('Orange');
       colorsChecked += 1
       orange = 1;
      }else if (Session.get('showOrange') == false){ // if black is not checked
        for (var color in colorArray){
          if (colorArray[color] === "Orange"){
              colorArray.splice(color, 1);
              orange = 0;
              colorsChecked -= 1
          }
        }
    }
      
      
      if (Session.get('showBlue') && blue === 0){ //if orange is checked
       colorArray.push('Blue');
       colorsChecked += 1
       blue = 1;
      }else if (Session.get('showBlue') == false){ // if black is not checked
        for (var color in colorArray){
          if (colorArray[color] === "Blue"){
              colorArray.splice(color, 1);
              blue = 0;
              colorsChecked -= 1
          }
        }
    } 
    
          if (Session.get('showSilver') && silver === 0){ //if orange is checked
       colorArray.push('Silver');
       colorsChecked += 1
       silver = 1;
      }else if (Session.get('showSilver') == false){ // if black is not checked
        for (var color in colorArray){
          if (colorArray[color] === "Silver"){
              colorArray.splice(color, 1);
              silver = 0;
              colorsChecked -= 1
          }
        }
    }
      
    



          if (Session.get('showSubaru') && subaru === 0){ //if orange is checked
       carArray.push('Subaru');
       carsChecked += 1;
       subaru = 1;
      }else if (Session.get('showSubaru') == false){ // if black is not checked
        for (var car in carArray){
          if (carArray[car] === "Subaru"){
              carArray.splice(car, 1);
              subaru = 0;
              carsChecked -= 1;
          }
        }
    }
    
    
    
              if (Session.get('showBMW') && bmw === 0){ //if orange is checked
       carArray.push('BMW');
       carsChecked += 1;
       bmw = 1;
      }else if (Session.get('showBMW') == false){ // if black is not checked
        for (var car in carArray){
          if (carArray[car] === "BMW"){
              carArray.splice(car, 1);
              bmw = 0;
              carsChecked -= 1;
          }
        }
    }
    
    
    
              if (Session.get('showToyota') && toyota === 0){ //if orange is checked
       carArray.push('Toyota');
       carsChecked += 1;
       toyota = 1;
      }else if (Session.get('showToyota') == false){ // if black is not checked
        for (var car in carArray){
          if (carArray[car] === "Toyota"){
              carArray.splice(car, 1);
              toyota = 0;
              carsChecked -= 1;
          }
        }
    }
    
    
    
              if (Session.get('showAstonMartin') && astonMartin === 0){ //if orange is checked
       carArray.push('Aston Martin');
       carsChecked += 1;
       astonMartin = 1;
      }else if (Session.get('showAstonMartin') == false){ // if black is not checked
        for (var car in carArray){
          if (carArray[car] === "Aston Martin"){
              carArray.splice(car, 1);
              astonMartin = 0;
              carsChecked -= 1;
          }
        }
    }
    
    
        if (Session.get('maxPriceValue')){
          maximumPrice = parseInt($('.max-price').val())
          Session.set('maxPriceValue', false)  // sets maxpricevalue back to false since it can only run again when changing from false to true
        }
    

    
    
    
    
    
    // find methods -------------------------------------------------------
    
      
      
          console.log('colorsChecked - '+ colorsChecked)
          console.log(colorArray)
          console.log(carArray)
          console.log(maximumPrice)
          

// add all cars and colors to starting array, once the first checkbox is checked - that array clears and the single value is inserted 


    if (colorsChecked == 0 && carsChecked == 0){
        return Cars.find({ carColor : {$in: ["Black","Blue","Red","White","Silver","Orange"]}, carType : {$in: ["Subaru","Toyota","Aston Martin","BMW"]} ,  carPrice: { $lte: maximumPrice } })
      }


     else if (colorsChecked == 0){
        return Cars.find({ carColor : {$in: ["Black","Blue","Red","White","Silver","Orange"]}, carType : {$in: carArray} ,  carPrice: { $lte: maximumPrice } })
      }

      else if (carsChecked == 0){
        return Cars.find({ carColor : {$in: colorArray}, carType : {$in: ["Subaru","Toyota","Aston Martin","BMW"]} ,  carPrice: { $lte: maximumPrice } })
      }
            
      else  return Cars.find({ carColor : {$in: colorArray}, carType : {$in: carArray} ,  carPrice: { $lte: maximumPrice } })
            
          }
 
      
    
  }); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  Template.body.events({
    'submit .carForm': function (event) {
    var carType = event.target.carInputMake.value;
    var carColor = event.target.carInputColor.value;
    var carPrice = parseInt(event.target.carInputPrice.value);
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
   
        'change .Aston-Martin': function(event){
      Session.set('showAstonMartin', event.target.checked);
    },   
   
      
        'change .Toyota': function(event){
      Session.set('showToyota', event.target.checked);
    },   
   
        'change .BMW': function(event){
      Session.set('showBMW', event.target.checked);
    },   
   
   
        'change .max-price': function(event){
      // maximumPrice = parseInt($('.max-price').val())
      Session.set('maxPriceValue', true)      
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
      carPrice : carPrice, //store it as a number
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