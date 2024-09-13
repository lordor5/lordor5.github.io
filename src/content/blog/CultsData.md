---
title: "A-better-Cults3D-most-searched-viewer"
pubDate: "2024-8"
description: "Una forma de visualizar datos públicos en Cults3D"
heroImage: "/CultsData/GraficoCultsHero.JPG"
---

Este proyecto surgió por que no tenia claro que diseñar para vender en cults 3D,
entonces cree esto.

La idea era hacer un proyecto sencillo que usa [Puppeteer](https://pptr.dev/) para hacer scraping de la pagina
que proporciona cults 3D para conocer las palabras mas buscadas de cada mes.

Los datos se ordenan de forma varias formas según si las palabras clave están mas meses presentes, tienen mejor posición.

![Evergreen](/CultsData/graficoEvergreen.JPG)

La web es accesible [aquí](https://lordor5.github.io/A-better-Cults3D-most-searched-viewer/)

Mas a delante, me di cuenta de que esa información es muy básica como para encontrar un nicho que no este saturado,
la pagina proporciona el numero de modelos para cada búsqueda por lo que con las palabras clave que ya tengo,
puedo ver si la palabra clave esta saturada o no comparándola con las otras. [Aquí esta el gráfico](https://lordor5.github.io/A-better-Cults3D-most-searched-viewer/MoreAmountOfModels/)

Uso github actions para mantenerse actualizada, y es código abierto, se puede ver [aquí](https://github.com/lordor5/A-better-Cults3D-most-searched-viewer)
