function isTouching(s1,s2){
    if (s1.x - s2.x <= s1.width/2 + s2.width/2 && 
      s2.x - s1.x <= s1.width/2 + s2.width/2 && 
      s1.y - s2.y <= s1.height/2 + s2.height/2 && 
      s2.y - s1.y <= s1.height/2 + s2.height/2) {
     
        return true;
    }
    else{
      return false;
    }
  }
  
  function bounceOff(l1,l2){
    if (l1.y - l2.y <= l1.height/2 + l2.height/2 && 
        l2.y - l1.y <= l1.height/2 + l2.height/2 ) {
        l1.velocityY = l1.velocityY * -1;
        l2.velocityY = l2.velocityY * -1;
      }

      if (l1.x - l2.x <= l1.width/2 + l2.width/2 && 
        l2.x - l1.x <= l1.width/2 + l2.width/2 ) {
        l1.velocityX = l1.velocityX * -1;
        l2.velocityX = l2.velocityX * -1;
      }

  }