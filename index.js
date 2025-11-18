// const width = 600, height = 400;

// const svg = d3.select('#div')
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

// svg.append("path")
// .attr("d", "M50 50 L150 50 L100 100 Z")
// .attr("stroke", "black")
// .attr("fill", "lightblue")
// .attr("stroke-width", 2);

// const svg = d3.select('#treeGraph')
//     .append("svg")
//     .attr("width", 120)
//     .attr("height", 120);

// svg.append("circle")
// .attr("cx", 50)
// .attr("cy", 50)
// .attr("r", 20)
// .style("fill", "orange")
// .on("mouseenter", function(){
//     d3.select(this)
//     .transition()
//     .duration(500)
//     .attr("r", 40)
//     .style("fill", "tomato")
// })
// .on("mouseleave", function(){
//     d3.select(this)
//     .transition()
//     .duration(500)
//     .attr("r", 20)
//     .style("fill", "orange");
// });

// const tooltip = d3.select('#tooltip');

// let root, treeLayout;

// fetch("./data.json")
// .then(response => response.json())
// .then(data => {
//     root = d3.hierarchy(data);
//     console.log("root", root);

//     root.x0 = height / 2;
//     root.y0 = 0;

//     root.children?.forEach(collapse);
//     function collapse(d){
//         if(d.children){
//             d._children = d.children;
//             d._children.forEach(collapse);
//             d.children = null;
//         }
//     }

//     treeLayout = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);
//     renderTree({ d3, root, treeLayout, gNodes, gLinks, durration: 300});
// })