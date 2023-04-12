// import { View, Text, Dimensions, StyleSheet } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

// const screenWidth = Dimensions.get('window').width;

// const Dashboard = ({ navigation }) => {
  
//   const chartConfig = {
//     backgroundGradientFrom: '#B2DFDB', //cambiamos el gradiente de fondo a un tono de azul claro
//     backgroundGradientTo: '#E0F7FA',
//     color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`, //cambiamos el color de la línea a un tono de azul oscuro
//     strokeWidth: 2 // optional, default 3
//   }

//   const [datos, setDatos] = useState([]);
//   const [band, setBand] = useState(false);

//   const obtenerDatos = async () => {
//     const response = await fetch('https://robotshop.tech/todom');
//     const datos = await response.json();
//     return datos;
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiDatos = await obtenerDatos();
//       setDatos(apiDatos);
//       setBand(true);
//     };
//     fetchData();
//   }, []);

//   const procesarDatos = (datos) => {
//     const temperaturas = datos.map(dato => dato.temperatura);
//     const horas = datos.map(dato => dato.hora);
//     return { temperaturas, horas };
//   }

//   const { horas, temperaturas } = procesarDatos(datos);

//   const data = {
//     labels: horas,
//     datasets: [{
//       data: temperaturas,
//       color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`, //cambiamos el color de la línea a un tono de azul oscuro
//       strokeWidth: 2 // optional
//     }]

//   }

//   return (
//     <View style={styles.container}>
//       {band ?
//         <>
//           <Text style={styles.text}>Temperatura</Text>
//           <LineChart
//             data={data}
//             width={screenWidth-19}
//             height={320}
//             chartConfig={chartConfig}
//             bezier
//             style={{
//               borderRadius:10,
//               shadowColor: "#000",
//               shadowOffset: {
//                 width: 0,
//                 height: 3,
//               },
//               shadowOpacity: 0.27,
//               shadowRadius: 4.65,
//               elevation: 6,
//             }}
//           />
//         </>
//         :
//         <Text style={styles.text}>Cargando...</Text>
//       }
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     alignContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 25
//   }
// })

// export default Dashboard
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width;

const Dashboard = ({ navigation }) => {
  
  const chartConfig = {
    backgroundGradientFrom: '#B2DFDB',
    backgroundGradientTo: '#E0F7FA',
    color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
    strokeWidth: 1
  }

  const [datos, setDatos] = useState([]);
  const [band, setBand] = useState(false);
  const [contador, setContador] = useState(0);

  const obtenerDatos = async () => {
    const response = await fetch('https://robotshop.tech/todom');
    const datos = await response.json();
    return datos;
  }

  useEffect(() => {
    const fetchData = async () => {
      const apiDatos = await obtenerDatos();
      setDatos(apiDatos);
      setBand(true);
    };
    fetchData();
  }, [contador]); // agregamos contador como dependencia

  useEffect(() => {
    const interval = setInterval(() => {
      setContador(contador => contador + 1);
    }, 5000); // actualizamos la gráfica cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const procesarDatos = (datos) => {
    const temperaturas = datos.map(dato => dato.temperatura);
    const horas = datos.map(dato => dato.hora);
    return { temperaturas, horas };
  }
  
  const { horas, temperaturas } = procesarDatos(datos);
  console.log(temperaturas)
  const data = {
    labels: horas,
    datasets: [{
      data: temperaturas,
      color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
      strokeWidth: 1
    }]
  }

  return (
    <View style={styles.container}>
      {band ?
        <>
          <Text style={styles.text}>Temperatura</Text>
          <LineChart
            data={data}
            width={screenWidth-19}
            height={320}
            chartConfig={chartConfig}
            bezier
            style={{
              borderRadius:10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
          />
        </>
        :
        <Text style={styles.text}>Cargando...</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25
  }
})

export default Dashboard
