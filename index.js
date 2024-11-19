const darkMode = () => {
  const darkMode = document.getElementById("dark-mode");
  const lightMode = document.getElementById("light-mode");
  darkMode.style.display = "none";
  lightMode.style.display = "block";
  document.body.style.backgroundColor = "black";
};

const lightMode = () => {
  const darkMode = document.getElementById("dark-mode");
  const lightMode = document.getElementById("light-mode");
  darkMode.style.display = "block";
  lightMode.style.display = "none";
  document.body.style.backgroundColor = "white";
};
