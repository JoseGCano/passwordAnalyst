import { useState } from "react"
import { PasswordInputValidator } from "../passwordInputValidator"




export const FormPasswordSecurityAnalyst =()=>{

    const [formData, setFormData] = useState(
       { 
        password: "",
        checked: false
        }
    )

    const [passWordIsValid, setPassWordIsValid] = useState(false)

    const scoreLength = (length)=>{
        switch (length) {
            case length >12:
                return 3
            case length > 9:
                return 2
            case length >7:
                return 1
            default:
                return 0
        }
    }

    const useWords = (password)=>{
        let capitalAlphabet = /[A-Z]/
        let lowerCaseAlphabet = /[A-Z]/
        if(capitalAlphabet.test(password)){
            
        }
    }

    const CheckPasswordIsValid =()=>{

        let points = 0
        
        points += scoreLength(formData.password.length)
        points
        
    }

    const onChangeHandlerInput = (event)=>{
        if(event.target.name === "checked"){
            setFormData({
                ...formData, 
                [event.target.name] : event.target.checked
            })
        }else{

            setFormData({
                ...formData, 
                [event.target.name] : event.target.value
            })
        }

        CheckPasswordIsValid()

    }
    

    return (
        <div>
            <form>
                <PasswordInputValidator formData={formData} setFormData={setFormData} onChange={onChangeHandlerInput}/>

                <label htmlFor="checked">Tu contraseña es débil. Se requiere confirmación que quiere una contraseña débil </label>
                <input onChange={onChangeHandlerInput} name="checked" id="checked" type="checkbox"/>

                <button>Validar</button>
            </form>
            
        </div>
    )

}