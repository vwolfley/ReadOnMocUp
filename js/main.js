$(document).ready(function() {
    var window = $("#window"),
        undo = $("#undo")
        .bind("click", function() {
            window.data("kendoWindow").open();
            undo.hide();
        });

    var onClose = function() {
        undo.show();
    }

    if (!window.data("kendoWindow")) {
        window.kendoWindow({
            width: "665px",
            title: "ReadOn School Data",
            actions: [
                "Minimize",
                "Close"
            ],
            close: onClose
        });
    }

    $("#mainTabStrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });

    $("#subTabStrip1").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });
    $("#subTabStrip2").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });
    $("#subTabStrip3").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });
    $("#subTabStrip4").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });
    $("#subTabStrip5").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });

    // document bindings
    // $("#schoolsTab").bind("views/school.html");

});

function enrollmentChart() {
    enrollmentChartObj = $("#enrollmentChartArea");

    var enrollChart1 = enrollmentChartObj.kendoChart({
        title: {
            text: "Student Enrollment"
        },
        theme: "black",
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            type: "column",
            name: "Total Enrollment",
            data: [1090, 1085, 995, 1065]
        }, {
            type: "line",
            name: "K-3 Enrollment",
            data: [465, 455, 392, 460],
            color: "#a6d022",
            width: 10
        }],
        valueAxis: {
            labels: {
                format: "{0:N0}"
            },
            line: {
                visible: false
            },
            axisCrossingValue: 0
        },
        categoryAxis: {
            categories: [2010, 2011, 2012, 2013],
            line: {
                visible: false
            },
        },
        tooltip: {
            visible: true,
            // format: "N0",
            template: "#= series.name #: #= kendo.format('{0:N0}', value) #"
        }
    });
}

$(document).ready(enrollmentChart);


function studentDemoChart() {
    studentDemoChartObj = $("#studentDemoChartArea");

    var studentDemoChart1 = studentDemoChartObj.kendoChart({
        title: {
            position: "top",
            text: "Current Student Demographics"
        },
        theme: "black",
        legend: {
            visible: false
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category # \n #= kendo.format('{0:N0}', value) #"
            }
        },
        seriesColors: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#FFFF99", "#FFFF33", "#DE77AE", "#C51B7D", "#D77F4E", "#87441F", "#9BA6B1", "#5A6773"],
        series: [{
            type: "pie",
            startAngle: 150,
            data: [{
                category: "White",
                value: 414
            }, {
                category: "African American",
                value: 35
            }, {
                category: "Asian",
                value: 36
            }, {
                category: "Hispanic",
                value: 188
            }, {
                category: "American Indian",
                value: 6
            }, {
                category: "Pacific Islander",
                value: 4
            }, {
                category: "Two or More Races",
                value: 8
            }, {
                category: "Not Specified",
                value: 0
            }]
        }],
        tooltip: {
            visible: true,
            template: "#= category #: #= kendo.format('{0:N0}', value) #"
            // format: "{0:N0}"
        }
    });
}

$(document).ready(studentDemoChart);

$(document).ready(function() {

    schoolInfoGridObj = $("#infoGridArea");

    var newGrid = schoolInfoGridObj.kendoGrid({
        dataSource: {
            data: appConfig.schoolData2
        },
        selectable: true,
        sortable: true,
        scrollable: true,
        resizable: false,
        columnMenu: false,
        columns: [{
            field: "title",
            title: "Info",
            width: 100
        }, {
            field: "info",
            title: "School Info",
            width: 100
        }]
    });
});
// Census Grid Data
$(document).ready(function() {

    censusInfoGridObj = $("#censusGridArea");

    var newGrid = censusInfoGridObj.kendoGrid({
        dataSource: {
            data: appConfig.litchfieldCensusData
        },
        selectable: true,
        sortable: true,
        scrollable: true,
        resizable: false,
        columnMenu: false,
        columns: [{
            field: "type",
            title: "Census Field",
            width: 100,
        }, {
            field: "value",
            title: "Census Value",
            width: 100,
            format: "{0:n0}",
            attributes: {
                "class": "kendoGridCenter"
            }
        }]
    });
});

function studentTestsChart() {

    testInfoChartObj = $("#aimsChartArea");

    var testChart1 = testInfoChartObj.kendoChart({
        title: {
            text: "3rd Grade AIMS Test Scores"
        },
        theme: "black",
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "line",
            style: "smooth"
        },
        series: [{
            name: "Reading",
            data: [472, 475, 478, 489, 474, 476]
        }, {
            name: "Math",
            data: [459, 381, 390, 400, 392, 396]
        }, {
            name: "Writing",
            data: [555, 563, 511, 508, 518, 519]
        }],
        valueAxis: {
            labels: {
                format: "{0:n0}"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0:n0}",
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(studentTestsChart);

function studentTestsAltChart() {

    testInfoChartObj = $("#aimsAltChartArea");

    var testChart1 = testInfoChartObj.kendoChart({
        title: {
            text: "3rd Grade Reading AIMS Test Scores"
        },
        theme: "black",
        legend: {
            position: "bottom"
        },
        series: [{
            type: "column",
            name: "Reading",
            data: [513, 507, 521, 513, 527, 526]
        }, {
            type: "line",
            width: 5,
            name: "District",
            data: [505, 505, 512, 508, 512, 511],
            color: "#a6d022"
        }, {
            type: "line",
            width: 5,
            name: "State",
            data: [496, 496, 502, 498, 499, 498],
            color: "#ffff00"
        }],
        valueAxis: {
            labels: {
                format: "{0:n0}"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0:n0}",
            template: "#= series.name #: #= value #"
        }
    });
}
$(document).ready(studentTestsAltChart);

// =========================================================================================================>
// District Info
function districtTestsChart() {

    testInfoChartObj = $("#distAIMSChartArea");

    var testChart1 = testInfoChartObj.kendoChart({
        title: {
            text: "District 3rd Grade AIMS Test Scores"
        },
        theme: "black",
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "line",
            style: "smooth"
        },
        series: [{
            name: "Reading",
            data: [0, 462, 469, 468, 464, 468]
        }, {
            name: "Math",
            data: [0, 369, 382, 382, 382, 385]
        // }, {
        //     name: "Writing",
        //     data: [0, 0, 0, 0, 0, 0]
        }],
        valueAxis: {
            labels: {
                format: "{0:n0}"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0:n0}",
            template: "#= series.name #: #= value #"
        }
    });
}
$(document).ready(districtTestsChart);

function districtTestsAltChart() {

    testInfoChartObj = $("#distAMISAltChartArea");

    var testChart1 = testInfoChartObj.kendoChart({
        title: {
            text: "District 3rd Grade Reading AIMS Test Scores"
        },
        theme: "black",
        legend: {
            position: "bottom"
        },
        series: [{
            type: "column",
            name: "Reading",
            data: [0, 462, 469, 468, 464, 468]
        }, {
            type: "line",
            width: 5,
            name: "State",
            data: [496, 496, 502, 498, 499, 498],
            color: "#ffff00"
        }],
        valueAxis: {
            labels: {
                format: "{0:n0}"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0:n0}",
            template: "#= series.name #: #= value #"
        }
    });
}
$(document).ready(districtTestsAltChart);