// Sending a message to start recording
document.getElementById("record").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "startRecording" }, (response) => {
    if (response && response.status === "recording_started") {
      // Recording has started, update UI if needed
    } else {
      // Handle errors
    }
  });
});

// Sending a message to stop recording
function stopRecording() {
  chrome.runtime.sendMessage({ action: "stopRecording" }, (response) => {
    if (response && response.status === "recording_stopped") {
      // Recording has stopped, handle the recorded file if needed
    } else {
      // Handle errors
    }
  });
}
