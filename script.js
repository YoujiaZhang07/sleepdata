Papa.parse('sleepdata.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {
        console.log(results.data);
        console.log(Object.keys(results.data[0] || {}));

        const tbody = document.querySelector('#dataTable tbody');

        results.data.forEach(row => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${row['Person ID']}</td>
                <td>${row['Gender']}</td>
                <td>${row['Age']}</td>
                <td>${row['Sleep Duration']}</td>
                <td>${row['Quality of Sleep']}</td>
                <td>${row['Stress Level']}</td>
            `;

            tbody.appendChild(tr);
        });
    },

    error: function(err) {
        console.error('Failed to load CSV:', err);
    }
});

