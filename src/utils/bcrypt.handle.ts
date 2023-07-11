import { hash, compare } from "bcryptjs"; // Importa las funciones de hash y comparación de contraseñas de bcryptjs

// Función para cifrar una contraseña

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);// Se cifra la contraseña con un factor de costo (cost factor) de 8 (lo que aumenta la seguridad)
  return passwordHash;   // Se devuelve la contraseña cifrada
};
// Función para verificar si una contraseña es correcta

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash); // Se compara la contraseña proporcionada con la contraseña cifrada almacenada en la base de datos
  return isCorrect;  // Se devuelve un valor booleano indicando si la contraseña es correcta o no
};

export { encrypt, verified };  // Se exportan las funciones para que puedan ser utilizadas por otras partes del código.