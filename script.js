var _a, _b;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    // Construct the resume content with contentEditable
    var resumeContent = "\n        <h3 contenteditable=\"true\">".concat(name, "</h3>\n        <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p>Phone: <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h4>Experience</h4>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n    ");
    // Display the resume
    document.getElementById("resumeContent").innerHTML = resumeContent;
    document.getElementById("resume").classList.remove("hidden");
});
// Download resume functionality
(_b = document.getElementById("downloadBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var resumeContent = document.getElementById("resumeContent").innerHTML;
    var blob = new Blob([resumeContent], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "resume.html"; // Change to .pdf if you implement PDF downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
