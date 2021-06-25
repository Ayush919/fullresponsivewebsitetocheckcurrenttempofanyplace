const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const tempreal = document.getElementById('tempreal');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getinfo = async(event) =>{
    event.preventDefault();//to avoid refresh of form page 
    let cityVal = cityname.value;
    if(cityname === ''){
        city_name.innerText =`pls write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f054e1769cf05c48feb44ce1e6d2a0c7`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

        tempreal.innerText= arrData[0].main.temp;
         
        const tempMood = arrData[0].weather[0].main;

        if(tempMood == 'clear'){
            temp_status.innerHTML="<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";

        }else if(tempMood == 'Clouds'){
            temp_status.innerHTML="<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";
        }else if(tempMood == 'Rain'){
            temp_status.innerHTML="<i class = 'fas fa-rain' style = 'color:#a4b0be;'></i>";
        }else{
            temp_status.innerHTML="<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";

        }
        datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText =`pls write the city name properly`;
            datahide.classList.add('data_hide');
        }
    }

}

submitbtn.addEventListener('click',getinfo);