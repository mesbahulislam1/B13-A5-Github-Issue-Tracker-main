let cardSection = document.getElementById("cardSection");
let totalCount = document.getElementById("totalCount");

const allBtns = document.getElementById("allBtn");
const openBtns = document.getElementById("openBtn");
const closedBtns = document.getElementById("closedBtn");

let searchInput = document.getElementById("searchInput");

let allIssues = [];
let openList = [];
let closeList = [];


searchInput.addEventListener("input", function(){

    const searchText = searchInput.value.toLowerCase();

    const filteredIssues = allIssues.filter(issue =>
        issue.title.toLowerCase().includes(searchText)
    );

    loadDataDisplay(filteredIssues);

})

function buttonStyle(clicked){
    console.log(clicked)
    allBtns.classList.remove("btn-primary")
    openBtns.classList.remove("btn-primary")
    closedBtns.classList.remove("btn-primary")

    document.getElementById(clicked).classList.add("btn-primary")

    if(clicked === "allBtn"){
        loadDataDisplay(allIssues)
    }

    if(clicked == "openBtn"){
        loadDataDisplay(openList)
    }

    if(clicked === "closedBtn"){
        loadDataDisplay(closeList)
    }

}



async function loadData(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json()
    
    allIssues = data.data;
    openList = allIssues.filter(item=> item.status ==="open")
    closeList = allIssues.filter(item => item.status === "closed")
    loadDataDisplay(allIssues)
}


function loadDataDisplay(dataResived) {
    cardSection.innerHTML = "";

    for(let text of dataResived){
        let colors = text.status === "closed";
        console.log(colors)
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="p-5 rounded-md border-t-4 ${colors?'border-[#A855F7]' : 'border-green-600'} bg-white relative space-y-4">
                    <div class="flex justify-between items-center">
                        <img src="./assets/Open-Status.png" alt="" class="bg-[#CBFADB] p-1 rounded-full">
                        <h2 class="text-[#EF4444] bg-[#EF4444]/10 w-fit px-7 rounded-full">${text.priority}</h2>
                    </div>
                    <div>
                        <h2 class="font-semibold">${text.title}</h2>
                    <p class="text-[#64748B] line-clamp-2">${text.description}</p>
                    </div>

                    <div class="flex  mb-7 flex-wrap gap-2">
                        <p class="text-[#EF4444] bg-[#FEECEC] border-2 text-[11px] uppercase border-[#FECACA] px-5 py-1 rounded-full"><i class="fa-solid fa-bug"></i> Bug</p>
                        <p class="bg-[#FFF8DB] text-[#D97706] border-2 text-[11px] uppercase border-[#FDE68A] px-5 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> help wanted</p>
                    </div>
                    <div class="w-full h-[2px] bg-[#E4E4E7] top-[65%] left-0"></div>
                    <h5 class="text-[#64748B]">#1 by john_doe</h5>
                    <h6 class="text-[#64748B]">1/15/2024</h6>
                </div>
        `;
        cardSection.appendChild(div)
        totalCount.innerText = cardSection.children.length;
    }

}


loadData()



















// function buttonStyle(clicked){

//     allBtns.classList.remove("btn-primary")
//     openBtns.classList.remove("btn-primary")
//     closedBtns.classList.remove("btn-primary")

//     document.getElementById(clicked).classList.add("btn-primary")

//     if(clicked === "allBtn"){
//         CarddisplayShow(allIssues)
//     }

//     if(clicked === "openBtn"){
//         CarddisplayShow(openList)
//     }

//     if(clicked === "closedBtn"){
//         CarddisplayShow(closeList)
//     }

// }


// async function cardDataLoad() {

//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     const data = await res.json()

//     allIssues = data.data;

//     openList = allIssues.filter(issue => issue.status === "open")
//     closeList = allIssues.filter(issue => issue.status === "closed")

//     CarddisplayShow(allIssues)

// }

// function CarddisplayShow(info) {
//     cardSection.innerHTML = "";
//     for(let text of info){
        
//         const div = document.createElement("div")
//         div.className = ''
//         div.innerHTML = `
//         <div class="p-5 rounded-md bg-white relative space-y-4">
//                     <div class="flex justify-between items-center">
//                         <img src="./assets/Open-Status.png" alt="" class="bg-[#CBFADB] p-1 rounded-full">
//                         <h2 class="text-[#EF4444] bg-[#EF4444]/10 w-fit px-7 rounded-full">High</h2>
//                     </div>
//                     <div>
//                         <h2 class="font-semibold">${text.title}</h2>
//                     <p class="text-[#64748B] line-clamp-2">${text.description}</p>
//                     </div>

//                     <div class="flex  mb-7 flex-wrap gap-2">
//                         <p class="text-[#EF4444] bg-[#FEECEC] border-2 text-[11px] uppercase border-[#FECACA] px-5 py-1 rounded-full"><i class="fa-solid fa-bug"></i> Bug</p>
//                         <p class="bg-[#FFF8DB] text-[#D97706] border-2 text-[11px] uppercase border-[#FDE68A] px-5 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> help wanted</p>
//                     </div>
//                     <div class="w-full h-[2px] bg-[#E4E4E7] top-[65%] left-0"></div>
//                     <h5 class="text-[#64748B]">#1 by john_doe</h5>
//                     <h6 class="text-[#64748B]">1/15/2024</h6>
//                 </div>
//         `;
//         cardSection.appendChild(div)
//         totalCount.innerText =cardSection.children.length;
//     }
    
// }


// cardDataLoad()
















