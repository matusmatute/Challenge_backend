
async function handleErrors<T>(promise: Promise<T>): Promise<T> {
    try {
        return await promise;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Error de tipo: ", error);
            throw new Error("Tipo de dato incorrecto");
        } else if (error instanceof RangeError) {
            console.error("Error de rango: ", error);
            throw new Error("Valor fuera de rango");
        } else {
            console.error("Error desconocido: ", error);
            throw new Error("Algo salio mal");
        }
    }
}


export { handleErrors }