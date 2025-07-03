
document.getElementById("gotomain").addEventListener('click',()=>{
    document.querySelector(".mainbody").scrollIntoView({behavior:"smooth"})
})
document.getElementById("gotoabout").addEventListener('click',()=>{
    document.querySelector(".box1").scrollIntoView({behavior:"smooth"})
})
document.getElementById("gotobox2").addEventListener('click',()=>{
    document.querySelector(".box2").scrollIntoView({behavior:"smooth"})
})
document.getElementById("gotocont").addEventListener('click',()=>{
    document.querySelector(".box3").scrollIntoView({behavior:"smooth"})
})




            
function sendemail(event){
    event.preventDefault()
	var email=document.getElementById("email").value;
	var from_name=document.getElementById("name").value;
	var message=document.getElementById("subject").value;
    var textarea=document.getElementById("textarea").value;

	var templateParams = {
        name:from_name,
        subject:message,
        email:email,
		message: textarea
      };

      emailjs.send('service_l1u25pb', 'template_0qmtnae', templateParams).then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
  })
}



window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".nav").classList.add("show");
  }, 500);
});

// Scroll animation for sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // one-time animation
    }
  });
}, {
  threshold: 0.3,
});

// Observe all hidden sections
document.querySelectorAll('.hidden').forEach(section => {
  observer.observe(section);
});