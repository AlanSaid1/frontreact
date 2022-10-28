import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();//ejectuta el metodo de la clase padre
    this.state = {
      usuario:'',
      password:''
    }
    this.handleInput = this.handleInput.bind(this);//bind enlaza el contenido de la clase
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//te permite sobreescribir el nombre y la contraseña
  handleInput(e){
    const {value,name} = e.target
    //console.log(e.target.value)
    this.setState({
      [name]:value
    })
  }

  handleSubmit(e){//recibe el evento
    //evitar que cambie el recurso, que siga la pantalla
    e.preventDefault()
    console.log(this.state)
    fetch("http://localhost:8081/usuario/agregarUsuario", {
      method: 'POST',
      body: JSON.stringify({
        usuario : this.state.usuario,
        password : this.state.password
      }),
      headers:{
        'content-type':'application/json'
      }
    }).then(()=>{
      console.log('lo logre')
    }
  )}

  render(){
    console.log(this.state)
    return(
      <div className='App'>
        <div className='card'>
          <div className='card-header'>
            <p>Esto es una prueba compañere</p>
          </div>
          <div className='card-body'>
            <form onSubmit = {this.handleSubmit}>
              <div className='form-group'>
                <input type= "text" name = "usuario" onChange = {this.handleInput} placeholder ='Escribir usuario'/>
              </div>
              <div className='form-group'>
                <input type= "password" name = "password" onChange = {this.handleInput} placeholder ='Escribir password'/>
              </div>
              <button>Agregar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}




export default App;
