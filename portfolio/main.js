const textElement = document.getElementById("text-effect");
const texts = [
  "Hello World! 👋",
  "Hola Mundo! 👋",
  "Bonjour le Monde! 👋",
  "こんにちは世界! 👋",
  "안녕하세요! 👋",
  "你好世界! 👋",
  "¿Segundo Francia? 🥈",
];
let index = 0;

function typeWriter() {
  const text = texts[index];
  let charIndex = 0;

  function typeNextChar() {
    if (charIndex < text.length) {
      textElement.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, 100);
    } else {
      setTimeout(eraseText, 2000);
    }
  }

  function eraseText() {
    if (charIndex >= 0) {
      textElement.innerHTML = text.substr(0, charIndex);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(typeWriter, 1000);
    }
  }

  typeNextChar();
}

typeWriter();