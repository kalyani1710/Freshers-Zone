document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const nextButton = document.getElementById('nextBtn');

    dateInput.addEventListener('change', toggleButton);
    timeInput.addEventListener('change', toggleButton);

    function toggleButton() {
        if (dateInput.value && timeInput.value) {
            nextButton.removeAttribute('disabled');
        } else {
            nextButton.setAttribute('disabled', true);
        }
    }

    function toggleVenueOptions() {
        var venueOptions = document.getElementById("venueOptions");
        if (venueOptions.style.display === "none") {
            venueOptions.style.display = "block";
        } else {
            venueOptions.style.display = "none";
        }
    }

    function toggleThemeOptions() {
        var themeOptions = document.getElementById("themeOptions");
        if (themeOptions.style.display === "none") {
            themeOptions.style.display = "block";
        } else {
            themeOptions.style.display = "none";
        }
    }

    function toggleGameOptions() {
        var gameOptions = document.getElementById("gameOptions");
        if (gameOptions.style.display === "none") {
            gameOptions.style.display = "block";
        } else {
            gameOptions.style.display = "none";
        }
    }

    // Package Page Logic
    const packageList = document.getElementById('packageList');
    const nextBtn = document.getElementById('nextBtn');
    let selectedPackage = null;

    packageList.addEventListener('click', (event) => {
        const selectedElement = event.target.closest('li');
        if (selectedElement) {
            packageList.querySelectorAll('li').forEach(item => item.classList.remove('selected'));
            selectedElement.classList.add('selected');
            selectedPackage = selectedElement;
        }
    });

    function goToNextPage() {
        if (selectedPackage !== null) {
            window.location.href = `/package${selectedPackage.getAttribute('data-package')}/`;
        } else {
            alert("Please select a package first.");
        }
    }

});
