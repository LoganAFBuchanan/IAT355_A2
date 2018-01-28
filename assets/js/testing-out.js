//Adapted from procesData.js from lecture 4

   // use local file
   var url ="./assets/data/beers.csv";

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


     console.log(" The number of Ale Beers is "+countCannon);



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
