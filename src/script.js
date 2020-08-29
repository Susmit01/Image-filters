var img=null; var grayimage= null; var redimage=null; var rainbowimage=null; var canvas;
function upload()
{
  var imgfile=  document.getElementById("image");
  canvas= document.getElementById("c1");
  img= new SimpleImage(imgfile);
  grayimage= new SimpleImage(imgfile);
  redimage= new SimpleImage(imgfile);
  rainbowimage= new SimpleImage(imgfile);
  img.drawTo(canvas);
}
function dored(){
  var output= new SimpleImage(img.getWidth(), img.getHeight());
  for (var pixel of redimage.values()){
   for ( var pixel of redimage.values())
     {
       var avg= (pixel.getRed()+ pixel.getGreen() + pixel.getBlue())/3;
       if(avg<128)
         {
           pixel.setRed(2*avg);
           pixel.setGreen(0);
           pixel.setBlue(0);
         }
       else{
         pixel.setRed(0);
         pixel.setGreen(2*avg-255);
         pixel.setBlue(2*avg-255);
       }
     }
  }
redimage.drawTo(canvas);
}
function dograyscale(){
  var output= new SimpleImage(img.getWidth(), img.getHeight());
  for(var pixel of grayimage.values()){
    var x= pixel.getX();
    var y= pixel.getY();
    var avg= (pixel.getRed()+ pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  grayimage.drawTo(canvas);
}
function dorainbow(){
  var wid= img.getWidth();
  for(var pixel of rainbowimage.values())
    {
      var x= pixel.getX();
      var y= pixel.getY();
      var avg= (pixel.getRed()+ pixel.getGreen() + pixel.getBlue())/3;
      if(x< wid/7)
        { if(avg<128)
        {pixel.setRed(2*avg);
         pixel.setGreen(0);
         pixel.setBlue(0);}
         else {
           pixel.setRed(255);
           pixel.setGreen(2*avg-255);
           pixel.setBlue(2*avg- 255);
         }
        }
      if (x>= wid/7 && x< 2*wid/7)
        {
        if (avg<128)
          {
            pixel.setRed(255);
            pixel.setGreen(0.8*avg);
            pixel.setBlue(0);
          }
          else{
            pixel.setRed(255);
            pixel.setGreen(1.2*avg-50);
            pixel.setBlue(2*avg-255);
          }
        }
      if (x>=2*wid/7 && x<3*wid/7)
       { if(avg<128)
        {pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);}
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
       }
    if(x>=3*wid/7 && x< 4*wid/7)
      {
        if(avg<128)
          {
            pixel.setRed(0);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
          }
        else{
          pixel.setRed(2*avg- 255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }     
      }
   if (x>=4*wid/7 && x<5*wid/7)
     {
       if(avg<128)
         {
           pixel.setRed(0);
           pixel.setGreen(0);
           pixel.setBlue(2*avg);
         }
       else
         {
           pixel.setRed(2*avg-255);
           pixel.setGreen(2*avg-255);
           pixel.setBlue(255);
         }
     }
      if(x>=5*wid/7 && x<6*wid/7)
        {
          if(avg<128){
            pixel.setRed(0.9*avg);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
          }
          else{
            pixel.setRed(1.1*avg-50);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
          }
        }
      if (x>=6*wid/7 && x< 7*wid/7){
            if(avg < 128)
              {
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
              }
          else
            {
              pixel.setRed(0.4*avg + 153);
              pixel.setGreen(2*avg -255);
              pixel.setBlue(0.4*avg + 153);
            }
}
      }
    
  rainbowimage.drawTo(canvas);
}
function resetimage(){
  img.drawTo(canvas);
}