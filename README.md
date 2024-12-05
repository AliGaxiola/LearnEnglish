# Learn English

¡Bienvenido a **Learn English**! 🎉

Esta es una aplicación educativa web al estilo Duolingo, diseñada para ayudar a niños de primaria a aprender inglés a través de desafíos interactivos y preguntas divertidas. El proyecto está creado con **React**, utilizando **React Router** para la navegación y **TailwindCSS** para el diseño. Además, se utilizan componentes personalizados para diferentes tipos de preguntas.

## 🚀 Características

- **Niveles de aprendizaje**: 6 niveles de preguntas interactivas diseñadas para niños de primaria.
- **Tipos de preguntas**:
  - **Pregunta estándar**: Selecciona la respuesta correcta de 4 opciones.
  - **Pregunta con imagen**: Observa una imagen y selecciona la opción correcta.
  - **Completa la oración**: Elige la palabra correcta para completar una pequeña oración.
- **Colores de retroalimentación**: Respuestas correctas en verde e incorrectas en rojo, visibles de inmediato.
- **Resultados dinámicos**: Los resultados se guardan en `localStorage` y se muestran en la pantalla de resultados.
- **Interfaz responsiva**: Totalmente adaptada para dispositivos móviles y pantallas grandes.
- **Navegación intuitiva**: Botones para regresar a los niveles o revisar los resultados en cualquier momento.
- **Lectura en voz alta**: Preguntas leídas en voz alta utilizando la API de síntesis de voz del navegador.

## 🛠️ Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de rutas para la navegación entre páginas.
- **TailwindCSS**: Framework de CSS para estilos rápidos y personalizados.
- **localStorage**: Para persistir los resultados de los niveles entre sesiones.
- **API de síntesis de voz**: Para leer las preguntas en voz alta y mejorar la accesibilidad.
- **CSS responsivo**: Estilos optimizados para mejorar la usabilidad en dispositivos móviles.

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

1. **Pantalla de bienvenida**:

   - Proporciona tu nombre de usuario al iniciar la aplicación.
   - Este nombre se utiliza para personalizar la experiencia de usuario en las siguientes pantallas.

2. **Pantalla de inicio (Home)**:

   - Selecciona "Start" para acceder a los niveles de aprendizaje.
   - Revisa tus resultados previos en la sección "Results".

3. **Pantalla de niveles (Levels)**:

   - Elige un nivel para comenzar a responder las preguntas.
   - Cada nivel incluye preguntas de diferentes tipos (estándar, con imagen, o completar la oración).
   - Puedes abandonar el nivel en cualquier momento con el botón "Give Up".

4. **Pantalla de preguntas (Quiz)**:

   - Responde las preguntas de acuerdo con el tipo:
     - **Pregunta estándar**: Selecciona la respuesta correcta de 4 opciones.
     - **Pregunta con imagen**: Observa la imagen y selecciona la opción correcta.
     - **Completa la oración**: Elige la palabra que falta en la oración.
   - Obtendrás retroalimentación inmediata en verde (correcto) o rojo (incorrecto).
   - Las preguntas se leen en voz alta para facilitar el aprendizaje.

5. **Pantalla de resultados (Results)**:
   - Observa tu desempeño en los niveles completados, con resultados almacenados en `localStorage`.
   - Vuelve a intentar cualquier nivel si deseas mejorar tu puntuación.
