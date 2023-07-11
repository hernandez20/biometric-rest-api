import { Biometric } from "../interfaces/biometric.interface"; // Importa la interfaz de biometría
import BiometricModel  from "../models/biometric"; // Importa el modelo de biometría
// Función para insertar un nuevo registro de biometría

const insertData = async (item: Biometric) => {
  const responseInsert = await BiometricModel.create(item); // Crea un nuevo registro de biometría en la base de datos con los datos proporcionados
  return responseInsert;  // Devuelve el registro recién creado
};
// Función para obtener todos los registros de biometría
const getDatas= async () => {
  const responseItem = await BiometricModel.find({}); // Busca todos los registros de biometría en la base de datos
  return responseItem; // Devuelve los registros encontrados
}; 
// Función para obtener un registro de biometría específico por ID
const getData = async (id: string) => {
  const responseItem = await BiometricModel.findOne({ _id: id });  // Busca el registro de biometría con el ID proporcionado en la base de datos
  return responseItem; // Devuelve el registro encontrado
};
// Función para actualizar un registro de biometría específico por ID
const updateData = async (id: string, data: Biometric) => {
  const responseItem = await BiometricModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });  // Busca el registro de biometría con el ID proporcionado en la base de datos y lo actualiza con los nuevos datos proporcionados
  return responseItem; // Devuelve el registro actualizado
};
// Función para eliminar un registro de biometría específico por ID
const deleteData = async (id: string) => {
  const responseItem = await BiometricModel.deleteOne({ _id: id });  // Busca el registro de biometría con el ID proporcionado en la base de datos y lo elimina
  return responseItem;  // Devuelve el resultado de la operación de eliminación
};

export { insertData, getDatas, getData, updateData, deleteData }; // Exporta las funciones para que puedan ser utilizadas por otras partes del código.