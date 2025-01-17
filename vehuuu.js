document.getElementById("closeButton").addEventListener("click", () => {
    cef.emit("OnCloseVehuu");
});

document.getElementById("spawnButton").addEventListener("click", () => {
    const vehicleId = document.getElementById("vehicleId").value;
    if (vehicleId) {
        cef.emit("OnSpawnVehicle", parseInt(vehicleId));
    }
});
