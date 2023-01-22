
# TechAcademy

## Ejecicio modulo Node

Ejecicio de Node con mongoDB 


**URL de servicios**
 Todos los servicios corren de manera local en el puerto 3700 " http://localhost:3700 "


### Login

1. metodo( POST ) **'/login'** -- Valida usuario y contraseña del registro de Usuarios.
2. metodo( POST ) **'/logout'** -- Cierra session de usuario. 

#### Alumnos 

1. metodo( GET ) **'/alumnos'**  --  lista todos los alumnos registrados.
2. metodo( GET ) **'/alumno/:n_lista'**  --  lista al alumno solicitado por el parametro.
3. metodo( POST ) **'/alumno'**  --  Crea un alumno nuevo, para crearlo, es necesario logearse primero .
4. metodo( PUT ) **'/alumno/:n_lista'** Actualiza la información del alummno que se envia por el parametro .
5. metodo( DELETE ) **'/alumno/:n_lista'**  Elimina el alumno enviado por el parametro


#### Maestro 

1. metodo( GET ) **'/maestros'**  --  lista todos los maestros registrados.
2. metodo( GET ) **'/maestro/:n_lista'**  --  lista al maestro solicitado por el parametro.
3. metodo( POST ) **'/maestro'**  --  Crea un maestro nuevo, para crearlo, Es necesario estar logeado .
4. metodo( PUT ) **'/maestro/:n_lista'** Actualiza la información del alummno que se envia por el parametro , Es necesario estar logeado.
5. metodo( DELETE ) **'/maestro/:n_lista'**  Elimina el maestro enviado por el parametro, Es necesario estar logeado.


