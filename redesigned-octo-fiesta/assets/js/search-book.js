const testData = [
    "In Search of Lost Time",
    "Ulysses",
    "Don Quixote",
    "One Hundred Years of Solitude",
    "The Great Gatsby",
    "Moby Dick",
    "War and Peace",
    "Hamlet",
    "Tempest",
    "The Divine Comedy"
]

const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");

const searchBooks = searchText => {
    let matches = testData.filter(book => {
        const rex = new RegExp(`^${searchText}`, "gi");
        return book.match(rex);
    });

    if (searchText.length === 0) {
        matches = [];
    }

    outputHTML(matches);
};

// Show result in HTML
const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
            <div class="list-group-item js__result" style="min-height: 2rem;">
                <p class="d-block m-auto h-100" style="line-height: 2rem">${match}</p>
            </div>
        `
        )
            .join("");
        matchList.innerHTML = html;
    }
    else {
        matchList.innerHTML = "";
    }
};

// Choose result
const selectResult = event => {
    const selected = event.target.closest(".js__result").children[0];
    const searchValue = selected.innerHTML;
    search.value = searchValue;
    searchBooks(search.value);
};

// Search input
search.addEventListener("input", () => searchBooks(search.value));

// Load selected result to search box
matchList.addEventListener("click", event => selectResult(event));