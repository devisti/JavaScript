function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // this logic is for adding K or M at last of the view
    function viewCounter(x) {
        if (x < 1000) {
            console.log("its below 1000");
            return x;
        } else if (x >= 1000 && x < 1000000) {
            console.log("its 1k and above");
            let condition = (x / 1000);
            if (condition % 1 === 0) {
                return condition.toFixed(0) + "K";
            }
            else {
                return condition.toFixed(1) + "K";
            }
        } else if (x >= 1000000 && x < 1000000000) {
            console.log("its 1M and above");
            let condition = (x / 1000000);
            if (condition % 1 === 0) {
                return condition.toFixed(0) + "M";
            }
            else {
                return condition.toFixed(1) + "M";
            }
        } else if (x >= 1000000000) {
            console.log("its 1B and above");
            let condition = (x / 1000000000);
            if (condition % 1 === 0) {
                return condition.toFixed(0) + "B";
            }
            else {
                return condition.toFixed(1) + "B";
            }
        }
    }
    views = viewCounter(views);
    let html = `
        <div class="card">
            <div class="card-cell-1">
                <img src="${thumbnail}" alt="">
                <div class="video-duration">
                    ${duration}
                </div>
            </div>
            <div class="card-cell-2">
                <h3>${title}</h3>
                <p>${cName} . ${views} views . ${monthsOld} ago</p>
            </div>
        </div>
                `;
    let container = document.body.querySelector(".container");
    container.innerHTML += html;
}
// all the new cards are dynamically inserted in the HTML using the createCard function.
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHaryy", 5300000, "1 year", "20:34", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Who got 'Coldplayed'?🫤| Sunday Show", "Sarthak Goswami", 102000, "3 hours", "50:31", "https://i.ytimg.com/vi/oM9JHkKSWcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq5GH8vNjOTfzG-J8A38XU-_qebw");
createCard("Air India Crash: NEW REPORT | Are Pilots To Be Blamed? | Dhruv Rathee", "Dhruv Rathee", 6800000, "1 day", "16:27", "https://i.ytimg.com/vi/TZW6D9jhgb4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSWEfl1WrrpfDabJxom-B2Qbx6Gw");
createCard("Android 16 - Best Android Ever", "Technical Sagar", 43000, "2 months", "9:44", "https://i.ytimg.com/vi/YkEz5L_UeL8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYCVXFZX5h1Y2w8bg-SIN-dQINjQ");
