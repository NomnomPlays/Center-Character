var text = document.getElementById("inputText").value;
var confirm = document.getElementById("confirmBtn");
var result = document.getElementById("result");
var stats = document.getElementById('stats');

function replaceAt(str, index, newChar) {
    function replacer(origChar, strIndex) {
        if (strIndex === index)
            return newChar;
        else
            return origChar;
    }
    return str.replace(/./g, replacer);
}

function findCenter() {
  text = document.getElementById("inputText").value
  // console.log(text.length % 2);
  if (text.length % 2 == 0) {
    centerChar = text.charAt((text.length / 2) - 1) + text.charAt(text.length / 2);
    centerIndex1 = (text.length / 2) - 1;
    centerIndex2 = text.length / 2;
  } else {
    centerChar = text.charAt(text.length / 2);
    centerIndex1 = text.length / 2;
    centerIndex2 = -1;
  }

  console.log("Information\n-----------\nText: " + text + "\nLength: " + text.length + "\nHalf: " + text.length / 2 + "\nHalf - 0.5: " + ((text.length / 2) - 0.5) + "\nMod: " + text.length % 2 + "\nCenter: " + centerChar + "\nIndex: " + centerIndex1 + ", " + centerIndex2);
  
  
  // console.log(center);

  if (centerIndex2 == -1) {
    result.innerHTML = replaceAt(text, centerIndex1 - 0.5, "[" + centerChar.bold() + "]");
  } else {
    final = replaceAt(text, centerIndex2, "");
    final = replaceAt(final, centerIndex1, "[" + centerChar.bold() + "]");
    result.innerHTML = final;
  }

  stats.innerHTML = "Text: " + text + "<br>Length: " + text.length + "<br>Half: " + text.length / 2 + "<br>Half - 0.5: " + ((text.length / 2) - 0.5) + "<br>Mod: " + text.length % 2 + "<br>Center: " + centerChar + "<br>Index: " + centerIndex1 + ", " + centerIndex2;
}
// console.log(text);

if (theme == 'dark') {
  if (window.location.pathname == '/settings.html') {
    darkBtn.checked = true;
  }
  document.documentElement.classList.remove("light");
  document.documentElement.classList.remove("oled");
  document.documentElement.classList.add("dark");
}

if (theme == 'light') {
  if (window.location.pathname == '/settings.html') {
    lightBtn.checked = true;
  }
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("oled");
  document.documentElement.classList.add("light");
}

if (theme == 'oled') {
  if (window.location.pathname == '/settings.html') {
    oledBtn.checked = true;
  }
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("oled");
}
