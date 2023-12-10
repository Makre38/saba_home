button = document.querySelector("#id_btn");
const res_button = document.querySelector("#id_res_btn");
const div  = document.querySelector("#id_div");
const caption = document.querySelector("#id_cap");
const table = document.querySelector("#id_table");

var pos = button.getBoundingClientRect();

var x = pos.left;
var y = pos.top;

document.addEventListener("mousemove", runaway);

button.addEventListener("mousedown", () =>{
	alert("(^^)");
	//table.insertAdjacentHTML('afterend','平沢進、核P-MODELの無料サンプルは<a id="himitsu" rel="noopener noreffer" target="_blank" href = "https://susumuhirasawa.com/free-music/">ここ</a>から</h7>')
});

res_btn.addEventListener("mousedown",reset);


function rand() {
	var rand = Math.random();
	var rand2;
	if(rand<0.5){
		rand2 = -1*rand*100-10;
	}
	else{
		rand2 = (rand-0.5)*100+10;
	}
	return rand2;
}
            
function runaway(event){
	if (x-5 < event.clientX && event.clientX < x + 85 && y-5 < event.clientY && event.clientY < y + 45){
		button.style.top = event.clientY +rand() - 20+ "px";
		button.style.left = event.clientX + rand() -40+ "px";
		button.style.backgroundColor = "red";
		console.log(button.style.backgroundColor);
		pos = button.getBoundingClientRect();
		x = pos.left;
		y = pos.top;
	}
}

function reset(){
	button.style.top = "150px";
	button.style.left = "150px";
	button.style.backgroundColor = "white";
		x = 150;
		y = 150;
}
