import React, { useState } from 'react';
import Form from './Form.js'
import User from './User.js'
import './App.css';

const initialTeam = [{
    name: 'cameron',
    email: 'cameron-04@hotmail.com',
    role: 'overlord'
}]
function App() {
const [team,setTeam] = useState(initialTeam)
return (
    <div className="App">
        <Form team={team} setTeam={setTeam}></Form>
        {team.map(v => (<User user={v}/>))}
    </div>
);
}

export default App;
