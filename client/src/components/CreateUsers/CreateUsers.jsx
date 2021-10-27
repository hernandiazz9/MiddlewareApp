import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLanguages, getTechnologies, postUser } from '../../redux/actions';
import styles from './CreateUsers.module.css';
 

const CreateUsers = () => {
    const dispatch = useDispatch();
    const languages = useSelector(state => state.languages);
    const technologies = useSelector(state => state.technologies);
    const [input, setInput] = useState ({
        name: "",
        lastname: "",
        gmail: "",
        github: "",
        gender: "",
        phone: "",
        languages: [],
        technologies: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };
    

    function handleSelectLanguages(e) {
        setInput({
            ...input,
            languages: [...input.languages, e.target.value]
        })
    };

    function handleSelectTechnologies(e) {
        setInput({
            ...input,
            technologies: [...input.technologies, e.target.value]
        })
    };
    console.log(input)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postUser(input))
        setInput({
            name: "",
            lastname: "",
            gmail: "",
            github: "",
            gender: "",
            phone: "",
            languages: [],
            technologies: []
        })
    };

    useEffect(() => {
        dispatch(getLanguages());
        dispatch(getTechnologies());
    }, [dispatch])

    return (
        <div>   
                 <h1 >Update your profile</h1>
                <div>
                    <img className={styles.user} src='https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png' alt='img' />
                </div>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name:</label> 
                    <input type='text'
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Lastname:</label> 
                    <input type='text'
                    value={input.lastname}
                    name='lastname'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gmail:</label> 
                    <input type='text'
                    value={input.gmail}
                    name='gmail'
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
                    <label>Gender:</label> 
                    <input type='text'
                    value={input.gender}
                    name='gender'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone:</label> 
                    <input type='text'
                    value={input.phone}
                    name='phone'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Languages:</label> 
                    <select onChange={e => handleSelectLanguages(e)}>
                    {languages.map(el => {
                        return (
                            <option key={el._id} value={el.name}>{el.name}</option>
                        )
                    })};
                    </select>
                </div>
                <div>
                     <label>Technologies:</label> 
                    <select onChange={e => handleSelectTechnologies(e)}>
                    {technologies.map(el => {
                        return (
                            <option key={el._id} value={el.name}>{el.name}</option>
                        )
                    })};
                    </select>
                    
                </div>
               <div>
                    <button type='submit'>Update</button>
               </div> 
            </form>
        </div>
    )
}

export default CreateUsers;
