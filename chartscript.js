Papa.parse('sleepdata.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {
        const labels = [];
        const values = [];

        results.data.forEach(row => {
            labels.push(row['Person ID']);
            values.push(Number(row['Sleep Duration']));
        });

        new Chart(
            document.getElementById('sleepChart'),
            {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Sleep Duration (hours)',
                        data: values,
                        backgroundColor: '#4e79a7'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Sleep Duration (hours)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Person ID'
                            }
                        }
                    }
                }
            }
        );
    },

    error: function(err) {
        console.error('Failed to load CSV for chart:', err);
    }
});
