


export const PasswordInputValidator =({onChange, formData, setFormData})=>{

   

    return (

        <>
            <label htmlFor="password">Introduce contraseña</label>
            <input onChange={onChange} name="password" id="password" type="text"/>
        </>
    )

}