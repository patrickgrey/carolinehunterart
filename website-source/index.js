(function () {
    const rsFrameToggle = document.querySelector("#rsFrameToggle");
    const rsPaintings = document.querySelector(".rs-paintings");

    rsFrameToggle.addEventListener("change", function (event) {
        console.log("rsFrameToggle: ", rsFrameToggle.checked);
        if (rsFrameToggle.checked) {
            rsPaintings.classList.remove("rs-no-frame")
        } else {
            rsPaintings.classList.add("rs-no-frame")
        }
    })
})();