var keys= document.querySelectorAll('.key');
var whiteKeys= document.querySelectorAll('.white.key');
var blackKeys= document.querySelectorAll('.black.key');

var white=['z','x','c','v','b','n','m'];
var black=['s','d','g','h','j'];

console.log(whiteKeys);
keys.forEach(key=>{
    key.addEventListener('click',()=>playKey(key));
})
document.addEventListener('keydown',e=>{
    if( e.repeat){ return;}
    let keypressed= e.key;
    keypressed= keypressed.toLowerCase();
    console.log(keypressed);
    var index= white.indexOf(keypressed);
    if(index>-1){
        playKey(whiteKeys[index]);
    }
    index= black.indexOf(keypressed);
    if(index>-1){
        playKey(blackKeys[index]);
    }

})
function playKey(temp){
    console.log(temp);
    var audioToBePlayed= document.getElementById(temp.dataset.note);
    audioToBePlayed.currentTime=0;
    audioToBePlayed.play();
    temp.classList.add('animation');
    setTimeout(()=>{
        temp.classList.remove('animation');
    },1000)
    }

