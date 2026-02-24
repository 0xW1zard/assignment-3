let interviewList = [];
let rejcetList = [];

let total = document.getElementById("total-counter");
let interCount = document.getElementById("inter-counter");
let rejCount = document.getElementById("reject-counter");

const allButton = document.getElementById("all-btn");
const interviewButton = document.getElementById("inter-btn");
const rejcetButton = document.getElementById("rej-btn");

const mainContainer = document.getElementById("main-container");
const filterSection = document.getElementById("filter-section");

function calculateCount() {
  total.innerText = mainContainer.children.length;
  interCount.innerText = interviewList.length;
  rejCount.innerText = rejcetList.length;
}

calculateCount();

function buttonToggle(id) {
  allButton.classList.add("btn-soft");
  interviewButton.classList.add("btn-soft");
  rejcetButton.classList.add("btn-soft");

  const select = document.getElementById(id);
  console.log(select);
  select.classList.remove("btn-soft");
  select.classList.add("btn-primary");

  if(id == 'inter-btn'){
    mainContainer.classList.add('hidden')
    filterSection.classList.remove('hidden')
  }else if(id == 'all-btn'){
    mainContainer.classList.remove('hidden')
    filterSection.classList.add('hidden')
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-success")) {
    const target = event.target.parentNode.parentNode;

    const head = target.querySelector(".head").innerText;
    const subHead = target.querySelector(".sub-head").innerText;
    const deleteIcon = target.querySelector(".delete-icon").innerText;
    const location = target.querySelector(".location").innerText;
    const state = target.querySelector(".state").innerText;
    const dicription = target.querySelector(".disc-p").innerText;
    target.querySelector(".state").innerText = 'Interview'

    const cardInfo = {
      head,
      subHead,
      location,
      state:'Interview',
      dicription
    };

    const itemExist = interviewList.find((item) => item.head == cardInfo.head);

    if (!itemExist) {
      interviewList.push(cardInfo);
    }
    calculateCount();
    renderInterview();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";

  for (let inter of interviewList) {
    console.log(inter);
    let div = document.createElement("div");
    div.className = "bg-white p-6 rounded-xl border border-gray-200 space-y-5";
    div.innerHTML = ` <div class="flex justify-between">
                    <div>
                        <h2 class="head text-primary font-bold">${inter.head}</h2>
                        <h3 class="sub-head text-gray-600">${inter.subHead}</h3>
                    </div>
                    <div
                        class="delete-icon h-9 w-9 flex justify-center items-center border border-gray-200 rounded-full">
                        <i class="fa-regular fa-trash-can text-gray-600"></i>
                    </div>
                </div>
                <p class="location text-gray-500">${inter.location}</p>

                <h3 class="state p-3 bg-blue-50 w-fit rounded-md text-blue-800 font-medium">${inter.state}</h3>

                <p class="disc-p text-gray-700">${inter.dicription}</p>

                <div class="space-x-3">
                    <button class="btn btn-outline btn-success">interview</button>
                    <button class="btn btn-outline btn-error">Rejected</button>
                </div>`;

                filterSection.appendChild(div)
  }
}
