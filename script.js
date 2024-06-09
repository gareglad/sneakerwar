$(document).ready(function () {

    //const audio = new Audio("https://stream.mubert.com/b2b/v2?playlist=6.4.2&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjIyMzcyMDYxLjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.afa86d1422e4128b8f149c9e3927db5e5b6d0f408caecc3b793fe30d7f09b160");
    //const audio = document.getElementById("audio");

    var audioElement = document.createElement('audio');

    var ran1 = Math.floor(Math.random() * 8);
    audioElement.currentTime = ran1;

    audioElement.setAttribute('src', 'Trap'+ran1+'.mp3');
    audioElement.setAttribute('loop', 'loop');
    var ran2 = Math.floor(Math.random() * 1500);
    audioElement.currentTime = ran2;

    audioElement.addEventListener("loadstart", function() {
        $('.boombox-button').html('<div class="spinner-border" role="status"><span class="sr-only"></span></div>');
    }, true);
    audioElement.addEventListener("canplay", function() {
        $('.boombox-button').html('<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-boombox-fill" viewBox="0 0 16 16"><path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/><path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></svg>');
    }, true);
    
    audioElement.loadstart = function() {
        //$('.boombox-button').html('<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-boombox-fill" viewBox="0 0 16 16"><path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/><path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></svg>');
    };

    let playing = false;
    $('#play').click(function() {
        if(playing){
            audioElement.pause();
            playing = false;
            $('.boombox-button').removeClass('boombox-button-playing');
        }else{
            playing = true;

            audioElement.addEventListener("loadstart", audio_started);
            function audio_started(){
                $('.boombox-button').html('<div class="spinner-border" role="status"><span class="sr-only"></span></div>');
            }
            //audio.play();

            audioElement.addEventListener("loadstart", function() {
                $('.boombox-button').html('<div class="spinner-border" role="status"><span class="sr-only"></span></div>');
            }, true);


            var ran3 = Math.floor(Math.random() * 8);
            audioElement.setAttribute('src', 'Trap'+ran3+'.mp3');

            var ran4 = Math.floor(Math.random() * 1500);
            audioElement.currentTime = ran4;


            audioElement.play();

            $('.boombox-button').addClass('boombox-button-playing');

        } 
    });

    $('.game-board .name').dblclick(function(){
        setInterval(function(){
            let colors = ['red','blue','green','yellow','orange','purple'];
            let ran = Math.floor(Math.random() * 6);
            let color = colors[ran];
            $('body').css('background-color',color);
        },3000);

    });

});