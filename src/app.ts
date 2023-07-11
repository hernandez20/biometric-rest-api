import "dotenv/config"  // Carga las variables de entorno desde el archivo .env
import express from "express" // Importa el framework Express
import cors from "cors" // Importa el middleware CORS
const PORT = process.env.PORT ||3001;  // Obtiene el puerto del sistema o establece el puerto 3001 como predeterminado
const app = express() // Crea una instancia de la aplicación Express
app.use(express.json())  // Configura la aplicación para analizar solicitudes JSON
import db from "./config/mongo"  // Importa el archivo de configuración de la base de datos MongoDB
db().then(()=>console.log('Conexion Ready')) // Conecta con la base de datos y muestra un mensaje en la consola cuando la conexión está lista
import {router} from "./routes";  // Importa el archivo de rutas

app.use(cors({
    origin:'*'
}))  // Configura el middleware CORS para permitir solicitudes de cualquier origen
app.use(router);  // Configura las rutas de la aplicación
app.listen(PORT,() => console.log(`Listo por el puerto ${PORT}`)) // Inicia el servidor y muestra un mensaje en la consola indicando el puerto en el que está escuchando