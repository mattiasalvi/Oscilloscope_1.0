// This function write all value into a summary box.
function writeSummary() {
	document.getElementById("summaryType").innerHTML = document.getElementById("type").value; // Type.
	document.getElementById("summaryFrequency").innerHTML = document.getElementById("frequency").value; // Frequency.
	document.getElementById("summaryDetune").innerHTML = document.getElementById("detune").value; // Detune.
	if (document.getElementById("startAfter").value == "") // Check if startAfter's field is empty,
		document.getElementById("summaryStartAfter").innerHTML = 0; // If the field is empty, set 0 as value.
	else
		document.getElementById("summaryStartAfter").innerHTML = document.getElementById("startAfter").value; // If the field isn't empty.
}
