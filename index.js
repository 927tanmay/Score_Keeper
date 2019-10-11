var c1=0;
var c2=0;

var button = document.querySelectorAll("button");
var h1=document.querySelector("h1");

var player = document.getElementById("x");
var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var change = document.getElementById("change");
var score=5;
//score=Number(player.value) ;


player.addEventListener("click",
  function()
  {
          change.textContent=player.value;
          score=Number(player.value);
          reset();
});






button[0].addEventListener("click",
        function(){

          if(c1 <score && c2<score){
          c1++;
          p1.textContent=c1;
          if(c1==score)
          p1.classList.add("win");
         }
        });

button[1].addEventListener("click",
                function(){
                  if(c1 <score && c2<score){
                  c2++;
                  p2.textContent=c2;
                  if(c2==score)
                  p2.classList.add("win");
                }
                });

button[2].addEventListener("click",function(){reset();});




        function reset()
          {
            c1=0;
            c2=0;
            p1.textContent=c1;
            p2.textContent=c2;
            p1.classList.remove("win");
            p2.classList.remove("win");

          }
