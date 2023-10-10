import React, {useState} from 'react'

export const Form = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
   

    const next=()=>{
        setVisible1(false)
        setVisible2(true)
    }
    const next2=()=>{
        setVisible2(false)
        setVisible3(true)
    }
    
    const submitForm=()=>{
       
        return false;
    }
    const previous1=()=>{
        setVisible1(true)
        setVisible2(false)
        setVisible3(false)
        
    }
    const previous2=()=>{
        setVisible1(false)
        setVisible2(true)
        setVisible3(false)
       
    }
    
    
  return (
    <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <form id="msform" className="form-horizontal">
               
                <fieldset style={{display: visible1 ? 'block' : 'none'}}>
                    <h2 className="fs-title">Register now</h2>
                    <h3 className="fs-subtitle">Registration Charges RS 9,500.00<br></br>To register, click the button below:</h3>
                   
 

                    <a href="https://docs.google.com/forms/d/1W4tPfESYdAwjVhypxDPNgPiRKd_I8iBPKsTujKXDndU/edit" target='_blank'  className="next action-button">Register now</a>
                </fieldset>

                
            </form>
        </div>  
    </div> 
  )
}
