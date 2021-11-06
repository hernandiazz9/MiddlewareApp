import React, {useState, useEffect} from 'react'
import { db } from '../../firebaseConfig'
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";


export default function Chat(){

	var [message, setMessage] = useState('')
	var [state, setState] = useState({

		messages: [
	
			// {id: 0, text: "Hola"},
			// {id: 1, text: "Que tal?"}
		]})

	function onChangeState(e){
		setMessage(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		const list = state.messages
		const newMessage = {
			id: state.length,
			text: message
		}
		list.push(newMessage)
		setState({messages: list})
		setMessage('')
	}

	useEffect(async()=>{
		
		const querySnapshot = await getDocs(collection(db, "messages"));
		var list = state.messages
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			list.push(doc.data())
		});
		setState({
			messages: list
		})
		console.log(state.messages, list)
	}, []);

	// const unsub = onSnapshot(doc(db, "messages", "SF"), (doc) => {
	// 	console.log("Current data: ", doc.data());
	// });

	return (

		<div>

			<h3>Hello world</h3>

			<ul>
			{
				state.messages ? state.messages.map(e => 

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