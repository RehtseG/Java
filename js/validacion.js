 conts d=document;
export default funtion contactFormValidations(){
	conts.$form=d.querySelector(".contact-form"),
	$inputs=d.querySelectorAll(".contact-form[required]");
	console.log($inputs);

	$inputs.forEach((input)=>{
	 conts $span =d.createElement("span");
	 $span.id=input.name;
	 $span.textContent =input.title;
	 $span.classList.add("contact-form-error","none");
	 input.insertAdjacentElement("afterent",$span)
	}
);

d.addEventListener("keyup".(e)=>{
	if (e.target.matches(".contact-form[required")) {
		let $input=e.target,
		pattern=$input.pattern||$input.dataset.pattern;
		//console.log($input.pattern);
	if (pattern && $input.value!=="") {
		//console.log("El input tiene patron")
		let regex=new RegExp(pattern);
		return !regex.exec($input.value)
		?d.getElementsByld($input.name).classList.add("is-active")
		:d.getElementsByld($input.name).classList.remove("is-active")
	}
	
	if (!pattern) {
		//console.log("El input no tiene patron")
		return $input.value===""
		?d.getElementsByld($input.name).classList.add("is-active")
		:d.getElementsByld($input.name).classList.remove("is-active")
	
    }
    });
        d.addEventListener("submit".(e)=>{
        e.preventDefault();
        alert("Enviando Formulario");
        const $loader=d.querySelector(".contact-form-loader");
            $response=d.querySelector(".contact-form-response");
        $loader.classList.remove("none");
        setTimeout(()=>{
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();
        
        setTimeout(()=>$response.classList.add("none"),3000); 
            
        })    
           
  
    });


}

