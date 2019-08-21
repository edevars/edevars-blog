---
title: "Configurando nuestro entorno de trabajo para Python"
date: "2019-08-21"
tags: ["Python", "Desarrollo", "Programación"]
category: "Tutoriales"
imageSlug: "./coverPython.png"
slug: "/python-configuracion"
readTime: 5
---

![Portada](./coverPython.png)

Antes de empezar a aprender a programar en Python primero necesitamos hacer unas cuantas cosas para poder usarlo. Lo primero que podemos hacer es ver si lo tenemos instalado. Si usas linux abre tu terminal, si tienes windows abre el símbolo del sistema (lo puedes buscar como CMD) y ejecuta el siguiente comando:

```bash
python --version
```

o puedes ejecutar también:

```bash
python3 --version
```

Si en tu terminal sale un mensaje como:

```
Python 3.7.4
```

Entonces significa que lo tienes instalado, si te llego a aparecer un error no te sientas triste, solo tenemos que instalarlo 😊.

**¡Muy importante! La versión que debemos usar es Python 3**

## Instalar Python en Windows

Solo necesitas descargar el instalador desde [aquí](https://www.python.org/downloads/windows/)

Es importante que al momento de instalarlo selecciones *instalación personalizada* y marques todas las casillas para que tu instalación sea completa.

## Instalar Python en Debian, Ubuntu y Linux Mint

Primero debes actualizar tus paquetes con:

```
$ sudo apt update
$ sudo apt install software-properties-common
```

Agrega este repositorio a tu lista para después poder instalar python


```
$ sudo add-apt-repository ppa:deadsnakes/ppa
```

Vuelve a actualizar tus paquetes y por fin instala python:

```
$ sudo apt update
$ sudo apt install python3.7
```

## Instalar Python en fedora

Solo corre el siguiente comando en tu terminal como administrador:

```
$ sudo dnf install python3
```

Para comprobar si tu instalación es correcta solo necesitas ejecutar de nuevo el comando del inicio y ver que no te muestre errores:

```bash
python --version
```

