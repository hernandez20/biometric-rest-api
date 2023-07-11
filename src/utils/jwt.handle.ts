import { sign, verify } from "jsonwebtoken"; // Importa las funciones de firma y verificación de JSON Web Tokens (JWT)
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"; // Obtiene la clave secreta para firmar y verificar los JWT desde las variables de entorno o establece un valor predeterminado
// Función para generar un JWT a partir de un ID

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  }); // Se firma el JWT con el ID y la clave secreta y se establece una expiración de 2 horas
  return jwt;  // Se devuelve el JWT firmado
};
// Función para verificar un JWT

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET); // Se verifica el JWT utilizando la clave secreta
  return isOk;  // Se devuelve un valor booleano indicando si la verificación fue exitosa
};

export { generateToken, verifyToken }; // Se exportan las funciones para que puedan ser utilizadas por otras partes del código.