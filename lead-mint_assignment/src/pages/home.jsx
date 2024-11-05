import { Links } from "../routes/linkk"

import React from 'react';
import HomePagee from "../compnents/bar";


// Mock data for the cards and graph


export const Home = () => {
    const userData = [
        { id: 1, title: ' Users', value: '140' },
        {id:2, title:"Refral Users", value:"64"},
        {id:3, title:"Today's Organic Users", value:"76"},
        {id:4, title:"This Week Users", value:"679"},
        { id:5, title: 'This Months Users', value: '22727' },
        { id:6, title: 'Last Months Users', value: '71291' },
    
    ];
    return (
        <div style={{display:"flex" , }}>
            <div style={{width:"25%"}}>
                   {/* Navigation Bar */}
            <Links/>
            </div>
            
            <div style={{width:"60%"}}>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Dashboard</h2>

               
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {userData.map((item) => (
                        <div key={item.id} style={{ width: '150px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', textAlign: 'center' }}>
                            <h4>{item.title}</h4>
                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Graph Section */}
                <div style={{ marginTop: '40px', width: '100%', maxWidth: '800px', textAlign: 'center' }}>
                    <div style={{ height: '400px', backgroundColor: '#f0f0f0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <HomePagee value={{userData}}/>
                    </div>
                </div>
                </div>
            </div>
         
         
           
          
        </div>
    );
};







 