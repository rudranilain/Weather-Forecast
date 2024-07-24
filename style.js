async function c(){
    appid='143454aa39bbe3442a890cdbf3f9db36';
    place=document.getElementById("u").value;
    base=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`;
    response = await fetch(base);
    data =  await response.json();
    console.log(data)
    
    t=Math.floor(data.main.temp);
    mit=Math.floor(data.main.temp_min);
    mat=Math.floor(data.main.temp_max);
    w=Math.floor(data.wind.speed);
    h=Math.floor(data.main.humidity);
    d = data.weather[0].main;

    document.getElementById("t").innerHTML=t-273+"°C";
    document.getElementById("mit").innerHTML=mit-273+"°C";
    document.getElementById("mat").innerHTML=mat-273+"°C";
    document.getElementById("w").innerHTML=w;
    document.getElementById("h").innerHTML=h;
    document.getElementById("d").innerHTML=d;

    if(d=="Clear")
    {
        document.getElementById("img").src="clear.png";
    }
    else if(d=="Clouds")
    {
        document.getElementById("img").src="cloudy.png";

    }
    else if(d=="Rain")
    {
      document.getElementById("img").src="rain.png";
    }
}