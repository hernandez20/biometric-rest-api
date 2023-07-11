import {Router} from "express"; // Importa el objeto Router de Express
import {readdirSync} from "fs";  // Importa la función readdirSync del módulo fs (para leer los archivos del directorio)
const PATH_ROUTER =`${__dirname}`  // Obtiene la ruta del directorio actual
const router = Router(); // Crea un nuevo objeto Router de Express
// Función para limpiar el nombre del archivo (elimina la extensión)

const cleanFileName =(fileName:string)=>{
    const file= fileName.split('.').shift()
   
    return file
}
// Lee los archivos del directorio actual y filtra los que no se llamen "index"
readdirSync(PATH_ROUTER).filter((fileName)=>{
    
    const cleanName = cleanFileName(fileName)

    if (cleanName !== "index"){
        console.log(cleanFileName(fileName) )        // Importa el módulo de enrutamiento correspondiente y lo agrega al router principal de Express

        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
          });


       
    }

})
export {router} // Exporta el router para que pueda ser utilizado por otras partes del código.