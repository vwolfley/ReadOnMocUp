var appConfig = new function() {

    this.schoolData = [{
        school: "Litchfield",
        type: "public",
        gradeLevel: "KG-8",
        district: "Litchfield Elementary",
        titleI: "No",
        letterGrade: "A",
        freeReduced: "",
        totalEnroll: "",
        k3Enroll: ""
    }, {
        school: "Bonita",
        type: "public",
        gradeLevel: "KG-8",
        district: "Bonita Elementary",
        titleI: "Yes",
        letterGrade: "B",
        freeReduced: "",
        totalEnroll: "",
        k3Enroll: ""
    }];

    this.schoolData2 = [{
        title: "School",
        info: "Litchfield Elementary"
    }, {
        title: "School Type",
        info: "Public"
    }, {
        title: "Grade Levels",
        info: "KG-8"
    }, {
        title: "District",
        info: "Litchfield Elementary School District"
    }, {
        title: "Title I",
        info: "No"
    }, {
        title: "Letter Grade",
        info: "A"
    }, {
        title: "Total Enrollment",
        info: "1092"
    }, {
        title: "KG-3 Enrollment",
        info: "402"
    }, {
        title: "Percent Free & Reduced",
        info: "35%"
    }, {
        title: "Attendance Rate",
        info: "98%"
    }];

    this.litchfieldCensusData = [{
        type: "Tract",
        value: 061010,
        percent: "-"
    }, {
        type: "Total Population",
        value: 4638,
        percent: "-"
    }, {
        type: "Median Age",
        value: 46,
        percent: "-"
    }, {
        type: "Age Under 5",
        value: 201,
        percent: .051
    }, {
        type: "White Under 5",
        value: 142,
        percent: .002
    }, {
        type: "Black Under 5",
        value: 7,
        percent: .001
    }, {
        type: "Native American Under 5",
        value: 2,
        percent: .0001
    }, {
        type: "Asian Under 5",
        value: 15,
        percent: .0015
    }, {
        type: "Pacific Islander Under 5",
        value: 0,
        percent: 0
    }, {
        type: "Two or More Under 5",
        value: 13,
        percent: .0012
    }, {
        type: "Other Race Under 5",
        value: 22,
        percent: .0013,
        format: "{0:p}"
    }, {
        type: "Median Income",
        value: 97602,
        percent: "-",
        format: "{0:c}"
    }]
};
