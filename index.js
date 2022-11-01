function scuberGreetingForFeet(distance){
  let freebie = 'This one is on me!'
  let chargeTwenty = 'That will be twenty bucks.'
  let chargeThirty = 'I will gladly take your thirty bucks.'
  let tooFar = 'No can do.'
  if (distance <= 400){
    return freebie
  } else if (distance <= 2000){
    return chargeTwenty
  } else if (distance <= 2500){
    return chargeThirty
  } else if (distance >=2501){
    return tooFar
  }
}

function ternaryCheckCity(city){
const taxiRange = city === 'NYC'? "Ok, sounds good." : "No go."
return taxiRange
}

function switchOnCharmFromTip(string){ 
 if (string === 'generous'){
  return "Thank you so much."
 }
 if (string === 'not as generous'){
  return "Thank you."
 }
 if  (string === 'thanks for everything'){
  return "Bye."
 }
 }
 