import React, {useState, useEffect} from 'react'
import { db } from '../../firebaseConfig'
import { collection, getDocs, getDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useSelector } from 'react-redux'

export default function Chat(){

	const user = useSelector(state => state.user)

	var [message, setMessage] = useState('')
	var [state, setState] = useState({

		messages: []
	})

	function onChangeState(e){
		setMessage(e.target.value)
	}

	async function handleSubmit(e){
		e.preventDefault()
		if(message == '') return alert("No puedes enviar un mensaje vacio")
		const list = !state.messages ? [] : state.messages
		const newMessage = {
			from: "",
			to: "",
			id: !state.messages ? 0 : state.messages.length,
			text: message
		}
		list.push(newMessage)
		setMessage('')

		try{

			await setDoc(doc(db, "messages", "JOgk1Tb4ASSdZiWePocC"), {
				chat: list
			});
		}
		catch(err){
			console.log(err.message)
		}
	}

	const unsub = onSnapshot(doc(db, "messages", "JOgk1Tb4ASSdZiWePocC"), (doc) => {
		
		if(state.messages && doc.data() !== undefined){

			if(state.messages.length < doc.data().chat.length){
				setState({messages: doc.data().chat});
			}
		}
	});

	useEffect(async()=>{
		
		const docRef = doc(db, "messages", "JOgk1Tb4ASSdZiWePocC");
		const docSnap = await getDoc(docRef);
		let list = docSnap.data()
		console.log(docSnap.data())

		setState({
			messages: docSnap.data() !== undefined ? docSnap.data().chat : []
		})
	}, []);

	

	return (

		<div>

			<h3>Hello world</h3>

			<ul>
			{
				state.messages ? state.messages.map((e, i) => 

					<li key={i}>{e.text}</li>
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