function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // this logic is for adding K or M at last of the view
    function viewCounter(x) {
        if (x < 1000) {
            console.log("its below 1000");
            return x;
        } else if (x >= 1000 && x < 1000000) {
            console.log("its 100k and above");
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
    console.log("type : ", typeof (views))
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
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHaryy", 9812381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #13", "CodeWithHaryy", 1782381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #15", "CodeWithHaryy", 3212381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #18", "CodeWithHaryy", 78542381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1324", "CodeWithHaryy", 232381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #14", "CodeWithHaryy", 9381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #133", "CodeWithHaryy", 8812381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #186", "CodeWithHaryy", 12381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #19", "CodeWithHaryy", 984512381, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #157", "CodeWithHaryy", 3233517881, "4 months", "23:99", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
