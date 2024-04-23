//Single element
// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React")
        // const root = ReactDOM.createRoot(document.getElementById("root"))
//         root.render(heading)

// Nested elements

/*
<div id="parent">
    <div id = "child1">
        <h1>From H1 tag</h1>
        <h2> From H2 tag<h2>
    </div>
</div>

*/
const nestedHeading = React.createElement("div",
     {id: "parent"}, 
    [React.createElement("div",
        {id: "child1"}, 
        [React.createElement("h1", {}, "From H1 Tag"),
        React.createElement("h2", {}, "From H2 Tag")
        ]),
        React.createElement("div",
        {id: "child2"}, 
        [React.createElement("h1", {}, "From H1 Tag"),
        React.createElement("h2", {}, "From H2 Tag")
        ])
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(nestedHeading)