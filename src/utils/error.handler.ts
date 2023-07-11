import { Response } from "express"; // Importa el tipo Response de Express
// Función para manejar errores HTTP

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);  // Imprime el error en la consola (si se proporciona)
  res.status(500); // Establece el código de estado de respuesta en 500 (error interno del servidor)
  res.send({ error }); // Envía una respuesta JSON con el mensaje de error
};

export { handleHttp }; // Exporta la función para que pueda ser utilizada por otras partes del código