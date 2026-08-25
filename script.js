const buttons=document.querySelectorAll(".goal-btn");
const overlay=document.getElementById("overlay");
const goal=document.getElementById("goal");
const country=document.getElementById("country");
const score=document.getElementById("score");
let count=0,audio=null,timer;

buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(audio){audio.pause();audio.currentTime=0}
    audio=new Audio("audios/"+btn.dataset.audio);
    audio.play().catch(()=>alert("Não encontrei o áudio: "+btn.dataset.audio+"\n\nConfira se o arquivo está dentro da pasta audios."));
    count++; score.textContent=count;
    buttons.forEach(b=>b.classList.remove("playing"));
    btn.classList.add("playing");
    setTimeout(()=>btn.classList.remove("playing"),650);
    goal.textContent=btn.dataset.goal;
    country.textContent=btn.dataset.country;
    overlay.classList.remove("show"); void overlay.offsetWidth; overlay.classList.add("show");
    clearTimeout(timer); timer=setTimeout(()=>overlay.classList.remove("show"),1000);
  });
});