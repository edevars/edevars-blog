---
title: "Post de prueba"
date: "2019-04-10"
tags: ["Python","Desarrollo"]
imageSlug: "./python.jpg"
---

Para comprender el flujo de nuestro programa debemos entender un poco sobre estructuras y expresiones booleanas
``` python{numberLines: true}
== se refiere a igualdad
!= no hay igualdad.
> mayor que
< menor que
>= mayor o igual
<= menor o igual 
 ```

**AND** unicamente es verdadero cuando ambos valores son verdaderos
**OR** es verdadero cuando uno de los dos valores es verdadero.
**NOT** es lo contrario al valor. Falso es Verdadero. Verdadero es Falso.

## Tablas de verdad de los operadores lógicos

![Tablas de verdad](/home/edevars/Boostnote/img/comparaciones.jpg)

## Implementación de los operadores en python

Si declaramos las siguientes variables en python

```python
a=True;
b=False;
```

Operador | Keyword | Ejemplo | Retorno
-- | -- | -- | --
AND | `and` | ``` a and b ```| false |
OR |`or`| `a or b` | true | 
NOT |`not` | `not a`| false |