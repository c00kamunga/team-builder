import React, {useState} from 'react';

const Form = (props) => {
const[formData, setFormData] = useState({
    name: '',
    role: '',
    email: ''
})

const handleChange = (event) => {
    console.log("event", event.target)
    setFormData({...formData, [event.target.name]: event.target.value})
};

const handleSubmit = (event) => {
    event.prevent.Default()
    props.addMember(formData)
    setFormData({name: "", role: "", role:""})
}

return (
<div>

</div>
);
}