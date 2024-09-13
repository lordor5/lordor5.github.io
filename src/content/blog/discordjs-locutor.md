---
title: "Locutor"
description: "Un bot para discord que envía una notificación cuando alguien se conecta a un canal de voz"
pubDate: "2023-10"
heroImage: "/blog-placeholder-3.jpg"
---

<!--
    << [Crear un bot de discord](../discordjs-make)

    >> [Como alojar un bot de discord](../discordjs-host)
-->

# Cómo crear un bot de Discord

Discord es una plataforma de comunicación popular que permite a los usuarios crear servidores para chatear, jugar y colaborar. Los bots de Discord son aplicaciones que se pueden usar para automatizar tareas, proporcionar información o simplemente entretener a los usuarios. En esta guía, vas a aprender a hacer un bot que notifica cuando alguien se conecta a un canal de voz.

Si estás interesado en crear tu propio bot de Discord, este artículo te guiará a través del proceso paso a paso.

#### Paso 1: Activar el modo desarrollador

El primer paso es activar el modo desarrollador en tu cuenta de Discord. Para ello, sigue estos pasos:

Selecciona "Configuración" en la esquina inferior izquierda.

Haz clic en "Avanzado".

Activa la opción "Modo desarrollador".

#### Paso 2: Crear una aplicación

Una vez que hayas activado el modo desarrollador, puedes crear una aplicación para tu bot. Para ello, sigue estos pasos:

Visita el portal de [desarrolladores de Discord](https://discord.com/developers/applications?new_application=true).

Dale a tu aplicación un nombre, y haz clic en "Crear".

#### Paso 3: Agregar un bot

Una vez que hayas creado tu aplicación, puedes agregar tu bot a un servidor de discord. Para ello, sigue estos pasos:

Haz clic en "Bots" en la barra lateral izquierda.

Haz clic en "Agregar bot".

#### Paso 4: Obtener el token de tu bot

Para que tu bot pueda interactuar con Discord, necesitarás su token. Para obtener el token de tu bot, sigue estos pasos:

Haz clic en "Bots" en la barra lateral izquierda.

Haz clic en el nombre de tu bot.

Haz clic en "Configuración".

En la sección "Avanzado", encontrarás el token de tu bot.

#### Paso 5: Desarrollar tu bot

Para empezar, crea una carpeta en tu ordenador donde van a estar todos los archivos del bot.

Instala node.js

Instala discord.js con

```js
npm install discord.js
```

Después, crea un archivo index.js

Y copia [esto](https://github.com/lordor5/Locutor/blob/main/index.js)

Este código envía una notificación por el canal "conexiones" cuando alguien se mete en un canal de voz

Deberás poner el token que has copiado antes en un archivo que se llama config.json

#### Paso 7: Agregar tu bot a un servidor

Una vez que hayas alojado tu bot, puedes agregarlo a un servidor. Para ello, sigue estos pasos:

Haz clic en el nombre del servidor al que quieres agregar tu bot.
Haz clic en "Invitaciones a bots".
Copia el enlace de invitación de tu bot.
Pega el enlace de invitación en el chat del servidor y haz clic en "Enviar".

¡Ya está!

Ahora que has creado tu propio bot de Discord, puedes empezar a usarlo para automatizar tareas, proporcionar información o simplemente entretener a los usuarios.

Consejos adicionales

Cuando estés desarrollando tu bot, asegúrate de probarlo a fondo para asegurarte de que funciona correctamente.
Utiliza la documentación de Discord API para obtener información sobre cómo usar la API de Discord.
Únete a la comunidad de desarrollo de bots de Discord para obtener ayuda y apoyo.
Ideas para tu bot

Aquí hay algunas ideas para tu bot de Discord:

Un bot que proporcione información, como noticias, resultados deportivos o el clima.
Un bot que juegue juegos con los usuarios.
Un bot que ayude a los usuarios a organizarse, como un bot de calendario o un bot de tareas.
Un bot que simplemente haga reír a los usuarios.
El cielo es el límite cuando se trata de crear un bot de Discord.

# Locutor

Locutor es un bot de discord que envía una notificación si alguien se conecta en un canal de voz. Para que si alguien quiere jugar o hablar, que sepa que tu también quieres.

Esta guía supone que vienes de [Crear un bot de discord](../discordjs-make).

## Configuración

### 1 Canal de texto

crea un canal de texto que se llame "conexiones" o lo que definas en esta linea

```
  // Find the voice channel by name
  const textChannel = client.channels.cache.find(channel => channel.name === 'conexiones');
```

![asi queda el canal de texto](/locutor/Canal.JPG)

### 2 Rol

Después tienes que crear un rol llamado "locutor" y asignarlo al canal que has creado antes y a los usuarios que quieran recibir la notificación.

Para ello ve a la configuración del servidor

![Accede a la configuración del servidor](/locutor/ConfiguracionServidor.JPG)

![Ajustes del servidor](/locutor/AjustesDelServidor.JPG)

Ahora vamos a crear el rol, para ello acedemos al apartado de roles y creamos el rol con el nombre que quieras en mi caso, lo voy a nombrar locutor

![Accede a la configuración del servidor](/locutor/CrearRol.JPG)

![Accede a la configuración del servidor](/locutor/RolCreado.JPG)

Ahora queda configurar el canal con los permisos, para ello accedemos a los ajustes del canal, y en el parado permisos, añadimos:

- Bot -> puede ver canal y enviar mensajes
- locutor (rol) -> puede ver canal
- @everyone -> no puede ver el canal ni nada

![Accedemos a los ajustes del canal](/locutor/Canal.JPG)

Asi tienen que quedar los permisos:

Para el bot: abajo hay que marcar la opción enviar mensajes

![asi quedan los permisos del bot](/locutor/PermisosBotLocutor.JPG)

Los permisos del rol "locutor"

![asi quedan los permisos del bot del rol](/locutor/PermisosLocutor.JPG)

Para @everyone

![asi quedan los permisos para el resto](/locutor/PermisosEveryone.JPG)

### Por ultimo

Para que este bot sea mas util, tendrás que instalarte la aplicación de discord en el móvil.
