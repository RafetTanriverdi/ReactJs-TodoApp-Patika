import React,{useState,useEffect} from 'react'


const initialFormValues={listElement:"", isActive:true};
function Header({contacts,setContacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(()=>{setForm(initialFormValues);},[contacts])

    const onChangeInput = (e)=>{setForm({listElement:e.target.value, isActive:true})}


  return (
    <div>
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(e)=>{e.preventDefault(); 
            if(form.listElement==""){
                return Header;
            }else {
                setContacts([...contacts,form])
            }
            }} >
                <input className='new-todo' placeholder="What needs to be done?" value={form.listElement} autoFocus onChange={onChangeInput}
                  />
            </form>
            <div className="main">
                <input  className='toggle-all' type="check-box" onChange={onChangeInput}  />
                <label htmlFor="toggle-all" onClick={()=>{
                    const newArray =[...contacts]
                    newArray.map((item)=>{
                        item.isActive =  !item.isActive
                    })
                    setContacts([...newArray])
                }}>Mark all as complate</label>
            
            </div>
        </header>
    </div>
  )
}

export default Header