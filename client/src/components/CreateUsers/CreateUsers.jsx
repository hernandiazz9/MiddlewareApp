import React from 'react'


const CreateUsers = () => {
    return (
        <div>
            <form>
                <div>
                    <h1>Update your info</h1>
                </div>
                <div>
                    <label>Name:</label> 
                    <input type='text'
                    value='name'
                    />
                </div>
                <div>
                    <label>Lastname:</label> 
                    <input type='text'
                    value='lastname'
                    />
                </div>
                <div>
                    <label>Gmail:</label> 
                    <input type='text'
                    value='gmail'
                    />
                </div>
                <div>
                    <label>Github:</label> 
                    <input type='text'
                    value='github'
                    />
                </div>
                <div>
                    <label>Photo:</label> 
                    <input type='text'
                    value='photograph'
                    />
                </div>
                <div>
                    <label>Gender:</label> 
                    <input type='text'
                    value='gender'
                    />
                </div>
                <div>
                    <label>Phone:</label> 
                    <input type='text'
                    value='phone'
                    />
                </div>
                <div>
                    <label>Languages:</label> 
                    <select>
                    <option value="english">English</option>
                    <option selected value="spanish">Spanish</option>
                    </select>
                </div>
                <div>
                    <label>Technologies:</label> 
                    <input type='text'
                    value='technologies'
                    />
                </div>
               <div>
                    <button type='submit'>Finish</button>
               </div>
            </form>
        </div>
    )
}

export default CreateUsers;
