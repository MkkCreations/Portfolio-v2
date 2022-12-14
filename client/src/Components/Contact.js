import {useState} from 'react';


const Contact = ({contact, setContact}) => {

  const [isActive, setIsActive] = useState(false);

  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }
  
  let {name, email, number, message} = contact;

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || number === '' || message === '') {
      alert('Rellene todos los campos');
      return
    }
    
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(contact)
    }
    fetch('https://portfolio-v2-production-b10f.up.railway.app/api', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))

    setContact({
      name: '',
      email: '',
      number: '',
      message: ''
    });
    setIsActive(current => !current);
    setTimeout(() => {
      setIsActive(current => !current);
    }, 8000);
    
  }


  return (
    <div className='divcontainer2'>
      <h3><hr/> Contact <hr/></h3>

      <section>
        <div>
          <p>Click to copy</p>
          <button 
            type='button' 
            id='btnemail' 
            className='btn-clipboard'  
            data-bs-original-title="Copy to clipboard" 
            aria-describedby='tooltip779750' 
            onClick={() =>navigator.clipboard.writeText('khaffoum@gmail.com')} >
              <b>Email:</b> khaffoum@gmail.com 
          </button>
      
          <button 
            type='button' 
            id='btnemail' 
            className='btn-clipboard'  
            data-bs-original-title="Copy to clipboard" 
            aria-describedby='tooltip779750' 
            onClick={() => navigator.clipboard.writeText('+33 641 97 45 07')} >
              <b>Phone:</b> +33 641 97 45 07 
          </button>
        </div>
        
        
        <form id='contactform' onSubmit={handleSubmit}>

          <div 
            className="alert alert-success" 
            role="alert" 
            style={{visibility: isActive ? 'unset': 'hidden'}}>
            Send successfully !
          </div>

          <div className="form-floating mt-3 text-start">
            <input 
              type='text' 
              name='name' 
              value={name} 
              onChange={handleChange}
              className="form-control" 
              id="floatingInput" 
              placeholder="Name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating mt-3 text-start">
            <input 
              type='email' 
              name='email' 
              value={email} 
              onChange={handleChange}  
              className="form-control" 
              id="floatingInput" 
              placeholder="Email"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mt-3 text-start">
            <input 
              type='number' 
              name='number' 
              value={number} 
              onChange={handleChange} 
              className="form-control" 
              id="floatingInput" 
              placeholder="Number"
            />
            <label htmlFor="floatingInput">Number</label>
          </div>
          <div className="form-floating mt-3 text-start">
            <textarea 
              type='text' 
              name='message' 
              value={message} 
              onChange={handleChange} 
              className="form-control" 
              id="floatingInput" 
              placeholder="Messaje"
            ></textarea>
            <label htmlFor="floatingInput bg-dark">Message</label>
          </div>

          <button className="btn btn-outline-light" type='submit'>Send</button>
          

        </form>
          
      </section>
    </div>
  );

}

export default Contact;