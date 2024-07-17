
const ctx = document.getElementById("myChart");
let chart;

let studentData = [
    {
        year: "2001",
        students: 50
    },
    {
        year: "2002",
        students: 20
    },
    {
        year: "2003",
        students: 30
    },
    {
        year: "2004",
        students: 45
    },
    {
        year: "2005",
        students: 78
    },
    {
        year: "2006",
        students: 60
    },
    {
        year: "2007",
        students: 15
    },
    {
        year: "2008",
        students: 33
    },
    {
        year: "2009",
        students: 45
    },
    {
        year: "2010",
        students: 85
    },
    {
        year: "2011",
        students: 60
    },
    {
        year: "2012",
        students: 75
    },
    {
        year: "2013",
        students: 93
    },
    {
        year: "2014",
        students: 68
    },
    {
        year: "2015",
        students: 77
    },
]

let start = "", end = "";
let filterData = () => {
    start = document.querySelector("#startYear").value;
    end = document.querySelector("#endYear").value;
    let checkStartYear = studentData.some(x => x.year == start);
    let checkEndYear = studentData.some(x => x.year == end);
    if (start == "") {
        alert("Please enter the first year")
    }
    else if (end == "") {
        alert("Please enter the second year")
    }
    else if (!checkStartYear) {
        alert("Enter first year data is not available")
    }

    else if (!checkEndYear) {
        alert("Enter second year data is not available")
    }

    else if (start > end) {
        alert("Please enter the valid year range")
    }
    else {

        chart.destroy();
        let startIndex = studentData.findIndex(x => x.year == start);
        let endIndex = studentData.findIndex(x => x.year == end);
        studentData = studentData.slice(startIndex, endIndex + 1);
        printDetails(studentData);
    }
    document.querySelector("#startYear").value = document.querySelector("#endYear").value = ""
}



let printDetails = (studentData) => {
    let sum = 0;
    let max = studentData[0]["students"];
    let min = studentData[0]["students"];
    for (let i = 0; i < studentData.length; i++) {
        sum += studentData[i]["students"];
        if (studentData[i]["students"] > max) {
            max = studentData[i]["students"];
        }
        if (studentData[i]["students"] < min) {
            min = studentData[i]["students"];
        }
    }
    let average = sum / studentData.length;
    document.querySelector("#sum").textContent = sum;
    document.querySelector("#max").textContent = max;
    document.querySelector("#min").textContent = min;
    document.querySelector("#average").textContent = average;
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: studentData.map((x) => x.year),
            datasets: [
                {
                    label: "Number of Students",
                    data: studentData.map((x) => x.students),

                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 206, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(153, 102, 255)",
                        "rgb(255, 159, 64)",
                        "rgb(199, 199, 199)",
                        "rgb(83, 102, 255)",
                        "rgb(255, 159, 80)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20,
                            family: "Cambria",
                            weight: "bold",

                        }
                    }
                }
            }
        },

    });
}
printDetails(studentData);

