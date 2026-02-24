let jobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "NOT APPLIED" },
    { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "NOT APPLIED" },
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Contract", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "NOT APPLIED" },
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required. ", status: "NOT APPLIED" },
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,00", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "NOT APPLIED" },
    { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "NOT APPLIED" },
    { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects." }
];

let currentTab = "All";


const jobsContainer = document.getElementById("jobs-container");
const emptyState = document.getElementById("empty-state");
const dashTotal = document.getElementById("dash-total");
const dashInterview = document.getElementById("dash-interview");
const dashRejected = document.getElementById("dash-rejected");
const tabCount = document.getElementById("tab-count");


function render() {
   
    dashTotal.innerText = jobs.length;
    dashInterview.innerText = jobs.filter(job => job.status === "Interview").length;
    dashRejected.innerText = jobs.filter(job => job.status === "Rejected").length;

    
    let filteredJobs = jobs;
    if (currentTab !== "All") {
        filteredJobs = jobs.filter(job => job.status === currentTab);
    }

    
    tabCount.innerText = `${filteredJobs.length} jobs`;

    
    if (filteredJobs.length === 0) {
        jobsContainer.classList.add("hidden");
        emptyState.classList.remove("hidden");
        emptyState.classList.add("flex");
    } else {
        jobsContainer.classList.remove("hidden");
        emptyState.classList.add("hidden");
        emptyState.classList.remove("flex");
        
        
        jobsContainer.innerHTML = "";
        filteredJobs.forEach(job => {
            const card = document.createElement("div");
            card.className = "border border-gray-200 rounded-lg p-5 relative hover:shadow-md transition-shadow bg-white";
            
            card.innerHTML = `
                <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
                
                <h3 class="text-lg font-bold text-gray-800">${job.company}</h3>
                <p class="text-sm text-gray-600 font-medium mb-3">${job.position}</p>
                
                <div class="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                    <span><i class="fa-solid fa-location-dot mr-1"></i> ${job.location} • ${job.type} • ${job.salary}</span>
                </div>
                
                <div class="mb-4">
                    <span class="px-2 py-1 text-[10px] font-bold tracking-wider rounded bg-blue-50 text-blue-600 border border-blue-200 uppercase">${job.status}</span>
                </div>
                
                <p class="text-sm text-gray-600 mb-6 leading-relaxed">${job.description}</p>
                
                <div class="flex flex-wrap gap-3">
                    <button onclick="updateStatus(${job.id}, 'Interview')" 
                        class="px-6 py-2 rounded text-xs font-bold transition-colors border 
                        ${job.status === 'Interview' ? 'bg-green-500 text-white border-green-500' : 'bg-transparent text-green-600 border-green-500 hover:bg-green-50'}">
                        INTERVIEW
                    </button>
                    
                    <button onclick="updateStatus(${job.id}, 'Rejected')" 
                        class="px-6 py-2 rounded text-xs font-bold transition-colors border 
                        ${job.status === 'Rejected' ? 'bg-red-500 text-white border-red-500' : 'bg-transparent text-red-500 border-red-500 hover:bg-red-50'}">
                        REJECTED
                    </button>
                </div>
            `;
            jobsContainer.appendChild(card);
        });
    }
}


window.changeTab = function(tabName) {
    currentTab = tabName;
    
   
    const tabs = ['All', 'Interview', 'Rejected'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t.toLowerCase()}`);
        if(t === tabName) {
            btn.classList.replace('bg-transparent', 'bg-blue-600');
            btn.classList.replace('text-gray-500', 'text-white');
            btn.classList.remove('hover:bg-gray-100');
        } else {
            btn.classList.replace('bg-blue-600', 'bg-transparent');
            btn.classList.replace('text-white', 'text-gray-500');
            btn.classList.add('hover:bg-gray-100');
        }
    });

    render();
}


window.updateStatus = function(id, newStatus) {
    const jobIndex = jobs.findIndex(job => job.id === id);
    if (jobIndex !== -1) {
        
        jobs[jobIndex].status = newStatus;
        render();
    }
}


window.deleteJob = function(id) {
    jobs = jobs.filter(job => job.id !== id);
    render();
}

render();