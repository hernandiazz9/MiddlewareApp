import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { getLanguages, getTechnologies, putJuniors } from '../../redux/actions';
import styles from './ProfileUser.module.css';

const ProfileUser = () => {
    const dispatch = useDispatch();
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
        <h1 >Actualiza tu perfil:</h1>
        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <form className="row g-3 needs-validation" onSubmit={e => handleSubmit(e)} novalidate>
                <div className="col-md-4">
                    <label className="form-label">Apellido:</label> 
                    <input className="form-control" required
                    type='text'
                    value={input.lastname}
                    name='lastname'
                    onChange={handleChange}
                    />
                    <div className="valid-feedback">Campo compleado.</div>
                    <div className="invalid-feedback">Campo requerido!</div>
                </div>
                <div>
                    <label className="form-label">Sobre mi:</label> 
                    <input className="form-control" required
                    type='text'
                    value={input.description}
                    name='description'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Github:</label> 
                    <input className="form-control" required
                    type='text'
                    value={input.github}
                    name='github'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Género:</label> 
                    <input className="form-control" required
                    type='text'
                    value={input.gender}
                    name='gender'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Celular:</label> 
                    <input className="form-control" required
                    type='text'
                    value={input.phone}
                    name='phone'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Idiomas:</label> 
                    <select className="form-select" onChange={e => handleSelectLanguages(e)} required> 
                    {languages.map(el => {
                        return (
                            <option key={el._id} value={el.name}>{el.name}</option>
                        )
                    })}; 
                    </select>  
                </div>
                <div>
                     <label>Tecnologías:</label> 
                    <select className="form-select" onChange={e => handleSelectTechnologies(e)} required> 
                    {technologies.map(el => {
                        return (
                            <option key={el._id} value={el.name}>{el.name}</option>
                        )
                    })}; 
                    </select>
                </div>
               <div>
                    <button type="submit" class="btn btn-outline-dark" >Actualizar</button>
               </div> 
            </form>
            <button type="button" class="btn btn-outline-dark" onClick={e => handleReset(e)}>Borrar</button> 
            </div>
        </div>
    )
}

export default ProfileUser;
