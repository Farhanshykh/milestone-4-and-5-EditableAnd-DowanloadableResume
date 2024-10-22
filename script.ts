document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

    // Construct the resume content with contentEditable
    const resumeContent = `
        <h3 contenteditable="true">${name}</h3>
        <p>Email: <span contenteditable="true">${email}</span></p>
        <p>Phone: <span contenteditable="true">${phone}</span></p>
        <h4>Experience</h4>
        <p contenteditable="true">${experience}</p>
    `;

    // Display the resume
    document.getElementById("resumeContent")!.innerHTML = resumeContent;
    document.getElementById("resume")!.classList.remove("hidden");
});

// Download resume functionality
document.getElementById("downloadBtn")?.addEventListener("click", function() {
    const resumeContent = document.getElementById("resumeContent")!.innerHTML;
    const blob = new Blob([resumeContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.html"; // Change to .pdf if you implement PDF downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});