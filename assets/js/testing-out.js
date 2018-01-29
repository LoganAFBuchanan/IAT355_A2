//Adapted from procesData.js from lecture 4

   // use local file
   var url ="http://www.sfu.ca/~labuchan/IAT_355/data/beers.csv";

 d3.csv(url,function (data){

       console.log(" # Beers in dataset:  "+data.length)
     // filter data to get only  price less than 500

     var americanIPA= data.filter(function (d){

         return (d.style == "American IPA")
     });

        console.log(" # American IPAs:  " +americanIPA.length)
        console.log(americanIPA[0]);

     var highABV= data.filter(function (d){

         return (d.abv>=0.05)
     });

     console.log(" # high ABV Beers:  " +highABV.length)
     console.log(highABV[0]);

     var countAle=0;

     data.forEach(function (d){

         if (d.name.includes("Ale")){
             countAle++;
         }

     })


     console.log(" The number of Ale Beers is "+countAle);



     // var minPixel=d3.min(data,function (d){
     //         return d['Effective pixels'];
     //     });
     //
     //     var maxDimensions=d3.max(data,function (d){
     //
     //         return d['Dimensions'];
     //
     //
     //     })
     //
     //
     //
     //
     //      console.log("  min effectie pixel . " +minPixel+"  and  max dimension "+maxDimensions) ;



   });

   var findMaxButton = document.getElementById("FindMax");
   var selectedText = document.getElementById("SelectedText");
   var output = document.getElementById("Output");

   var dimension = "";

   function UpdateSelected(update, name){
     selectedText.innerHTML = update;
     dimension = name;
   }

   function UpdateOutput(info){
     output.innerHTML = info;
   }

   document.getElementById("Selector-ID").addEventListener("click", function(){
    UpdateSelected("ID", "id");
   });
   document.getElementById("Selector-ABV").addEventListener("click", function(){
    UpdateSelected("ABV", "abv");
   });
   document.getElementById("Selector-IBU").addEventListener("click", function(){
    UpdateSelected("IBU", "ibu");
   });
   document.getElementById("Selector-Name").addEventListener("click", function(){
    UpdateSelected("Name", "name");
   });
   document.getElementById("Selector-Style").addEventListener("click", function(){
    UpdateSelected("Style", "style");
   });
   document.getElementById("Selector-Brewery").addEventListener("click", function(){
    UpdateSelected("Brewery", "brewery_id");
   });
   document.getElementById("Selector-Ounces").addEventListener("click", function(){
    UpdateSelected("Ounces", "ounces");
   });

   function FindMax(){
     console.log("It's Working (Max)");

     d3.csv(url,function (data){

       //https://stackoverflow.com/questions/30874617/d3-max-didnt-get-the-correct-value
       data.forEach(function(d) {
            d[dimension] = parseFloat(d[dimension]);
        });
       var m=d3.max(data,function (d){
          return d[dimension];
        });

        console.log(m);
        UpdateOutput(m);
     });
   }

   function FindMin(){
     console.log("It's Working (Min)");

     d3.csv(url,function (data){

       //https://stackoverflow.com/questions/30874617/d3-max-didnt-get-the-correct-value
       data.forEach(function(d) {
            d[dimension] = parseFloat(d[dimension]);
        });
       var m=d3.min(data,function (d){
          return d[dimension];
        });

        console.log(m);
        UpdateOutput(m);
     });
   }

   function FindMean(){
     console.log("It's Working (Mean)");

     d3.csv(url,function (data){

       //https://stackoverflow.com/questions/30874617/d3-max-didnt-get-the-correct-value
       data.forEach(function(d) {
            d[dimension] = parseFloat(d[dimension]);
        });
       var m=d3.mean(data,function (d){
          return d[dimension];
        });

        console.log(m);
        UpdateOutput(m);
     });
   }
