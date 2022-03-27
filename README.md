# File Validator csv

## _Valida la información dentro de un archivo csv_

Esta miniaplicación permite validar la información contenida dentro de un archivo csv, de forma que podamos definir un esquema de configuración para dicho archivo.
Este esquema nos permite definir una serie de parámetros, que nuestro archivo csv deberá cumplir para poder continuar con el proceso o reglase de negocio establecidas en nuestro propio proyecto.
Estas reglas pueden ser del tipo:
La columna con nombre col1 solo puede contener datos únicos.
La columna con nombre col2 debe tener 11 caracteres.
La columna con nombre fecha inicial no puede ser mayor a la columna con nombre fecha final.

### A continuación, encontraremos en ejemplo de uso, instalación y configuración de File Validator csv

## Installation

Requerimos [Node.js](https://nodejs.org/) v12+ para ejecutarse

Instale dependencias para producción.

```sh
npm install filevalidatorcsv
```

## Configuracion

En le siguiente ejemplo utlizaremos un proyecto en Agular pero ustedes puenden utilizar react o typescript.

importaremos llas funciones requeridas con la siguiente line en nustro archivo .ts

```sh
import { validateFile, SchemaFile } from 'filevalidatorcsv';
```

para comenzar deberemos generar un esquema para nuestro archivo csv, para elle utilizaremos el siguiente archivo que contiene una serie de datos a los cuales deberemos colocarles unas reglas de validación.

Ver imagen.

![Image file](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648220973/1_q0m5s4.jpg)

Las reglas de validación para el archivo csv propuestas son la siguientes.

- La columna con nombre idusuario debe ser un campo único, también de debe ser requerido y debe ser un capo con valor positivo.
- La columna con nombre numcuenta debe ser requerido, campo único y una longitud de 9 digitos.
- El nombre de usuario debe ser de requerido y solo puede contener letras.
- El tipo de cuenta debe ser requerido y solo puede ser de los siguientes tipos MT1, MT2, MT3.
- El salso solo debe ser un numero positivo.
- La fecha de apertura debe de ser menor a la fecha de cierre.

## crear esquema

Con la clase SchemaFile crearemos una instancia nueva de esta que la llamaremos mySchema y procederemos a cumplir la firma de esta instancia es decir crearemos las diferentes validaciones para cada columna de nuestro archivo, quedando como se puede observar en la imagen.

![Image schema](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648235465/2_plvmla.jpg)

El esquema recibe un array que contiene diferentes objetos que representan el archivo por cada columna, este objeto es posicional, es decir, dentro del array la primera posición representa la primera columna de nuestro archivo, la segunda posición del array representara la segunda columna de nuestro archivo y así con las demás posiciones.

El objeto dentro del array se puede crear con las siguientes directivas de validación.

- name: string
- required?: boolean
- length?: number
- reg?: any
- include?: string[]
- unique?: boolean
- message?: string
- refIsGreaterDate?: string
- maxLength?: number;
- minLength?: number;

* name, es el nombre que daremos a la columna y es obligatoria.
* required, indica si la columna es obligatoria para todas las filas.
* Length, indica el tamaño fijo de caracteres que debe tener cada dato dentro de la columna.
* Reg, es una expresión regular que deberá cumplirse para cada dato en la columna.
* Include, dentro de la columna solo se permitirán los datos que se encuentren dentro del array.
* Unique, define que cada dato dentro de la columna debe ser único.
* Message, en un mensaje personalizado que podremos colocar el array de salida de errores que se encontraron en el archivo, esta información cobrara sentido mas adelante.
* maxLength, evalua la cantidad maxima que debe tener el campo.
* minLength, evalua la cantidad minima que debe tener el campo.
* refIsGreaterDate, permite verificar si la fecha de inicio es mayor a la final haciendo referencia a la fecha inicial

## utilizar la funcion de validateFile

Una ves tengamos nuestro esquema y el archivo csv a validar guardado en ese formato, debe quedar de la siguiente forma, note que no tiene la fila de los titulos para cada columa y solo esta la data pura y dura que queremos validar.

![Image csv](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648238071/3_etm1ww.jpg)

procederemos a utilizar la función validateFile que nos devolverá como resultado un array con los errores encontrados fila a fila si es que llegáramos atener dichos errores de lo contrario el array no tendrá data que mostrar.

## configuración angular

![Image html](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648238774/4_xzqyjw.jpg)

![Image ts](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648238775/5_ae85l8.jpg)

En este momento si llegáramos a probar nuestro archivo este no presentaría errores, como se puede ver en la imgen.

![Image errores](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648238981/6_yygxrv.jpg)

#### Bueno agreguemos errores intencionalmente al archivo y verifiquemos la salida.

![Image errores error](https://res.cloudinary.com/dwxvqq7v9/image/upload/v1648239512/7_bjcarg.jpg)

Como podemos observar ahora el array nos muestra información de los errores y donde se encuentran cada uno de ellos, también podemos personalizar dicho error como se muestra en la línea 3 del array.

# Nota

En la salida de información encontrara un objeto que tiene:

- dataFile: Muestra la información que se encuentra dentro del archivo.
- errorsFile: Muestra los errores del archivo, es decir todo error que se halla configurado en el esquema.
- infoFile: Muestra la información del archivo

El errorsFile es un array que puede utilizar para definir su logica de negocio.
