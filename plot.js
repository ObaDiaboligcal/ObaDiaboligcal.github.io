function init()
{
// initializes the page with a default plot
var data = [
    {
        x: [1, 2, 3, 4, 5], 
        y: [1, 2, 4, 8, 16]
    }
];

// call thge Plotly.newPlot() funtion to plot the graph
    Plotly.newPlot("plot", data);
}

// call update() function when a chnage occurs
d3.selectAll("#selDataset").on("change", update)

function update()
{
    // use D3 to select the id for the dropdown
    var dropdown = d3.select("#selDataset");

    //use d3 to reference the value from the dropdown
    var value = dropdown.property("value"); // produce either dataset 1 or dataset2


    // set the variables to hold the x and y values in arrays
    var x =[];
    var y =[];

    // check for dataset1
    if(value === 'dataset1')
    {
        x = [1, 2, 3, 4, 5];
        y= [1, 2, 4, 8, 16];
    }
     // check for dataset2
     else if(value === 'dataset2')
     {
         x = [1, 2, 3, 4, 5];
         y= [1, 10, 100, 1000, 10000];
     }

     // use Plotly.restyle() to change the values of the x and the y
     Plotly.restyle("plot", "x", [x]);
     Plotly.restyle("plot", "y", [y]);
}

init(); // calls the init funtion so that the graph is plotted