

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
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
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
        data: [5.42, 2.46, 1.93, 27.07]
    }, {
        name: 'Masraf Al Rayan',
        data: [6.41, 0.85, 0.98, 26.34]
    }, {
        name: 'Qatar Islamic Bank',
        data: [1.53, 2.11, 2.02, 18.92]
    },
    {
        name: 'Qatar National Bank',
        data: [2.97, 2.53, 1.28, 20.65]
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