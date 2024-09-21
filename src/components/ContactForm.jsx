import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function ContactForm() {
	const [disabled, setDisabled] = useState(false);
	const [alert, setAlert] = useState({
		display: false,
		message: '',
		type: '',
	});
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

    const toggleAlert = (message, type) => {
        setAlert({
            display: true,
            message,
            type,
        });
        setTimeout(() => {
            setAlert({
                display: false,
                message: '',
                type: '',
            });
        }, 10000);
    }
	
	const onSubmit = async (data) => {
		const { name, email, subject, message } = data;
	
		try {
			setDisabled(true);
	
			const templateParams = {
				name,
				email,
				subject,
				message,
			};
			await emailjs.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_PUBLIC_KEY,
			);
			toggleAlert('Message sent!', 'success');
		} catch (error) {
			console.error('Error sending message:', error);
			toggleAlert('Error sending message', 'error');
		} finally {
			setDisabled(false);
			reset();
		}
	};

	return (
		<>
			<form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Name"
					name="name"
					{...register('name', {
						required: { value: true, message: 'Please enter your name' },
					})}
				/>
				{errors.name && <p className="error">{errors.name.message}</p>}
				<input
					type="input"
					placeholder="Email"
					name="email"
					{...register('email', {
						required: { value: true, message: 'Please enter your email' },
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				{errors.email && <p className="error">{errors.email.message}</p>}
				<input
					type="input"
					placeholder="Subject"
					name="subject"
					{...register('subject', {
						required: { value: true, message: 'Please enter a subject' },
					})}
				/>
				{errors.subject && <p className="error">{errors.subject.message}</p>}
				<textarea
					placeholder="Message"
					name="message"
					rows={7}
					{...register('message', {
						required: { value: true, message: 'Please enter a message' },
					})}

				></textarea>
				{errors.message && <p className="error">{errors.message.message}</p>}
				<button type="submit">Send</button>
			</form>
            {alert.message && (
                <div className={`alert-${alert.type}`}>
                    {alert.message}
					{alert.type === 'error' && (
						<p>Try again later or contact me directly at <a href='mailto:njmeister99@gmail.com'>njmeister@gmail.com</a>
						</p>
					)}
                </div>
            )}
		</>
	);
}

export default ContactForm;
