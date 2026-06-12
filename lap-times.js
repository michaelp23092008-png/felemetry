function loadLapTimes() {

    console.log("FUNCTION RUNNING");
    alert("FUNCTION RUNNING");

    const data = [
        { driver: "Max Verstappen", lap: 91.234, s1: 28.1, s2: 31.2, s3: 32.0 },
        { driver: "Charles Leclerc", lap: 91.400, s1: 28.0, s2: 31.5, s3: 31.9 },
        { driver: "Lewis Hamilton", lap: 91.600, s1: 28.3, s2: 31.4, s3: 31.9 },
        { driver: "Lando Norris", lap: 91.700, s1: 28.4, s2: 31.6, s3: 31.7 }
    ];

    const table = document.getElementById("lapTable");

    if (!table) {
        console.error("lapTable not found");
        return;
    }

    // sort like F1 timing
    data.sort((a, b) => a.lap - b.lap);

    const leaderLap = data[0].lap;

    const bestS1 = Math.min(...data.map(d => d.s1));
    const bestS2 = Math.min(...data.map(d => d.s2));
    const bestS3 = Math.min(...data.map(d => d.s3));

    table.innerHTML = `
        <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Lap Time</th>
            <th>Gap</th>
            <th>S1</th>
            <th>S2</th>
            <th>S3</th>
            <th>Best Lap</th>
        </tr>
    `;

    data.forEach((d, i) => {

        const gap = (d.lap - leaderLap).toFixed(3);
        const gapText = i === 0 ? "LEADER" : `+${gap}`;

        const s1Color = d.s1 === bestS1 ? "green" : "yellow";
        const s2Color = d.s2 === bestS2 ? "green" : "yellow";
        const s3Color = d.s3 === bestS3 ? "green" : "yellow";

        const bestLapMark = i === 0 ? "★" : "";

        const row = document.createElement("tr");

        row.style.transition = "all 0.4s ease";

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${d.driver}</td>
            <td>${d.lap.toFixed(3)}</td>
            <td>${gapText}</td>
            <td style="color:${s1Color}">${d.s1}</td>
            <td style="color:${s2Color}">${d.s2}</td>
            <td style="color:${s3Color}">${d.s3}</td>
            <td>${bestLapMark}</td>
        `;

        table.appendChild(row);
    });
}