//your code here
let image=document.getElementById("random");
let number=Math.floor(Math.random()*5)+1;
image.setAttribute("class","img"+number);
let images=document.getElementsByTagName("img");
let reset=document.getElementById("reset");
let reset=document.getElementById("verify");
reset.style.display="none";
verify.style.display="none";
let arr=[];
for(let i=0; i<images.length; i++){
	images[i].addEventListener("click",()=>{
		arr.push(i);
		if(arr.length==1){
			reset.style.display="block";
		}
		if(arr.length==2){
			verify.style.display="block";
		}
	})
}






