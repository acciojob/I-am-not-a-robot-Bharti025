//your code here
let image=document.getElementById("random");
let number=Math.floor(Math.random()*5)+1;
image.setAttribute("class","img"+number);
let images=document.getElementsByTagName("img");
let reset=document.getElementById("reset");
let verify=document.getElementById("verify");
let para=document.getElementyId("para");
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
verify.addEventListener("click",()=>{
if(arr[0]==arr[1]){
	para.textContent="You are a human. Congratulations!"
}
else{
	para.textContent="We can't verify you as a human. You selected the non-identical tiles."
}	
})





