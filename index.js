let checkBoxValue = document.getElementById("feature-flag");

let textAreaContent = document.querySelector("textarea");


checkBoxValue.addEventListener("change", () => {
    if (checkBoxValue.checked) {
        console.log("checked");
        localStorage.setItem("autosave-data", textAreaContent.value);
        location.reload();

    } else {
        console.log("unchecked");
    }
})

textAreaContent.innerHTML = localStorage.getItem("autosave-data");