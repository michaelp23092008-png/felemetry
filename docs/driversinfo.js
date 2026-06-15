fetch("https://api.jolpi.ca/ergast/f1/current/drivers.json")
  .then(res => res.json())
  .then(data => {

    const drivers = data.MRData.DriverTable.Drivers;

    let html = "<div class='driver-grid'>";

    drivers.forEach(d => {

      // convert last name to lowercase file name
      const lastName = d.familyName.toLowerCase();

      // build image path automatically
      const imgPath = `images/${lastName}.jpg`;

      html += `
        <div class="driver-card">
          <img src="${imgPath}" class="driver-img"
               onerror="this.src='images/default.jpg'">

          <div class="driver-name">
            ${d.givenName} ${d.familyName}
          </div>

          <div class="driver-code">${d.code || ""}</div>
          <div class="driver-info">#${d.permanentNumber || "-"}</div>
          <div class="driver-info">${d.nationality}</div>
        </div>
      `;
    });

    html += "</div>";

    document.getElementById("drivers").innerHTML = html;

  })
  .catch(err => {
    console.log(err);
    document.getElementById("drivers").innerHTML = "Failed to load data.";
  });