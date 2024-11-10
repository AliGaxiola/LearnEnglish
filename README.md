# Learn English

¡Bienvenido a **Learn English**! 🎉

Esta es una aplicación educativa web al estilo Duolingo, diseñada para ayudar a niños de primaria a aprender inglés a través de desafíos interactivos y preguntas divertidas. El proyecto está creado con **React**, utilizando **React Router** para la navegación y **TailwindCSS** para el diseño. Además, se utilizan componentes personalizados para diferentes tipos de preguntas.

## 🚀 Características

- **Niveles de aprendizaje**: 6 niveles de preguntas interactivas para niños de primaria.
- **Tipos de preguntas**:
  - Pregunta estándar: Selecciona la respuesta correcta de 4 opciones.
  - Pregunta con imagen: Observa una imagen y selecciona la opción correcta.
  - Completa la oración: Elige la palabra correcta para completar una pequeña oración.
- **Resultados dinámicos**: Los resultados se guardan en `localStorage` y se muestran en la pantalla de resultados.
- **Interfaz responsiva**: Adaptada para pantallas grandes y pequeñas.
- **Navegación intuitiva**: Botones para regresar a los niveles y revisar los resultados.

## 🛠️ Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de rutas para la navegación entre páginas.
- **TailwindCSS**: Framework de CSS para estilos rápidos y personalizados.
- **localStorage**: Para persistir los resultados de los niveles entre sesiones.

## ⚙️ Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/learn-english.git
   ```

2. **Instala las dependencias:**

   ```bash
   cd learn-english
   npm install
   ```

3. **Ejecuta el proyecto en modo de desarrollo:**

   ```bash
   npm run dev
   ```

## 📚 Instrucciones de uso

- En la pantalla de inicio (Home), selecciona "Start" para acceder a los niveles.
- Elige un nivel y responde las preguntas. Puedes abandonar el nivel en cualquier momento con el botón "Give Up".
- Al completar el nivel, verás un modal con tu puntaje. Puedes ir a los resultados o volver a los niveles.
- En la pantalla de resultados (Results), podrás ver tu desempeño en los niveles completados y volver a intentar cualquier nivel.
