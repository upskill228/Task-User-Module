const userStatsElement = document.querySelector("#userStats");
export function renderStatistics(stats) {
    userStatsElement.innerHTML = `
        <h3>Stats</h3>
        <p>Total users: <strong>${stats.total}</strong></p><br>
        <p>Active users: <strong>${stats.percentActive}%</strong></p><br>
        <p>Inactive users: <strong>${stats.percentInactive}%</strong></p>
    `;
}
