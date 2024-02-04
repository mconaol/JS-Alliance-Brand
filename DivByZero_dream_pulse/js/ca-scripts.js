var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};

function toggleColors() {
    
      let whiteRectElements = document.querySelectorAll(".tm-white-rect")
      console.log(whiteRectElements)

      whiteRectElements.forEach(function(element){
        element.classList.remove('tm-white-rect');
        element.classList.add('tm-blue-rect')
      })

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let socialLinks = document.querySelectorAll("nav flex-row tm-social-links")
    socialLinks.style.visibility = "none";
    
};

 function addText() {

   
let introPara1= document.getElementById("intropara1")
introPara1.innerText = "Alliance was founded in 1931 by Albert Daniels."
   

let introPara2 = document.getElementById("intropara2")
introPara2.innerText = "The company is a leader in P.C. Manufacturing"
   

     let aboutpara1 = document.getElementById("aboutpara1")
     aboutpara1.innerText = "We deliver the best service this side of creation"

     
    let aboutpara2 = document.getElementById ("aboutpara2")
    aboutpara2.innerText = "Our motto is satisfaction guaranteed"
    

    let addresspara = document.getElementById("addresspara")
    addresspara.innerText = "1-800-565-5656"

}; 



