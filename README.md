"# TP08-EFSI_Usoz-Monastiridis" 
Componentes: 
 -Header: Contiene el header en color con la hora y fecha

 -Form: Contiene la informacion del ingresante y todo el funcionamiento

 -Logo: Aca se encuantra la imagen en el centro


Pensamiento:
Tuvimos problemas con el SafeArea y identificando el rol de cada carpeta.
Sigue el siguiente recorrido: App.js funciona como el componente receptor, contiene la imagen y header y el form: el form utilza hooks para detectar si el usuario no ingresó la contraseña y usuario predeterminado, en ese caso saldrá un mensaje

//npx expo start --tunnel