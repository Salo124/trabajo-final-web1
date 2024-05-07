user = "pp@mail.com"
key = 1234

usuario = input("Usuario")

clave = int(input("Clave"))

if usuario == user and clave == key:
    print("Has iniciado sesion")
else:
    print("valida tus credenciales")