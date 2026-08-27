# PhoneLux — E-commerce de Celulares de Alta Gama

## Descripción

**PhoneLux** es una plataforma de comercio electrónico especializada en la venta de teléfonos celulares de alta gama (flagship). El backend está construido sobre **Node.js** y **Express**, siguiendo una arquitectura modular tipo API REST que permite gestionar productos, categorías, usuarios, carritos de compra, pedidos y pagos.

El proyecto está pensado como base escalable para integrar en el futuro pasarelas de pago, gestión de inventario en tiempo real y un panel administrativo.

## Software

Requisitos previos para ejecutar el proyecto en un entorno de desarrollo:

| Software | Versión recomendada |
|-------------------|----------------------|
| Node.js | v18 LTS o superior |
| npm | v9 o superior |
| MySQL | v8.0 o superior |
| Git | última versión |
| Editor de código | VS Code (recomendado)|

## Tecnologías utilizadas

- **[Node.js](https://nodejs.org/)** — Entorno de ejecución de JavaScript del lado del servidor.
- **[Express](https://expressjs.com/)** — Framework web minimalista para la construcción de la API REST.
- **[Nodemon](https://nodemon.io/)** — Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios en el código.
- **[Sequelize](https://sequelize.org/)** — ORM (Object-Relational Mapping) para interactuar con la base de datos MySQL mediante modelos de JavaScript.
- **[MySQL2](https://www.npmjs.com/package/mysql2)** — Driver de conexión entre Node.js y MySQL, utilizado como dialecto por Sequelize.

### Instalación de dependencias

```bash
npm install express sequelize mysql2
npm install --save-dev nodemon
```

### Script sugerido en `package.json`

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

## Propósito

El propósito de este proyecto es ofrecer una solución digital robusta y confiable para la comercialización de teléfonos celulares premium (como iPhone, Samsung Galaxy S/Fold, Google Pixel, entre otros), brindando a los usuarios:

- Un catálogo detallado con especificaciones técnicas de cada dispositivo.
- Un proceso de compra seguro, ágil e intuitivo.
- Gestión eficiente de inventario y stock en tiempo real.
- Una base de código mantenible y escalable para futuras integraciones (pagos, envíos, promociones).

## Modelo de base de datos

El modelo relacional propuesto contempla las siguientes entidades principales, gestionadas mediante modelos de Sequelize:

```
Usuario (Users)
 ├── id (PK)
 ├── nombre
 ├── email
 ├── password
 ├── rol (cliente / admin)
 └── createdAt / updatedAt

Categoria (Categories)
 ├── id (PK)
 ├── nombre
 └── descripcion

Producto (Products)
 ├── id (PK)
 ├── nombre
 ├── marca
 ├── modelo
 ├── descripcion
 ├── precio
 ├── stock
 ├── imagen_url
 ├── categoria_id (FK -> Categories)
 └── createdAt / updatedAt

Pedido (Orders)
 ├── id (PK)
 ├── usuario_id (FK -> Users)
 ├── estado (pendiente, pagado, enviado, entregado, cancelado)
 ├── total
 └── createdAt / updatedAt

DetallePedido (OrderDetails)
 ├── id (PK)
 ├── pedido_id (FK -> Orders)
 ├── producto_id (FK -> Products)
 ├── cantidad
 └── precio_unitario

Carrito (Carts)
 ├── id (PK)
 ├── usuario_id (FK -> Users)
 └── createdAt / updatedAt

DetalleCarrito (CartItems)
 ├── id (PK)
 ├── carrito_id (FK -> Carts)
 ├── producto_id (FK -> Products)
 └── cantidad
```

### Relaciones principales

- Un **Usuario** puede tener muchos **Pedidos** y un **Carrito**.
- Un **Pedido** tiene muchos **DetallePedido**, y cada detalle referencia un **Producto**.
- Un **Producto** pertenece a una **Categoría**.
- Un **Carrito** tiene muchos **DetalleCarrito**, cada uno asociado a un **Producto**.

## Flujo de colaboración

Para contribuir al proyecto se debe seguir el siguiente flujo de trabajo basado en Git:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/phonelux.git
   cd phonelux
   ```

2. **Crear una rama a partir de `develop`**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-de-la-funcionalidad
   ```

3. **Convenciones de ramas**
   - `feature/...` → nuevas funcionalidades
   - `fix/...` → corrección de errores
   - `hotfix/...` → correcciones urgentes en producción
   - `docs/...` → cambios en documentación

4. **Convenciones de commits** (estilo *Conventional Commits*)
   ```
   feat: agrega endpoint de creación de productos
   fix: corrige validación de stock en el carrito
   docs: actualiza el README con el modelo de base de datos
   refactor: reorganiza controladores de pedidos
   ```

5. **Enviar cambios y abrir Pull Request**
   ```bash
   git push origin feature/nombre-de-la-funcionalidad
   ```
   - Crear un Pull Request hacia `develop`.
   - Describir claramente los cambios realizados.
   - Solicitar revisión de al menos un integrante del equipo.

6. **Revisión y fusión (merge)**
   - El código debe ser revisado antes de fusionarse.
   - Se recomienda resolver conflictos localmente antes de subir cambios.
   - Una vez aprobado, se fusiona a `develop`; `main` se actualiza únicamente con versiones estables.

## Derechos de autor

© 2026 **Jaime Zapata**. Todos los derechos reservados.

Este proyecto y su código fuente son propiedad intelectual de Jaime Zapata, salvo que se indique lo contrario en los términos de la licencia especificada a continuación.

## Licenciamiento

Este proyecto se distribuye bajo la licencia **MIT**.

```
MIT License

Copyright (c) 2026 Jaime Zapata

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
de este software y de los archivos de documentación asociados (el "Software"),
para utilizar el Software sin restricción, incluyendo sin limitación los derechos
de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
copias del Software, y a permitir a las personas a las que se les proporcione el
Software que hagan lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las
copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD
PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O
TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA
RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO,
DERIVADA DE, O EN CONEXIÓN CON, EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN
EL SOFTWARE.
...