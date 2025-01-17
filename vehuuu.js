// Function to close the CEF window
function closeWindow() {
    cef_emit_event("onCloseVevuu");
}

// Function to spawn a vehicle
function spawnVehicle() {
    const vehicleId = document.getElementById("vehicleId").value;
    if (vehicleId) {
        cef_emit_event("onSpawnVehicle", parseInt(vehicleId));
    } else {
        alert("Please enter a valid vehicle ID.");
    }
}
