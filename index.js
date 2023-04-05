const table = document.getElementById('ticker-table');

fetch('https://server-umber-zeta.vercel.app/top10ticker')
  .then(response => response.json())
  .then(data => {
    data.result.forEach((ticker, index) => {
      const row = table.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${ticker.name}</td>
        <td>${ticker.last}</td>
        <td>${ticker.buy}</td>
        <td>${ticker.sell}</td>
        <td>${ticker.volume}</td>
        <td>${ticker.base_unit}</td>
      `;
    });
  })
  .catch(error => {
    console.error(error);
  });


