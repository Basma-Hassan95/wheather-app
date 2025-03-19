// Wheather app


let temperature = +prompt("Enter the Temperature: ")

if (temperature >= 0 && temperature < 10) {

    document.write('<h1 style="text-align:center; color:orange;">Cold Weather</h1> <video src="./img/cold_video.mp4" controls autoplay muted style="display:block; margin:0 auto; width:600px;"></video>');

} else if(temperature >=10 && temperature <= 20){

    document.write('<h1 style="text-align:center; color:orange;">Partly Sunny</h1> <video src="./img/partly_sunny.mp4" controls autoplay muted style="display:block; margin:0 auto; width:600px;"></video>');
}else if(temperature > 20 && temperature <= 30){

    document.write('<h1 style="text-align:center; color:orange;">Hot Weather</h1> <video src="./img/hot.mp4" controls autoplay muted style="display:block; margin:0 auto; width:600px;"></video>');
}else{

    document.write('<h1 style="text-align:center; color:orange;">Sorry!</h1> <img src="./img/sorry.png" alt="Sorry Image" style="display:block; margin:0 auto; width:500px;">');
}