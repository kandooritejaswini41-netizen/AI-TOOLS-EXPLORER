document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("toolsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const toolCount = document.getElementById("toolCount");

// Populate categories
if (categoryFilter) {
    const categories = [...new Set(tools.map(tool => tool.category))];
    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

// Display tools
function displayTools(filteredTools) {
    if (!container) return;

    container.innerHTML = "";
    if (toolCount) {
        toolCount.textContent = filteredTools.length + " AI tools available";
    }

    filteredTools.forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.short}</p>
            <a href="tool.html?id=${tool.id}">Learn More</a>
        `;
        container.appendChild(card);
    });
}

// Filter tools
function filterTools() {
    const searchText = searchInput ? searchInput.value.toLowerCase() : "";
    const selectedCategory = categoryFilter ? categoryFilter.value : "all";

    const filtered = tools.filter(tool => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchText) ||
            tool.category.toLowerCase().includes(searchText) ||
            tool.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" || tool.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayTools(filtered);
}

if (searchInput) searchInput.addEventListener("input", filterTools);
if (categoryFilter) categoryFilter.addEventListener("change", filterTools);

displayTools(tools);

// Tool details page
const params = new URLSearchParams(window.location.search);
const toolId = params.get("id");

if (toolId) {
    const tool = tools.find(t => t.id == toolId);
    const details = document.getElementById("toolDetails");

    if (tool && details) {
        details.innerHTML = `
            <h2>${tool.name}</h2>
            <p><strong>Category:</strong> ${tool.category}</p>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank">Visit Official Website</a>
        `;
    }
}

});