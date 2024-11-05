import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

 
 

const HomePagee = ({value}) => {
// console.log(value.userData)
return (

    <div style={{ textAlign: 'center' }}>
    <h2>Last 7 day Registration vs Referal</h2>
    <BarChart
        width={800}
        height={400}
        data={value.userData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
                domain={[0, 2000]}
                tickFormatter={(value) => value * 10} // Modify tick values here
            />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
</div>
)
   
}

 

   


export default HomePagee;