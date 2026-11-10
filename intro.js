(()=>{'use strict';
 const intro=document.getElementById('perfumeIntro');
 const video=document.getElementById('perfumeIntroVideo');
 const skip=document.getElementById('pularIntroV6');
 const replay=document.getElementById('reverIntroV6');
 const sound=document.getElementById('somIntroV14');
 if(!intro||!video||!skip||!replay){document.body.classList.remove('perfume-intro-active');return;}
 let watchdog=null,revealTimer=null,closeTimer=null,active=false;
 const mobileQuery=window.matchMedia('(max-width: 760px)');
 function clearTimers(){[watchdog,revealTimer,closeTimer].forEach(t=>{if(t)clearTimeout(t)});}
 function selectVideo(){
   const wanted=mobileQuery.matches?video.dataset.mobileSrc:video.dataset.desktopSrc;
   if(!wanted)return;
   if(video.dataset.currentSource!==wanted){
     video.pause();
     video.src=wanted;
     video.dataset.currentSource=wanted;
     video.load();
   }
 }
 function finish(immediate=false){
   if(!active)return;
   active=false;clearTimers();
   intro.setAttribute('aria-hidden','true');
   intro.classList.add('whiteout');
   document.body.classList.remove('perfume-intro-active');
   revealTimer=setTimeout(()=>intro.classList.add('is-revealing'),immediate?40:190);
   closeTimer=setTimeout(()=>{
     intro.style.display='none';
     replay.classList.add('is-visible');
     video.pause();
   },immediate?650:1520);
 }
 function start(){
   clearTimers();active=true;
   intro.style.display='block';
   intro.setAttribute('aria-hidden','false');
   intro.classList.remove('whiteout','is-revealing');
   document.body.classList.add('perfume-intro-active');
   replay.classList.remove('is-visible');
   video.muted=true;
   if(sound)sound.textContent='♪ Ativar som';
   selectVideo();
   try{video.currentTime=0;}catch(e){}
   const playAttempt=video.play();
   if(playAttempt&&typeof playAttempt.catch==='function'){
     playAttempt.catch(()=>finish(true));
   }
   watchdog=setTimeout(()=>finish(false),10000);
 }
 video.addEventListener('ended',()=>finish(false));
 video.addEventListener('error',()=>finish(true));
 skip.addEventListener('click',()=>finish(true));
 replay.addEventListener('click',start);
 if(sound)sound.addEventListener('click',()=>{
   video.muted=!video.muted;
   sound.textContent=video.muted?'♪ Ativar som':'♪ Som ligado';
 });
 document.addEventListener('keydown',e=>{
   if(e.key==='Escape'&&active)finish(true);
 });
 const handleMotion=()=>{
   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
     clearTimers();active=false;intro.style.display='none';
     intro.setAttribute('aria-hidden','true');
     document.body.classList.remove('perfume-intro-active');
     replay.classList.add('is-visible');
   }
 };
 handleMotion();
 if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)start();
 if(mobileQuery.addEventListener)mobileQuery.addEventListener('change',()=>{if(active)selectVideo();});
})();