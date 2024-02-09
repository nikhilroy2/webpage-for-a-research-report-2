

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
            text: null
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