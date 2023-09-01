// const tabs = [
//     {
//         id:1,
//         question:'How To Buy Data?',
//         body:[
//             'Bank payment.',
//             'Online Payment with your ATM card details via Pay stack Payment Gateway.',
//             'Payment with airtime'
//         ]
//     },
// ]
// const tabContainer = document.querySelector('.options')

// tabContainer.appendChild(tabs.map(tab => { return( document.createElement(<div class='option'>
// <div class="questions flex">
// <span> {tab.question}</span>  <i class="fa-solid fa-angle-down"></i> </div>
// </div>))}
    
// ))



const faqsItem = document.querySelectorAll('.option')

faqsItem.forEach(item => {
    const header = item.querySelector('.questions')
    const answers = item.querySelector('.answers')

    header.addEventListener('click',()=>{
        answers.classList.toggle('active')
    
    faqsItem.forEach(accItems => {
        if (accItems !== item) {
        const otherAnswers = accItems.querySelector('.answers')

        otherAnswers.classList.remove('active')
        }
    })
})
})

const menu = document.querySelector('.menu')
const min = document.querySelector('.min')
const navbar = document.querySelector('.navbar')
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('header')


menu.addEventListener('click', ()=>{
    showSidebar()  
  })
  
  function showSidebar(){
      if (navbar.style.display === "block") {
          navbar.style.display = 'none'
          header.style.boxShadow = '1px 1px 10px #3b3b3b';
      } else {
          navbar.style.display = "block"
          header.style.boxShadow = 'none';
      }
      } 

window.onscroll = function() {scroll() };

function scroll() {
    if(document.documentElement.scrollTop > 100) {
        header.classList.add("header-onscroll")
    } else {
        header.classList.remove("header-onscroll")
    }
}

      swal("Hello world!");
      swal("Good job!", "You clicked the button!", "info");