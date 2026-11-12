# Tablero — Ajedrez

Un juego de ajedrez para jugar en el mismo dispositivo, contra el bot o en línea. Funciona en navegadores de escritorio y móviles, y puede instalarse como aplicación web progresiva.

## Cómo jugar

Para activar Stockfish, la instalación y el modo sin conexión, inicia el servidor local incluido:

```sh
node server.mjs
```

Abre `http://127.0.0.1:4173` en el navegador. El motor y sus archivos ya vienen en la carpeta, así que no se necesita conexión para que el bot juegue. Si abres `index.html` directamente, el juego puede usar su motor básico de respaldo, pero la versión recomendada es el servidor local.

La partida se guarda automáticamente en el almacenamiento local del navegador y se restaura al volver a abrirla. Desde el botón de ayuda puedes activar o desactivar los sonidos y abrir la opción de instalación. En iPhone y Android, la instalación requiere publicar la app en una dirección HTTPS; `localhost` sirve solo para desarrollo en el mismo dispositivo.

## Partidas en línea

En el botón de modo de juego, elige **Jugar en línea**. Una persona crea una sala y comparte el enlace de invitación; al abrirlo, la otra persona verá el código listo para unirse. Quien crea la sala juega con blancas y quien se une con negras. Si se corta el canal de juego, el invitado puede reconectarse mientras el anfitrión mantenga abierta la sala; el tablero y las jugadas se sincronizan de nuevo. Las jugadas se validan en ambos dispositivos. No se necesita cuenta.

La conexión usa WebRTC con PeerJS Cloud como servicio de señalización. La señalización ayuda a encontrar el otro dispositivo; las jugadas se envían directamente entre navegadores cuando la red lo permite. Ambos jugadores necesitan internet. Algunas redes restrictivas pueden impedir la conexión porque esta versión no incluye un servidor TURN. Las partidas en línea no se guardan para retomarlas después de cerrar la sala.

## Publicar en GitHub Pages

El flujo de GitHub Actions de `.github/workflows/deploy-pages.yml` publica automáticamente la app al enviar cambios a `main` o `master`. En GitHub, activa **Settings → Pages → GitHub Actions** para el repositorio. El workflow copia a `_site` solo los archivos que necesita el sitio y el motor.

El sitio es público. Con GitHub Free, el repositorio también debe ser público para usar Pages; los planes de pago permiten Pages desde repositorios privados.

## Incluye

- Reglas de movimiento, jaque, mate, tablas, enroque, captura al paso y promoción.
- Historial de jugadas, deshacer la última jugada y girar el tablero.
- Modo contra bot con búsqueda de movimientos, respuesta a amenazas y elección de jugadas legales.
- Partidas en línea entre dos dispositivos mediante salas privadas por código.
- Stockfish 19 Lite con tres niveles de fuerza y una espera mínima configurable de 1, 2 o 3 segundos antes de cada respuesta.
- Diseño adaptable con controles táctiles y opción de instalación.

## Licencia del motor

Stockfish.js se distribuye bajo GPL-3.0. Se incluye el texto de la licencia en `engine/COPYING.txt`; el código fuente y las versiones publicadas están en el [repositorio de stockfish.js](https://github.com/nmrugg/stockfish.js) y el [paquete 19.0.1](https://www.npmjs.com/package/stockfish/v/19.0.1).
