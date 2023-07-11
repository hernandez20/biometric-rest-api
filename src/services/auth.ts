import { Auth } from "../interfaces/auth.interface";  // Importa la interfaz de autenticación
import { User } from "../interfaces/user.interface";  // Importa la interfaz de usuario

import UserModel from "../models/user"; // Importa el modelo de usuario
import { encrypt, verified } from "../utils/bcrypt.handle"; // Importa las funciones de cifrado y verificación de contraseñas
import { generateToken } from "../utils/jwt.handle"; // Importa la función para generar tokens JWT
// Función para registrar un nuevo usuario

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email }); // Verifica si ya existe un usuario con el mismo correo electrónico
  if (checkIs) return "ALREADY_USER"; // Si existe, devuelve un mensaje de error
  const passHash = await encrypt(password);  // Cifra la contraseña proporcionada
  const registerNewUser = await UserModel.create({ // Crea un nuevo usuario en la base de datos con los datos proporcionados
    email,
    password: passHash,
    name,
  });
  return registerNewUser; // Devuelve el usuario recién creado
};
// Función para iniciar sesión de un usuario existente

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email }); // Busca al usuario en la base de datos por correo electrónico
  if (!checkIs) return "NOT_FOUND_USER"; // Si no existe, devuelve un mensaje de error

  const passwordHash = checkIs.password;   // Obtiene la contraseña cifrada del usuario
  const isCorrect = await verified(password, passwordHash); // Verifica si la contraseña proporcionada es correcta
 
  if (!isCorrect) return "PASSWORD_INCORRECT"; // Si la contraseña no es correcta, devuelve un mensaje de error

  const token = generateToken(checkIs.email); // Genera un nuevo token JWT para el usuario
  const data = {
    token,
    user: checkIs,
  };
  return data; // Devuelve el token JWT y los datos del usuario
};

export { registerNewUser, loginUser };  // Exporta las funciones para que puedan ser utilizadas por otras partes del código