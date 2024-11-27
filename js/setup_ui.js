const copy_text = (elem) => {
    if (elem.value != "") {
        navigator.clipboard.writeText(elem.value);
        alert("Copied to clipboard!");
    } else{
        alert("Nothing to copy!");
    }
};

document.querySelector(".copy_text").addEventListener("click", () => {
    copy_text(document.querySelector(".output_text"));
});

output_select.addEventListener("change", () => {
    const selected_option = output_select.value.toLowerCase();
    if (selected_option === "english") {
        output_text.placeholder = "English will appear here... (unsupported characters appear as '#')";
    } else if (selected_option === "international morsecode") {
        output_text.placeholder = "Morsecode will appear here ('/' separates words, spaces separate letters, unsupported characters appear as '#')...";
    }
});

input_select.addEventListener("change", () => {
    const selected_option = input_select.value.toLowerCase();
    if (selected_option === "english") {
        detect_input.placeholder = "Start writing here in english...";
    } else if (selected_option === "international morsecode") {
        detect_input.placeholder = "Start writing here in morsecode (use '/' to separate words, spaces to separate letters)...";
    }
});