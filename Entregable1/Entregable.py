id = input("igresa la identificacion: ")
nombre = input("ingresa el nombre: ")
descripcion = input("ingresa la descripcion: ")
costo = int(input("costo del producto: "))
prc= costo/(1 - 0.3)
precio = prc
cantidad = int(input("ingresa la cantidad de producto disponible: "))
estado = input("ingresa si la informacion es verdadera(True) o falsa (False)")


print(f"id: {id}\n nombre: {nombre}\n descripcion: {descripcion}\n costo: {costo}\n precio: {precio}\n cantidad: {cantidad}\n estado: {estado}")