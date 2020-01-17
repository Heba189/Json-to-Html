var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/pets-data.json');

ourRequest.onload = function(){
    if(ourRequest.status >=200 &&ourRequest.status < 400){
        var data =JSON.parse(ourRequest.responseText);
       createHtml(data);
    }else{
        console.log("we connected to the server, but it returned on error.");
    }
};
ourRequest.onerror = function(){
    console.log("connection error");
};

ourRequest.send();

function createHtml(petsData){
    // console.log("testing from our function");
    // console.log(petsData);
    var rawTemplate =document.getElementById("petsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHtml = compiledTemplate(petsData);

    var petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = ourGeneratedHtml;

}