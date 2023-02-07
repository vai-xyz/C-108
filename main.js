function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://storage.googleapis.com/tm-model/kA4F-80yW/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
 
        img=document.getElementById("alien_1");
        img_1=document.getElementById("alien_2");
        img_2=document.getElementById("alien_3");
        img_3=document.getElementById("alien_4");

        if(results[0].label=="Clap"){
           img.src='aliens-01.gif';
           img_1.src='aliens-02.png';
           img_2.src='aliens-03.png';
           img_3.src='aliens-04.png';
        }
        else if(results[0].label=="Bell"){
            img.src='aliens-01.png';
           img_1.src='aliens-02.gif';
           img_2.src='aliens-03.png';
           img_3.src='aliens-04.png';
        }
        else if(results[0].label=="Snapping"){
            img.src='aliens-01.png';
           img_1.src='aliens-02.png';
           img_2.src='aliens-03.gif';
           img_3.src='aliens-04.png';
        }
        else{
            img.src='aliens-01.png';
            img_1.src='aliens-02.png';
            img_2.src='aliens-03.png';
            img_3.src='aliens-04.gif';
        }
    }
}