//Adapted from procesData.js from lecture 4

var url ="./assets/data/beers.csv";



//Updated text fields for diplaying selected dimensions and outputs of queries
var selectedText = document.getElementById("SelectedText");
var output = document.getElementById("Output");
var sum = document.getElementById("sum");

//Selected Dimension for use with d3 queries
var dimension = "";


function UpdateSelected(update, name){
 selectedText.innerHTML = update;
 dimension = name;
 getSum();
}

function UpdateOutput(info){
 output.innerHTML = info;
}

//Button listeners for each of the selectable dimensions
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

function search() {
  var query = document.getElementById("searchField").value;
  d3.csv(url, function (data) {

      console.log(data[dimension]);
      var results = data[dimension].filter(word => word == query);
      UpdateOutput(results.length);
  });
}

function getSum() {
  var sum;

  d3.csv(url, function (data) {
    console.log(dimension);
    if (dimension == "abv"
      || dimension == "ibu"
      || dimension == "ounces") {
        data.forEach(function(d) {
          d[dimension] = parseFloat(d[dimension]);
        });
      sum = d3.sum(data, function(d) {
        return d[dimension];
      });
    } else {
      sum = "Data not quantitative -- sum not applicable";
    }
    updateSum(sum);
  });
}

function updateSum(info) {
  sum.innerHTML = info;
}

function FindMax(){
 console.log("It's Working (Max)");

 d3.csv(url,function (data){

   //https://stackoverflow.com/questions/30874617/d3-max-didnt-get-the-correct-value
   data.forEach(function(d) {
     //Need to parse float so that the max function doesn't order based on string value
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
     //Need to parse float so that the max function doesn't order based on string value
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
     //Need to parse float so that the max function doesn't order based on string value
        d[dimension] = parseFloat(d[dimension]);
    });
   var m=d3.mean(data,function (d){
      return d[dimension];
    });

    console.log(m);
    UpdateOutput(m);
 });
}
