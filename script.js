let interviewList = [];
let rejcetList = [];

let total = document.getElementById('total-counter');
let interCount = document.getElementById('inter-counter')
let rejCount = document.getElementById('reject-counter')

const allButton = document.getElementById('all-btn')
const interviewButton = document.getElementById('inter-btn')
const rejcetButton = document.getElementById('rej-btn')

const mainContainer = document.getElementById('main-container');

function calculateCount(){
    total.innerText = mainContainer.children.length;
    interCount.innerText = interviewList.length;
    rejCount.innerText = rejcetList.length;
}

calculateCount();

function buttonToggle(id){
    allButton.classList.add('btn-soft')
    interviewButton.classList.add('btn-soft')
    rejcetButton.classList.add('btn-soft')

    const select = document.getElementById(id)
    console.log(select)
    select.classList.remove('btn-soft')
    select.classList.add('btn-primary')
}

mainContainer.addEventListener('click', function(event){
    const target = event.target.parentNode.parentNode

    const head = target.querySelector('')
    
    console.log(target)
})