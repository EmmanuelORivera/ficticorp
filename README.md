# FictiCorp

Bienvenido a **FictiCorp**, este proyecto es un CRUD el cual sirve para llevar el control del personal de la empresa.

## Demo Onlie
Visita el sitio [https://ficticorp-g437npnnx-emmanuelorivera.vercel.app/](https://ficticorp-g437npnnx-emmanuelorivera.vercel.app/)

## Tabla de contenido

- [Inicio](#Inicio)
  - [Prerequisitos](#prerequisitos)
  - [Instalacion](#instalacion)
- [Uso](#uso)
- [Caracteristicas](#caracteristicas)
- [Agregar Empleado](#Agregar Empleado)

## Inicio

Para comenzar a usar FictiCorp en su máquina local, siga estos pasos:

### Prerequisitos

Asegúrese de tener los siguientes requisitos previos:

- **Node.js**: Asegurarse de tener instalado node.
- **npm**: npm se utiliza para la gestión de paquetes.
- **Environment Variables**: Configurar el archivo `.env.local` en el archivo raiz del proyecto con las siguientes variables de entorno:
  - `NEXT_PUBLIC_SHEET_ID`: 1B0oGOK19OBCfNG8UPwJBgj4FB_dyaNffh9FGhcS43gA.
  - `SHEET_ID`: 1B0oGOK19OBCfNG8UPwJBgj4FB_dyaNffh9FGhcS43gA.


### Instalacion
1. Clonar el repositorio.
2. Navegar a el directorio del proyecto.
3. Instalar dependencias.
   ```sh
   npm install
  
### Uso
1. Para iniciar la app ejecutar:
```sh
npm run dev
```

### Features
1. @hookform/resolvers (Usado para poder usar zod y hookform)
2. react-hook-form (Simplifica el uso de formularios)
3. react-toastify (Componente usado para las notificaciones)
4. zod (libreria para ayudar con las validaciones)
5. uuid (Genera randoms uuids)
6. radix-ui/react-icons (iconos 15 x 15)
7. shadcn-ui (Componentes que se pueden copiar y pegar)


### Sistema CRUD
El sistema esta diseñado para que cumpla con los siguientes aspectos:

- Ver un listado de los empleados.
- Agregar empleados al sistema.



 
