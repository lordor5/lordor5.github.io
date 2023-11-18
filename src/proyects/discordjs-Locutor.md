---
title: Locutor
author: Lordor5
date: 2023-10
tags: ["locutor"]
description: Un bot para discord que envia una notificacion cuando alguien se conecta a un canal de voz
draft: false
---

<!--
    << [Crear un bot de discord](../discordjs-make) 
    
    >> [Como alojar un bot de discord](../discordjs-host)
-->

# Locutor


Locutor es un bot de discord que envia una notificacion si algien se conecta en un canal de voz. Para que si alguien quiere jugar o hablar, que sepa que tu tambien quieres.

Esta guia supone que vienes de [Crear un bot de discord](../discordjs-make).


## Configuracion



### 1 Canal de texto

crea un canal de texto que se llame "conexiones" o lo que definas en esta linea

```
  // Find the voice channel by name
  const textChannel = client.channels.cache.find(channel => channel.name === 'conexiones');
```

![asi queda el canal de texto](/assets/locutor/canal.JPG)



### 2 Rol

Despues tienes que crear un rol llamado "locutor" y asignarlo al canal que has creado antes y a los usuarios que quieran recibir la notificacion.


Para ello ve a la configuracion del servidor

![Accede a la configuracion del servidor](/assets/locutor/ConfiguracionServidor.JPG)




![Ajustes del servidor](/assets/locutor/AjustesDelServidor.JPG)

Ahora vamos a crear el rol, para ello acedemos al apartado de roles y creamos el rol con el nombre que quieras en mi caso, lo voy a nombrar locutor

![Accede a la configuracion del servidor](/assets/locutor/CrearRol.JPG)

![Accede a la configuracion del servidor](/assets/locutor/RolCreado.JPG)


Ahora queda configurar el canal con los permisos, para ello accedemos a los ajustes del canal, y en el partado permisos, añadimos:

- Bot -> puede ver canal y enviar mensajes
- locutor (rol) -> puede ver canal
- @everyone -> no puede ver el canal ni nada


![Accedemos a los ajustes del canal](/assets/locutor/Canal.JPG)



Asi tienen que quedar los permisos:

Para el bot: abajo hay que marcar la opcion enviar mensajes

![asi quedan los permisos del bot](/assets/locutor/PermisosBotLocutor.JPG)


Los permisos del rol "locutor"

![asi quedan los permisos del bot del rol](/assets/locutor/PermisosLocutor.JPG)

Para @everyone

![asi quedan los permisos para el resto](/assets/locutor/PermisosEveryone.JPG)



### Por ultimo

Para que este bot sea mas util, tendras que intalarte la aplicacion de discor en el movil.