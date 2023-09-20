
// Función para generar un color aleatorio en formato hexadecimal
const generateRamdomColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log("Color hexadecimal generado: " + color);
    return color;

}

// Función para cambiar el color de fondo del body
const changeBackgroundColor = () => {
    const newColor = generateRamdomColor();
    document.body.style.backgroundColor = newColor;
}

// Agrega un evento de clic al botón
const changeColorBtn = document.getElementById("changeColorBtn");
