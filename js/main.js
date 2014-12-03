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
            width: "660px",
            title: "ReadOn School Data",
            actions: [
                "Minimize",
                "Close"
            ],
            close: onClose
        });
    }

    $("#tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });
});

function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Enrollment"
        },
        legend: {
            position: "top"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            name: "Total Enrollment",
            data: [1090, 1085, 995, 1065]
        }, {
            name: "K-3 Enrollment",
            data: [465, 455, 392, 460]
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
            labels: {
                padding: {
                    top: 135
                }
            }
        },
        tooltip: {
            visible: true,
            format: "N0",
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);