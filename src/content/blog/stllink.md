---
title: "Stl Link"
pubDate: "2024-7"
description: "Un marketplace de modelos 3D para los que no saben lo que es una impresora 3D"
heroImage: "/blog-placeholder-1.jpg"
---

Stl link es un marketplace que conecta diseñadores 3D con printfarms
para que puedan vender sus modelos sin complicarse la vida.

Es un proyecto muy ambicioso, en un principio usa todo lo que se hacer y mas cosas que
he aprendido por el camino.

Se usa Cloudflare D1 como base de datos, y drizzle

Cloudflare R2 para almacenar los modelos

Presigned urls para compartir los archivos con la print farm,

Apis para la comunicación entre la print farm y la web,

Stripe como pasarela de pagos,

Astro para la web.

Alojada en Cloudflare con SSR
