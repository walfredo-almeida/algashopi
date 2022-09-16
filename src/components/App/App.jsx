import React, { useState } from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'
import Checkbox from '../../shared/Checkbox'

function App() {
    const [lettuce, ] = useState(true)

    return <Wrapper>
        <Container>
        <AppHeader/>
        <AppContainer
        left ={<div>  produtos disponiveis
            <Checkbox 
            value = {lettuce} 
            title="alface" 
            onClick={() => window.alert('batata')}/>
            <Checkbox 
            value = {false} 
            title="arroz" />
            </div>}  
        middle ={<div> sua lista de compras </div>}       
        right ={<div> estatisticas</div>}       
        
        />

    </Container>
    </Wrapper >
}


export default App