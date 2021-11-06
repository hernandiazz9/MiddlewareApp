import React, {useEffect, useState} from 'react';


export default function Chat(){

	var [message, setMessage] = useState('')
	var [state, setState] = useState({

		message: [
	
			// {id: 0, text: "Hola"},
			// {id: 1, text: "Que tal?"}
		]})

	function onChangeState(e){
		setMessage(e.target.value)
		console.log(message)
	}

	function handleSubmit(e){
		e.preventDefault()
		const list = state.message
		const newMessage = {
			id: state.length,
			text: message
		}
		list.push(newMessage)
		setState({message: list})
		setMessage('')
	}


	useEffect(()=>{
		window.firebase.database().ref('messages/').on('value', snap => {
			const currentMessages = snap.val()
			if(currentMessages !== null){
				setState({
					message: currentMessages
				});
			}
		});
	}, []);

	return (

		<div>

			<h3>Hello world</h3>

			<ul>
			{
				state.message ? state.message.map(e => 

					<li key={e.id}>{e.text}</li>
				) : <h1>Cargando...</h1>
			}
			</ul>

			<form onSubmit={handleSubmit}>
				<input type="text" value={message} placeholder="Escríbe algo..." onChange={(e)=>onChangeState(e)} />
				<input type="submit"/>
			</form>
		</div>
	)
}