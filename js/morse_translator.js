// global
const detect_input = document.querySelector(".input_text");
const output_text = document.querySelector(".output_text");
const input_select = document.querySelector(".select_lang_in");
const output_select = document.querySelector(".select_lang_out");

const morse_dict = {
    'a': '.-',    'b': '-...',  'c': '-.-.',  'd': '-..',   'e': '.',
    'f': '..-.',  'g': '--.',   'h': '....',  'i': '..',    'j': '.---',
    'k': '-.-',   'l': '.-..',  'm': '--',    'n': '-.',    'o': '---',
    'p': '.--.',  'q': '--.-',  'r': '.-.',   's': '...',   't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',   'x': '-..-',  'y': '-.--',
    'z': '--..',  ' ': '/', 
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', '/': '-..-.', '=': '-...-'
};

const reverse_morse_dict = Object.fromEntries(
    Object.entries(morse_dict).map(([key, value]) => [value, key])
);

const eng_to_morse = (text) => {
    let translated = "";
    for (const char of text.toLowerCase()) {
        translated += morse_dict[char] ? morse_dict[char] + " " : "# ";
    }
    return translated.trim();
};

const morse_to_eng = (text) => {
    const words = text.split(" / ");
    let translated = words.map(word => {
        return word
            .split(" ")
            .map(char => reverse_morse_dict[char] || "#")
            .join("");
    }).join(" ");
    return translated.trim();
};


const check_to_translate = () => {
    const input_text = detect_input.value.trim();
    const from_lang = input_select.value.toLowerCase();
    const to_lang = output_select.value.toLowerCase();

    if (from_lang === "english" && to_lang === "international morsecode") {
        output_text.value = eng_to_morse(input_text);
    } else if (from_lang === "international morsecode" && to_lang === "english") {
        output_text.value = morse_to_eng(input_text);
    } else if (from_lang === "english" && to_lang === "english"){
        output_text.value = input_text;
    } else {
        output_text.value = "This bug is great. Please use this the way its meant to be used. :)";
    }
}

detect_input.addEventListener("input", check_to_translate);