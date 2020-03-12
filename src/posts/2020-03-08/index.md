---
title: "Mejora los estilos de tu aplicación con Styled Components"
date: "2020-03-08"
tags: ["JavaScript", "Styled Components", "React"]
category: "Tecnología"
imageSlug: "./styled-components.png"
slug: "/como-usar-styled-components"
readTime: 10
---

El estilizado en React siempre ha sido algo complicado. Te puedes equivocar al momento de importar los archivos CSS, poner los nombres de tus clases mal o sobrescribir los estilos de tu aplicación. ¿Y si pudiéramos hacer CSS con Javascript para evitarnos todos estos problemas?

Styled Components es una dependencia que nos permite hacer *CSS in JS*. Esto significa que podemos declarar código de CSS directamente en nuestros archivos de JavaScript. Para instalar esta dependencia basta con ejecutar en la terminal de tu proyecto el comando:

```bash
npm install --save styled-components
```

Una vez que se acabe de instalar, solo tienes que declarar tus componentes como siempre lo has hecho, pero esta vez, importaremos Styled Components para poder darles algo de estilo. El siguiente ejemplo te muestra claramente cómo se hace:

```jsx
import React from "react";
import styled from "styled-components";

// Le damos estilos a una etiqueta div que se llamará "Contenedor"

const Contenedor = styled.div`
display: flex;
justify-content: center;
height: 100vh;
background: linear-gradient(to right, #ec008c, #fc6767);
`;

// Le damos estilos a una etiqueta h1 que se llamará "Titulo"

const Titulo = styled.h1`
font-family: Arial, Helvetica, sans-serif;
font-size: 56px;
color: white;
line-height: 1.5;
margin-top: 200px;
max-width: 500px;
`;

const Home = () => {
	return (
		<Contenedor>
			<Titulo>Hola mundo con Styled Components 💅</Titulo>
		</Contenedor>
	);
};

export default Home;
```

Este componente es una página de inicio con un título que se ve de la siguiente forma en el navegador:  

![Hola mundo con Styled Components](https://www.dropbox.com/s/ydn4syvkk3684ny/Screenshot%20from%202020-03-07%2019-36-02.png?raw=1)

Como ves, el estilizar una página entera y sus componentes es muy sencillo con esta librería. Podemos usar cualquier etiqueta HTML que queramos, agregarle sus estilos directamente y convertirla en un componente de React.

Las principales mejoras que tiene Styled Components ante el CSS tradicional son:

- **Encapsula tu CSS:** Solo el CSS que declares en tu componente afectará a este y no se verá mezclado con ningún otro estilo.

- **Únicamente carga el CSS necesario:** Styled Components solo carga los estilos de los componentes que se muestran en pantalla, por lo cual no tendrás que cargar desde el inicio todos los estilos de tu aplicación.

- **No más errores en los nombres de clases:** A cada nombre de clase creada se le agrega un *hash* único. Este *hash* sirve para evitar que dos clases se llamen igual, evitando que se mezclen sus estilos.

Esta dependencia nos facilita mucho el desarrollo y estilizado de nuestra aplicación. No solo nos sirve para declarar nuestros estilos, Styled Components tiene algunos ases bajo la manga con funciones muy útiles para agilizar nuestro desarrollo. Por ejemplo, un par de ellos son:

## Propiedades directamente a tu CSS

Esta es una de las características más geniales que tiene. Al ser únicamente JavaScript puedes pasar propiedades a tu componente para modificar su CSS. Esto vuelve el estilizado completamente dinámico al igual que tus componentes.

```jsx
import React from "react";
import styled from "styled-components";

/* Si el botón recibe la propiedad de "isRed" se pondrá
   de color rojo, si no tendrá un color azul. */

const Button = styled.button`
	background: ${props => (props.isRed ? "red" : "blue")};
	color: white;
	border: none;
	padding: 5px;
	border-radius: 5px;
`;

const Buttons = () => {
	return (
		<>
			<Button isRed>Soy de color rojo</Button>
			<Button>Soy de color azul</Button>
		</>
	);
};

export default Buttons;
```

## Crea temas con el ThemeProvider

Styled Components incluye un componente para agregar temas llamado ThemeProvider. Con él podemos suministrar diferentes colores o tamaños a nuestros componentes, logrando un diseño mucho más homogéneo de una manera fácil y rápida.

```jsx
// Importamos el Theme Provider
import styled, { ThemeProvider } from "styled-components";
// Creamos nuestro tema con los colores que queremos.
const theme = {

	// Colores del tema claro
	light: {
		background: "#fdd835",
		color: "#212121"
	},
	// Colores del tema oscuro
	dark: {
		background: "#212121",
		color: "#fdd835"
	}
};

/* Si el dark mode está activado, se usarán los colores del tema
   oscuro, si no es así, se usará el tema claro */

const Wrapper = styled.div`
	background: ${props =>
		props.darkMode
		? props.theme.dark.background
		: props.theme.light.background};

	h1 {
		color: ${props =>
			props.darkMode 
			? props.theme.dark.color 
			: props.theme.light.color};
		}
`;

const ThemedPage = () => {
	return (
		<div>
		{/* Agregamos el tema con el ThemeProvider */}
			<ThemeProvider theme={theme}>
				<Wrapper>
					<h1>Tema claro</h1>
				</Wrapper>
				<Wrapper darkMode>
					<h1>Tema oscuro</h1>
				</Wrapper>
			</ThemeProvider>
		</div>
	);
};
```

![Tema claro y oscuro](https://www.dropbox.com/s/4sy6rvq594br9eo/Screenshot%20from%202020-03-08%2000-18-17.png?raw=1)


¡Nunca había sido tan sencillo crear un tema oscuro en React!

En general Styled Components está lleno de sorpresas. Se pueden cambiar los estilos de componentes de otros Frameworks como lo son Gatsby o Next; crear tus propias animaciones y reutilizarlas en diferentes partes de tu proyecto; inyectar los estilos en tu Server Side Rendering con tan solo un par de líneas de código o crear configuraciones globales de CSS.

Por estas increíbles razones muchas compañías como lo son **Airbnb, Patreon, Target y Ticketmaster** ya lo están usando en sus sitios web. Tú no esperes más y descubre todo lo que esta dependencia tiene que ofrecerte.

No te quedes con la duda y aprende a dominar esta librería en el [Curso de React Avanzado](https://platzi.com/cursos/react-avanzado/) en donde encontrarás todo un módulo enfocado al uso de Styled Components.

**¡Nunca pares de aprender!**