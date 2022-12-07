
import './App.css';
import { Home } from './components/Home';

  const array = [10,2,10,3,1,2]

const listar = () =>{

  alert("Olá")

}
 

function App() {
  return (<div>
    <h1> Lista de Tarefas </h1>
    <button onClick={()=>listar()}>Listar</button>
      
  
    </div>
  
  
  );
}

export default App;
