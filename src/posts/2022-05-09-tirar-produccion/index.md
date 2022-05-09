---
title: "¿Qué hacer cuando tirar producción?"
date: "2022-05-09"
tags: ["Ingeniería", "Consejos", "Desarrollo profesional"]
category: "Tecnología"
slug: "/tirar-produccion"
imageSlug: "./cover.png"
ogImage: "./cover.png"
---

El sentimiento de tirar producción puede ser de los peores que puedas sentir en tu carrera profesional. Existen múltiples estrategias que puedes seguir para arreglar ese *bugcito* 🐛 que causó que le diera hipo al entorno de producción.

![Lupe meme](https://imagenes.milenio.com/9MVFhKwsaadwaBOawvPxNg88BC0=/936x566/https://www.milenio.com/uploads/media/2021/03/23/ay-lupe-nacio-meme-viral.jpg)

## ¿Qué se siente tirar producción?
Todo va bien en tu día de trabajo, asistes a juntas como todos los días y te pones manos a la obra para solucionar las tareas del día sin saber lo que te espera.

´Después de un largo día de trabajo te sientes feliz de terminar y por fin liberar a producción el código que has estado elaborando. En el entorno local todo se ve bien, tu QA te ha dado la revisión, todos los tests pasaron y tu *pull request* está listo para ver la luz. 

Todo sale bien en el despliegue y te sientes genial hasta que... ves un error que está rompiendo la plataforma. **¡Haz tirado por primera vez producción!**

El tirar por primera vez la plataforma donde trabajas posiblemente es una de las sensaciones más desagradables que puedes sentir. Tu estrés se dispara a la nubes, sientes que hay un reloj corriendo que anunciará la hora de tu despido y te sientes un fracaso. Créeme, no es el fin del mundo y todo estará bien.

![This is fine meme](https://media.tenor.co/images/0d1329f5ff7d31712e3d12ce160df6ec/raw)

## ¿Cómo arreglar producción cuando ya está abajo?

Lo primero que debes de hacer es tranquilizarte, entiende que eres humano y vas a cometer errores a lo largo de tu carrera profesional. 

Una vez ya estés tranquila o tranquilo es momento de crear una estrategia para arreglar aquello que está roto. Estos pasos son lo que te recomiendo para solucionar el error que te está afectando:

**1. Identifica de dónde proviene el reporte del error**

El reportar que un error está en producción puede ser desde segundos una vez terminado el despliegue hasta horas cuando múltiples usuarios encuentran fallos colaterales dentro de la plataforma. 

El origen de la falla lo puedes encontrar a través de reportes de usuarios en redes sociales, como twitter o reddit. También dale una mirada a los *logs* del sistema para encontrar el origin de la falla. 

Las fallas también suelen ser reportadas por el departamento de servicio al cliente de tu empresa,  que suelen comunicar el problema directamente al equipo de desarrollo.

Una vez tengas claro qué es lo que está pasando es momento de solucionarlo junto a tu equipo.

**2. Comunica a tu equipo que hay un problema**

##### Los errores que tiran producción tienen una prioridad alta. Así que lo más sencillo para comunicarte con tu equipo para dar solución al problema es crear una ***war room***, que es una llamada en donde están las y los desarrolladores de diferentes equipos dialogando en cuál sería la mejor solución para arreglar el problema.

**3. Define una estrategia para corregir el problema**

Una vez estés en la llamada con tu equipo determinen qué sería lo mejor para arreglar el problema. Usualmente hay tres alternativas que puedes hacer: ***un hotfix, un revert o un rollback***. Ya te explico para que sirve cada uno. 

- **Hotfix**

  Como su nombre lo dice es un " arreglo en caliente", es decir, un arreglo rápido y que se envía de manera inmediata a los usuarios. 

  Esta es una muy buena estrategia cuando ya tienes identificado el problema y sabes cómo solucionarlo. 

  Solo es arreglar tu código y hacer un despliegue. 

  > ⚠️ Verifica que tu arreglo surta efecto si cuentas con políticas de caché o se hizo un cambio en el modelo de una tabla en la base de datos

- **Revert**

  ##### El revert consiste en deshacer el commit o la serie de commits que iban durante el último despliegue. Esto se hace con el comando `revert` de git.

  Esta solución es buena cuando no tienes claridad en qué está fallando en el sistema o sabes que la solución involucrará mucho tiempo y esfuerzo.

  El hacer revert creará un nuevo commit donde se marca que se deshicieron los cambios. Solo despliega ese commit y listo 🚀

- **Rollback**

  Este es uno de las soluciones más difíciles de ejecutar pero necesaria para casos extraordinarios, como lo puede ser un feature que se trabajo entre múltiples equipos y salió mal.

  El rollback consiste en deshacer los cambios realizados al sistema no solo a nivel de código, también implica el regresar a versiones anteriores a otras partes del sistema o la infraestructura. como lo puede ser la base de datos o sistemas de terceros que usan múltiples equipos. 

  Es una solución que requiere de mucha orquestación para regresar el sistema de manera completa a su estado previo, aquí es donde el ***war room*** brilla en su utilidad.

4. **Verifica que el sistema se encuentre activo y completamente funcional**

   Cualquiera que sea el sistema que se haya visto afectado una vez tu *fix* esté disponible realiza algo llamado **pruebas de humo. **. Estas pruebas consisten en verificar las funcionalidades principales del sistema y asegurar que el error ya no esté presente.

5. **Mantente pendiente de los logs de la consola**

   Los logs del sistema son aquellos mensajitos que la consola muestra cuando ocurre una acción o se ejecuta algo, como lo puede ser una petición o un error. Existen servicios dedicados a la administración y monitoreo de esto, como lo puede ser Sentry o Datadog. 

   Cuando tu solución esté en producción échale un ojo 👁 a estos sistemas para verificar que no hayan surgido nuevos problemas.

## ¿Qué hacer para evitar tirar producción en el futuro?

Bien, una vez hayas solucionado el problema con tu equipo te recomiendo mucho hacer un documento llamado **post mortem**. Este documento se escribe como una bitácora en la cual se describe el incidente en cuestión y de manera detallada se explica minuto a minuto qué fue lo que pasó. Desde el reporte de origen del problema hasta el momento en el cual el sistema estaba completamente estable y funcionando al cien pro ciento. 

Información importante que puede llevar este documento es:

- Hora del incidente
- Cantidad de usuarios afectados
- Sistemas o funcionalidades comprometidas
- Tiempo en el cual el sistema se mantuvo "abajo"
- Personas del equipo involucradas

Por último, entiende que este tipo de cosas pasan y posiblemente no será la última vez que te pase, es parte de tu formación como profesional y estoy seguro que aprenderás muchísimo de estos errores. Trata de tener la suficiente seguridad psicológica con tu equipo para hablar abiertamente de estos fallos y así crecer todos juntos. ✨