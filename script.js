// Project data with names, descriptions, and links
const projectsData = {
    "fullStack": [
        { name: "Social Network", description: "A social networking application designed to connect people from around the world. Users can create profiles, post updates, connect with friends, and engage in discussions on various topics." , link: "xsocialnet.html" },
        { name: "To-Do List Application", description: "A simple and intuitive to-do list application that helps users organize their tasks and manage their daily schedules effectively. Features include task creation, priority setting, and task completion tracking." , link: "todolist.html" },
        //{ name: "Blog Application", description: "A platform for users to create and publish their own blogs. Users can write and share articles on various topics, engage with readers through comments, and customize their blog layouts." , link: "xsocialnet.html" }
    ],
    "excel": [
        { name: "Investment Strategies", description: "An Excel-based tool for analyzing and evaluating different investment strategies. Users can input financial data and perform calculations to assess the potential returns and risks of various investment options.", link: "invstrat.html" },
        { name: "Mutual Fund Assessments", description: "A comprehensive assessment tool for analyzing mutual fund performance and making informed investment decisions. Users can compare fund performance, analyze expense ratios, and track portfolio diversification.", link: "mutfun.html" },
        { name: "Income Tax Calculator", description: "An Excel spreadsheet designed to help users calculate their income tax liability based on their income, deductions, and tax credits. Users can input financial data and instantly calculate their tax obligations.", link: "inctax.html" }
    ],
	"bubble": [
        { name: "RIET Grievance Cell", description: "A web application developed for managing and resolving grievances within an educational institution. Students, faculty, and staff can submit complaints, track their status, and communicate with administrators.",link: "rgc.html" },
        { name: "Eidetic Mirror", description: "An interactive visualization tool that helps users explore and analyze complex data sets. Users can create custom dashboards, visualize data in different formats, and gain insights into key trends and patterns.",link: "eidmir.html" }
    ],
    "unrealUnity": [
        { name: "Shiva", description: "A Cinematic Experience made with Unity, An escape designed on the Shiva Tandav Strotam",link: "shiva.html" },
        { name: "Hubot", description: "A Multiplayer First Person Shooter Game Developed on Unity",link: "hubot.html" },
        { name: "Chakravyuh", description: "A Cinematic Introduction, developed for an Event The Smartwit used to conduct in my college. Developed on Unity, this, Chakravyuh was a game that was actually played on Physical Field rather than being an Online Experience",link: "chakra.html" },
        { name: "Project Stygian", description: "A RPG developed on Unreal Engine 4, which throws us into a fictional world, where we have to fight monsters & spiders and manage our Inventories to survive.",link: "prostyg.html" },
        { name: "Stygian Teaser", description: "The Cinematic Teaser which was developed to Display the capabilities of Project Stygian. The Teaser, developed on Unreal Engine 4 showcased the Protagonists & Antagonists of the game.",link: "stytea.html" }
    ],
    "smartWit": [
        { name: "The Smart-Wit Network", description: "The Smart-Wit Network was an Inter-College Social Platform that allowed all the students to connect with each other. It was developed on the Open Social Network Framework & was heavily inspired by Facebook.",link: "swn.html" },
        { name: "The Smart-Wit Project", description: "The Smart-Wit Project was an E-Cell which I started in college. It was our College's first Entrepreneurship Cell. We taught & mimiced all the intricacies that come along with starting your own company, and based on that we helped start & mentor 13 homegrown college based startups/businesses restricted to college campus (Unregistered Businesses). Apart from those things, we also conducted all the orientation programs, events & workshops for every new batch that took admission in our college.",link: "smartwit.html" },
        { name: "Plethora", description: "Plethora was our College's official Magazine that I started under the Smart-Wit Banner. It was our college's first ever students oriented magazine. It covered various topics & the usual life in the College",link: "plethora.html" }
    ]
    // Add data for other project categories
};

document.addEventListener("DOMContentLoaded", function() {
    // Function to populate projects for each category
    function populateProjects(category, projects) {
        const projectList = document.getElementById(`${category}-list`);
        projects.forEach(project => {
            const listItem = document.createElement("li");
            const projectName = document.createElement("strong");
            const projectDescription = document.createElement("p");
            const projectLink = document.createElement("a");

            projectName.textContent = project.name;
            projectDescription.textContent = project.description;
            projectLink.textContent = "View Details";
            projectLink.href = project.link; // Link to the landing page
            projectLink.classList.add("project-link"); // Add class for styling

            listItem.appendChild(projectName);
            listItem.appendChild(projectDescription);
            listItem.appendChild(projectLink);
            projectList.appendChild(listItem);
        });
    }

    // Populate project details for each category
    populateProjects("full-stack", projectsData.fullStack);
    populateProjects("excel", projectsData.excel);
	populateProjects("bubble", projectsData.bubble);
    populateProjects("unreal-unity", projectsData.unrealUnity);
    populateProjects("smart-wit", projectsData.smartWit);
    populateProjects("finhat", projectsData.finhat);
    populateProjects("green-corridor", projectsData.greenCorridor);
    setupSlideshow(); // Call the function to setup slideshow after populating projects
    // Add calls to populate other project categories

    // Function to setup slideshow (if needed)
    function setupSlideshow() {
        // Add code to setup slideshow if required
    }
});
