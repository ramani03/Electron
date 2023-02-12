const apid={
    key:"178171b077a308ee9165227887083868",
    linku:"https://api.openweathermap.org/data/2.5/weather"

}
//Making the search bar work
const search=document.getElementById('inbox');
//on pressing enter by user
search.addEventListener('keypress',sefunc);
function sefunc(event){
    if(event.keyCode==13){
console.log(search.value);
getinfowe(search.value);
document.querySelector('.content').style.display='block';
}
}
//extract weather info
function getinfowe( cityname){
    fetch(`${apid.linku}?q=${cityname}&&appid=${apid.key}&units=metric`)
    .then(weinfor=>{
      return  weinfor.json();
    })
    //show the weather info
    .then(showtheweather)
    }
    function showtheweather(wee){
        console.log(wee);
        if(wee.cod=='404')
        {
            city.innerHTML=`--ERROR--`;
            temp.innerHTML=`-?-`;
            minmax.innerHTML=`Try Again!!!`
            info.innerHTML=' ';
           // pic.innerHTML=`<img src="er.png" width="70x" height="90px"/>`;
            date.innerHTML=`Enter a Valid Name`;
            document.body.style.backgroundImage='url(https://t4.ftcdn.net/jpg/03/03/40/19/240_F_303401956_ufTeSp9EX62zQnJnbed9Q0kEgqaKKL44.jpg)'
            
        }
        else{
        let tdate=document.getElementById('date');
        let td=new Date();
        tdate.innerText=changedate(td);
       let city=document.getElementById('city');
        city.innerText=`${wee.name},${wee.sys.country}`;
        let tempo=document.getElementById('temp');
        tempo.innerHTML=`${Math.round(wee.main.temp)}&deg;C`
        let mt=document.getElementById('minmax');
        //mt.innerHTML=`${Math.floor(wee.main.temp_min)}&deg;C(min)/${Math.ceil(wee.main.temp_max)}&deg;C(max)`
        mt.innerHTML=`Feels like ${Math.round(wee.main.feels_like)}&deg;C`
        
        let wty=document.getElementById('info');
        wty.innerText=`${wee.weather[0].main}`;
        //let ico=document.getElementById('pic');
        document.body.style.backgroundImage='url(https://cdn.britannica.com/87/192187-050-B42C0C0B/Doppler-radars-signal-echo-target-National-Weather.jpg)'
      // ico.innerHTML=`<img src="${wee.weather[0].icon}.png"/ width="50x" height="70px">`;
       //document.querySelector('pic').src=`${wee.weather[0].icon}`;
        
       
    
    }
    
    }
    //manipulate the date
    function changedate(dt)
    {
        let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
        let year=dt.getFullYear();
        let dat=dt.getDate();
        let mon=months[dt.getMonth()];
        let day=days[dt.getDay()];
        return `${dat} ${mon} ${day} ${year}`
    
    }