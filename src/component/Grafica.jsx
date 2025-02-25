import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Grafica = () => {
    const data = [
        { semana: "1", kg: 20 },
        { semana: "2", kg: 25 },
        { semana: "3", kg: 22 },
        { semana: "4", kg: 30 },
        { semana: "5", kg: 28 },
        { semana: "6", kg: 20 },
        { semana: "7", kg: 25 },
        { semana: "8", kg: 22 },
        { semana: "9", kg: 30 },
        { semana: "10", kg: 28 },
        { semana: "11", kg: 20 },
        { semana: "12", kg: 25 },
        { semana: "13", kg: 22 },
        { semana: "14", kg: 30 },
        { semana: "15", kg: 28 },
        { semana: "16", kg: 20 },
        { semana: "17", kg: 25 },
        { semana: "18", kg: 22 },
        { semana: "19", kg: 30 },
        { semana: "20", kg: 28 },
        { semana: "21", kg: 20 },
        { semana: "22", kg: 25 },
        { semana: "23", kg: 22 },
        { semana: "24", kg: 30 },
        { semana: "25", kg: 28 },
        { semana: "26", kg: 20 },
        { semana: "27", kg: 25 },
        { semana: "28", kg: 22 },
        { semana: "29", kg: 30 },
        { semana: "30", kg: 28 },
        { semana: "31", kg: 20 },
        { semana: "32", kg: 25 },
        { semana: "33", kg: 22 },
        { semana: "34", kg: 30 },
        { semana: "35", kg: 28 },
        { semana: "36", kg: 20 },
        { semana: "37", kg: 25 },
        { semana: "38", kg: 22 },
        { semana: "39", kg: 30 },
        { semana: "40", kg: 28 },
        { semana: "41", kg: 20 },
        { semana: "42", kg: 25 },
        { semana: "43", kg: 22 },
        { semana: "44", kg: 30 },
        { semana: "45", kg: 28 },
        { semana: "46", kg: 20 },
        { semana: "47", kg: 25 },
        { semana: "48", kg: 22 },
        { semana: "49", kg: 30 },
        { semana: "50", kg: 28 },
        { semana: "51", kg: 20 },
        { semana: "52", kg: 25 }
        // Agrega los datos hasta la semana 52
      ];
  return (
    <ResponsiveContainer width="70%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="semana" />
        {"<YAxis/>"}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="kg" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Grafica