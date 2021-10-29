import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getLanguages, getTechnologies, putJuniors } from '../../redux/actions';
import styles from './ProfileUser.module.css';

const ProfileUser = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const languages = useSelector(state => state.languages);
    const technologies = useSelector(state => state.technologies);
    const users = useSelector(state => state.user);
    const [input, setInput] = useState ({
        lastname: "",
        description: "",
        github: "",
        gender: "",
        phone: "",
        languages: [],
        technologies: []
    })

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

	function handleReset(e) {
		setInput({
			...input,
			languages: [],
			technologies: [],
		});
	}

	function handleSelectLanguages(e) {
		setInput({
			...input,
			languages: [...input.languages, e.target.value],
		});
	}

	function handleSelectTechnologies(e) {
		setInput({
			...input,
			technologies: [...input.technologies, e.target.value],
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(putJuniors(users._id, input));
		setInput({
			lastname: '',
			description: '',
			github: '',
			gender: '',
			phone: '',
			languages: [],
			technologies: [],
		});
		history.push('/home');
		alert('Perfil Actualizado');
	}

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putJuniors(id, input))
        setInput({
            lastname: "",
            description: "",
            github: "",
            gender: "",
            phone: "",
            languages: [],
            technologies: []
        })
        history.push('/home')
        alert('Perfil Actualizado')
    };


	useEffect(() => {
		dispatch(getLanguages());
		dispatch(getTechnologies());
	}, [dispatch]);

    return (
        <div>   
            <Link className="btn btn-outline-dark me-2" to='/home' >Volver al inicio</Link>
                 <h1 >Tu Perfil</h1>
            <div className="card" >
            <img className={styles.user} src={users.photograph} alt='img' />
            <div className="card-body">
                <h5 className="card-title">Nombre: {users.name}</h5>
                <p className="card-text">Apellido: {input.lastname}</p>
                <p className="card-text">Sobre mi: {input.description}</p>
                <p className="card-text">Email: {users.gmail}</p>
                <p className="card-text">Github: {input.github}</p>
                <p className="card-text">Género: {input.gender}</p>
                <p className="card-text">Celular: {input.phone}</p>
                <p className="card-text">Idiomas: {input.languages + ',  '}</p>
                <p className="card-text">Tecnologías: {input.technologies + ',  '}</p>
            </div>
            </div>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Apellido:</label> 
                    <input type='text'
                    value={input.lastname}
                    name='lastname'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Sobre mi:</label> 
                    <input type='text'
                    value={input.description}
                    name='description'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Github:</label> 
                    <input type='text'
                    value={input.github}
                    name='github'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Género:</label> 
                    <input type='text'
                    value={input.gender}
                    name='gender'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Celular:</label> 
                    <input type='text'
                    value={input.phone}
                    name='phone'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Idiomas:</label> 
                    <select onChange={e => handleSelectLanguages(e)}>
                    {languages.map(el => {
                        return (
                            <option key={el._id} value={el.name}>{el.name}</option>
                        )
                    })};
                    </select>  
                </div>
                <div>
                     <label>Tecnologías:</label> 
                    <select onChange={e => handleSelectTechnologies(e)}>
                    {technologies.map(el => {
                        return (
                            <option key={el._id} value={el.name}>{el.name}</option>
                        )
                    })};
                    </select>
                </div>
               <div>
                    <button type='submit'>Actualizar</button>
               </div> 
            </form>
            <button onClick={e => handleReset(e)}>Reiniciar</button> 

        </div>
    )
}

export default ProfileUser;
