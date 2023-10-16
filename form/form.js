const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showPopup();
    });

    function resetForm() {
        surveyForm.reset();
    }

    function showPopup() {
        const formData = new FormData(surveyForm);
        let popupText = "<h2>Form Information</h2>";
        for (const [key, value] of formData.entries()) {
            popupText += `<p><strong>${key}:</strong> ${value}</p>`;
        }
        popupContent.innerHTML = popupText;
        popup.style.display = "flex";
        surveyForm.reset();
    }

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });