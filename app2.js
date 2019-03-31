
//Fetch API Kullanımı
//ajax yerine kullanılabilece asenksron veri alıp verme
//ajaxtan daha kolaydır
function getTextFile(){//text dosyasından veri alma
    fetch("example.txt")
    .then(response=>response.text())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}
//getTextFile();

function getJsonFile(){ //json dosyasından veri alma
    fetch("example.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));

}
//getJsonFile();
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response=>response.json())
   // .then(data=>console.log(data))
    .then(data=>{
        console.log(data.rates.TRY);
    })
    .catch(err=>console.log(err));
}
getExternalAPI();
