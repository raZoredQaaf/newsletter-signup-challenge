import React, {useState} from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add email to database here...
        if (email) {
        // You can send the email to your server here
        setIsSubmitted(true);
        }
    };
  return (
    <div>Newsletter</div>
    
  )
}

export default Newsletter