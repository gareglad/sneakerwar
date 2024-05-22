$(document).ready(function () {

    const audio = new Audio("https://stream.mubert.com/b2b/v2?playlist=6.4.2&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjIyMzcyMDYxLjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.afa86d1422e4128b8f149c9e3927db5e5b6d0f408caecc3b793fe30d7f09b160");
    //const audio = document.getElementById("audio");
    document.getElementById('audio').muted = false
    
    let playing = false;
    $('#play').click(function() {
        if(playing){
            audio.pause();
            playing = false;
            $('.boombox-button').removeClass('boombox-button-playing');
        }else{
            playing = true;
            audio.play();
            $('.boombox-button').addClass('boombox-button-playing');

        } 
    });

});