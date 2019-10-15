// Add to cart JS function where number of clicks to "Add to Cart" is register and 
// shows in the cart.
const evolveBtn = document.getElementById("evolve");

let clicks = 0;
const evolveName = document.getElementById('evolution');

evolveBtn.addEventListener("click", function evolve() {
    clicks +=1;
    evolveName.innerText = clicks;
    console.log(clicks);
});


// Validate the email address in the sign-up section.
function validate() {

    const a=document.getElementById("in-email").value;
    const atindex=a.indexOf('@');
    const dotindex=a.lastIndexOf('.');

    if(atindex<=0 || atindex+1 >= dotindex || dotindex+1 >= a.length-1)
        {
            alert("Please enter a valid email");
            return false;
                
        }
        
        event.preventDefault()
        alert("Thanks for subscribing")
        return true;
        } 

// Hold the navigation bar on top of the page even when scrolling down the page.
window.onscroll = function () {myFunction()}

const header = document.getElementById("sticky-header")
const sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
}
    
        