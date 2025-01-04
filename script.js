const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=delhi&timezone=auto&language=en&units=auto';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '355941d81emsh9bf37c48e52cfd9p1fdceajsn62152a932755',
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};


async function fetchWeather(city) {

	try {
		const response = await fetch(`https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${city}&timezone=auto&language=en&units=auto`, options);
		const result = await response.json();
		console.log(result);
		cityname.innerHTML = city;
		lat.innerHTML = result.lat;
		lon.innerHTML = result.lon;
		summary.innerHTML = result.current.summary;
		temperature.innerHTML = result.current.temperature;
		temperature2.innerHTML = result.current.temperature;
		feels_like.innerHTML = result.current.feels_like;
		speed.innerHTML = result.current.wind.speed;
		windspeed2.innerHTML = result.current.wind.speed;
		humidity.innerHTML = result.current.humidity;
		humidity2.innerHTML = result.current.humidity;
		visibility.innerHTML = result.current.visibility;
		pressure.innerHTML = result.current.pressure;
		
	} catch (error) {
		console.error(error);
	}
};

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	fetchWeather(city.value);
});
fetchWeather("delhi");

async function fetchHyder(){
	try{
	    const response1 = await fetch(`https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=hyderabad&timezone=auto&language=en&units=auto`, options);
		const result1 = await response1.json();
		console.log(result1);
		hytemp.innerHTML=result1.current.temperature;
		hyfeels.innerHTML=result1.current.feels_like;
		hyhumid.innerHTML=result1.current.humidity;
		hyspeed.innerHTML=result1.current.wind.speed;
		hydeg.innerHTML=result1.current.temperature;
		hydew.innerHTML=result1.current.dew_point;
		hysumm.innerHTML=result1.current.summary;
		hyvis.innerHTML=result1.current.visibility;
	}
	catch(error){
		console.error(error)
	}
}


async function fetchChen(){
	try{
	    const response1 = await fetch(`https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=chennai&timezone=auto&language=en&units=auto`, options);
		const result1 = await response1.json();
		console.log(result1);
		chtemp.innerHTML=result1.current.temperature;
		chfeels.innerHTML=result1.current.feels_like;
		chhumid.innerHTML=result1.current.humidity;
		chspeed.innerHTML=result1.current.wind.speed;
		chdeg.innerHTML=result1.current.temperature;
		chdew.innerHTML=result1.current.dew_point;
		chsumm.innerHTML=result1.current.summary;
		chvis.innerHTML=result1.current.visibility;
	}
	catch(error){
		console.error(error)
	}
}


async function fetchMumb(){
	try{
	    const response1 = await fetch(`https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=mumbai&timezone=auto&language=en&units=auto`, options);
		const result1 = await response1.json();
		console.log(result1);
		mbtemp.innerHTML=result1.current.temperature;
		mbfeels.innerHTML=result1.current.feels_like;
		mbhumid.innerHTML=result1.current.humidity;
		mbspeed.innerHTML=result1.current.wind.speed;
		mbdeg.innerHTML=result1.current.temperature;
		mbdew.innerHTML=result1.current.dew_point;
		mbsumm.innerHTML=result1.current.summary;
		mbvis.innerHTML=result1.current.visibility;
	}
	catch(error){
		console.error(error)
	}
}

fetchHyder();
fetchChen();
fetchMumb();


//dropdown list'
Hyderabad.addEventListener("click",()=>{
	fetchWeather("hyderabad");
});
Delhi.addEventListener("click",()=>{
	fetchWeather("delhi");
});

Bangalore.addEventListener("click",()=>{
	fetchWeather("bangalore");
});

contactgmail.addEventListener("click",()=>{
	window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saivikas774@gmail.com", "_blank");
});
linkedinProfile.addEventListener("click",()=>{
	window.open("https://www.linkedin.com/in/saivikas-gujjari", "_blank");
});
GitLink.addEventListener("click",()=>{
	window.open("https://github.com/Vicky99777", "_blank");
});

