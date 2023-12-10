---
title: 'Juego con una LCD16x2 y un Arduino nano'
pubDate: '2018-02'
description: 'Un juego sencillo de conducción programado para un Arduino Nano conectado a una pantalla LCD 16x2.'
---

# Juego con una LCD16x2 y un Arduino nano


En este artículo, vamos a ver cómo programar un sencillo juego de conducción para un Arduino Nano conectado a una pantalla LCD 16x2. El juego consiste en evitar los obstáculos que aparecen en la pantalla, y el objetivo es conseguir la mayor puntuación posible.

Para construir este proyecto, necesitaremos los siguientes materiales:

- Arduino Nano
- Pantalla LCD 16x2
- 4 Pulsadores
- Protoboard
- Resistencias de 1k ohm
- cable usb para el Arduino


[Aquí esta el código que deberás subir al Arduino](https://github.com/lordor5/Juego-LCD-para-Arduino)


La idea es conducir de un coche en un camino muy deteriorado, el camino esta lleno de piedras por lo el juego consiste en evitar esos obstáculos.
Si estas un tiempo sin chocarte, el coche avanza de un cuadrado, si te chocas, retrocede.
Si los obstáculos hacen que el coche se salga de la pantalla, pierdes y ves tu Score.

Este proyecto es muy interesante por que te confronta con problemas tanto de software como de hardware, 


Este es el primer juego que he programado y por consecuencia, tiene varios problemas técnicos que me obligaron a abandonar el proyecto,

- Resulta que una pantalla LCD no puede refrescarse demasiadas veces por segundo por lo que si eres muy bueno en el juego, acabas no viendo los obstáculos (principal problema)
- Aparte de esto, era bastante incomodo pulsar los botones y si jugabas con mucha energía, se podían salir de la protozoa por lo que perdías
- Esta hecho con programación funcional por lo que es complicado añadir mas funciones
- (También tiene problemas a nivel de software pero eso ya es otra historia)

