Mantenedores : 

Archivos a modificar : 

```

Loa Mantenedores están en la siguiente ruta : 

app/modules/apps

Lo primero que hay que hacer es cambiar el model para definir los campos que tiene que tener

El modelo está en esta ruta 

Carpeta del crud/management-list/core/_models.ts

Hay que agregar una nueva constante en el archivo 

_metronic/helpers/consts.ts

Esto lo podría pasar para la parte de los mantenedores a futuro

Hay que modificar el modal que permite editar y crear nuevos datos.

Filtrar por /_models

Carpeta del crud/management-list/edit-modal/EditModalForm.tsx
Carpeta del crud/management-list/table/columns/CustomHeader.tsx
/management-list/table/Table.tsx
/management-list/table/columns/SelectionHeader.tsx
/management-list/table/columns/_columns.tsx
/management-list/table/columns/CustomHeaderColumn.tsx
/management-list/table/columns/CustomRow.tsx
/management-list/table/columns/InfoCell.tsx        Esto no se que es tengo que verlo por que lleva la info de la data
/management-list/core/QueryResponseProvider.tsx     y llamar a la constante de la lista
/management-list/core/_requests.ts






Cambiar el valor de la constante para que funcione el eliminar
/management-list/component/header/listGrouping.tsx
/management-list/table/columns/ActionCell.tsx
/management-list/edit-modal/EditModalFormWrapper.tsx
/management-list/core/QueryResponseProvider.tsx


hay que cambiar la CRUD_URL 
/management-list/core/_requests.ts

cambiar la url para el router

en la primera página del mantenedor



```

Para agregar un nuevo tema al menú 

```

D:\proyectos mios\desarrollo4\desarrollocsv\src\_metronic\layout\components\sidebar\sidebar-menu\SidebarMenuMain.tsx

D:\proyectos mios\desarrollo4\desarrollocsv\src\app\routing\PrivateRoutes.tsx



```



Para futuros desarrollos


```

Esto lo usaré para la descarga de excel

https://preview.keenthemes.com/metronic8/demo1/apps/subscriptions/list.html


Esto es para cuando quiera imprimir en pdf 

https://preview.keenthemes.com/metronic8/demo1/apps/invoices/view/invoice-2.html

Esto es para cuando quiera crear un calendario

https://preview.keenthemes.com/metronic8/demo1/apps/calendar.html



Para manejar los permisos

https://preview.keenthemes.com/metronic8/demo1/account/settings.html


Para activar la cuenta con un codigo de verificación 

https://preview.keenthemes.com/metronic8/demo1/authentication/layouts/corporate/two-steps.html

Para cuando ya se cambió la clave

https://preview.keenthemes.com/metronic8/demo1/authentication/general/password-confirmation.html

Para cuando coloque metodos de pago : 

https://preview.keenthemes.com/metronic8/demo1/pages/pricing/column.html


Tabla para valorar las canciones 


https://preview.keenthemes.com/metronic8/demo1/widgets/tables.html

para manejar los roles

https://preview.keenthemes.com/metronic8/demo1/apps/user-management/roles/list.html

https://preview.keenthemes.com/metronic8/demo1/apps/user-management/permissions.html


Esto es para hacer graficos

https://www.youtube.com/shorts/F6xZmOIgPyk

```

implementar storybook

```

npx sb init

yarn add -D storybook-addon-react-router-v6

yarn add -D @storybook/preset-create-react-app

```

pra configurar git


```

git init

git remote add origin https://github.com/guykert/desarrollocsv.git

al colocar esto me tiró un error y me indico que colocara este otro comando

git config --global --add safe.directory 'D:/proyectos mios/desarrollo4/desarrollocsv'

despues hay que ejecutar nuevamente 

git remote add origin https://github.com/guykert/desarrollocsv.git

git add .

git commit -m "primer commit"

git push --all

```



yarn add storybook-formik