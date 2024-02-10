

// ============================== peer comparison chart ======================

Highcharts.chart('peer_comparison_chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['', '', '', ''],
        title: {
            text: ''
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        y: 20,
        floating: false,
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'The Commercial Bank',
        color: '#009775',
        data: [5.42, 2.46, 1.93, 27.07]
    }, {
        name: 'Masraf Al Rayan',
        color: '#41B6E6',
        data: [6.41, 0.85, 0.98, 26.34]
    }, {
        name: 'Qatar Islamic Bank',
        color: '#0028A0',
        data: [1.53, 2.11, 2.02, 18.92]
    },
    {
        name: 'Qatar National Bank',
        color: '#78BE20',
        data: [2.97, 2.53, 1.28, 20.65]
    }]
});


// ============================== revenue by segment chart ======================
Highcharts.chart('rev_by_seg_chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
            ''
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: false,
                distance: 0
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Corporate Banking',
                    y: 49.3,
                    color: "#009775"
                },
                {
                    name: 'International Banking',
                    y: 44.00,
                    color: '#41B6E6'
                },
                {
                    name: 'Consumer Banking',
                    y: 3.6,
                    color: '#0028A0'
                },
                {
                    name: 'Asset and Wealth Management',
                    y: 3.1,
                    color: '#78BE20'
                }
            ]
        }
    ]
});


// ============================== profit by segment chart ======================

Highcharts.chart('profit_by_seg_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        text:
            '',
        align: 'left'
    },
    xAxis: {
        categories: ['Corporate Banking', 'Consumer Banking', 'Asset and Wealth Management ', 'International Banking'],
        crosshair: true,
        labels: {
            enabled: false // hide the xAxis labels
        },
        accessibility: {
            description: ''
        }
    },

    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        y: 20,
    },
    series: [
        {
            name: '2021',
            data: [9.6, 0.2, 0.8, 2.8]
        },
        {
            name: '2022',
            data: [9.5, 0.6, 1.0, 3.6]
        },
        {
            name: '2023',
            data: [10.2, 0.7, 1.0, 3.7]
        }
    ]
});



// ============================== by_industry_chart chart ======================
Highcharts.chart('by_industry_chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
            ''
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: false,
                distance: 0
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Government and Government Institutions',
                    y: 36,
                    color: "#009775"
                },
                {
                    name: 'Industry',
                    y: 5,
                    color: '#41B6E6'
                },
                {
                    name: 'Commercial',
                    y: 15,
                    color: '#0028A0'
                },
                {
                    name: 'Services',
                    y: 27,
                    color: '#78BE20'
                },
                {
                    name: 'Contractors',
                    y: 1,
                    color: '#75787B'
                },
                {
                    name: 'Real Estate',
                    y: 7,
                    color: '#002E5D'
                },
                {
                    name: 'Consumption',
                    y: 9,
                    color: '#5C068C'
                }
            ]
        }
    ]
});

// ============================== by_geography_chart chart ======================
Highcharts.chart('by_geography_chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
            ''
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: false,
                distance: 0
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Qatar',
                    y: 79,
                    color: "#009775"
                },
                {
                    name: 'Other GCC countries',
                    y: 2,
                    color: '#41B6E6'
                },
                {
                    name: 'Europe',
                    y: 12,
                    color: '#0028A0'
                },
                {
                    name: 'North America',
                    y: 1,
                    color: '#78BE20'
                },
                {
                    name: 'Others',
                    y: 6,
                    color: '#75787B'
                }
            ]
        }
    ]
});




// ============================== funding_profile_chart chart ======================

Highcharts.chart('funding_profile_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['2021', '2022', '2023']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        y: 10,
        floating: false,
        shadow: false,
        enabled: true // Ensure the legend is enabled
    },
    plotOptions: {
        column: {
            stacking: 'percent',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f}%'
            }
        }
    },
    series: [{
        name: 'Due to banks',
        data: [111.4, 142.8, 157.0],
        color: '#009775'
    }, {
        name: 'Customer deposits',
        data: [785.5, 842.3, 857.1],
        color: '#41B6E6'

    }, {
        name: 'Debt securities',
        data: [40.1, 35.2, 36.3],
        color: '#0028A0'

    }, {
        name: 'Other borrowings',
        data: [26.1, 25.6, 29.4],
        color: '#FFC000'

    },
    {
        name: 'Other liabilities',
        data: [29.8, 37.3, 41.0],
        color: '#5B9BD5'

    }]
});


// ============================== regulatory_ratios_chart chart ======================

Highcharts.chart('regulatory_ratios_chart', {
    chart: {
        type: 'column'
    },
   
    xAxis: {
        categories: ["2021","2022", "2023"],
        crosshair: true,
        
        accessibility: {
            description: ''
        }
    },
    title: {
        text: '',
        align: 'left'
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        y: 10,
        floating: false,
        shadow: false,
        enabled: true // Ensure the legend is enabled
    },
    
    series: [
        {
            name: 'LCR',
            data: [147, 104.0, 206],
            color: "#009775"
        },
        {
            name: 'NSFR',
            data: [95.9, 105.7, 105.4],
            color: "#41B6E6"
        }
    ]
});



// ============================== liquid_assets_chart chart ======================

Highcharts.chart('liquid_assets_chart', {
    title: {
        text: ''
    },
    
    yAxis: {
        min: 0
    },
    series: [{
        type: 'line',
        name: '',
        data: [19.06, 21.15, 20.71],
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }]
});







let onshore_bond_tab_wrapper = document.querySelector('#onshore_bond_tab_wrapper');
onshore_bond_tab_wrapper.querySelectorAll('[data-mdb-tab-init]').forEach(value => {
    value.onclick = function () {
        onshore_bond_tab_wrapper.querySelectorAll('[data-mdb-tab-init]').forEach(all => {
            all.classList.remove('btn-primary');
            all.classList.add('btn-outline-primary');
        })
        this.classList.add('btn-primary');
        this.classList.remove('btn-outline-primary');
    }
})


let segment_info_tab_wrapper = document.querySelector('#segment_info_tab_wrapper');
segment_info_tab_wrapper.querySelectorAll('[data-mdb-tab-init]').forEach(value => {
    value.onclick = function () {
        segment_info_tab_wrapper.querySelectorAll('[data-mdb-tab-init]').forEach(all => {
            all.classList.remove('btn-primary');
            all.classList.add('btn-outline-primary');
        })
        this.classList.add('btn-primary');
        this.classList.remove('btn-outline-primary');
    }
})

let loan_book_tab_wrapper = document.querySelector('#loan_book_tab_wrapper');
loan_book_tab_wrapper.querySelectorAll('[data-mdb-tab-init]').forEach(value => {
    value.onclick = function () {
        loan_book_tab_wrapper.querySelectorAll('[data-mdb-tab-init]').forEach(all => {
            all.classList.remove('btn-primary');
            all.classList.add('btn-outline-primary');
        })
        this.classList.add('btn-primary');
        this.classList.remove('btn-outline-primary');
    }
})