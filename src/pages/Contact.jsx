import { useState, React } from "react"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
    const [payload, setPayload] = useState({
        name: "",
        email: "",
        message: ""
    });

    const applySendMail = (e) => {
        e.preventDefault();

        emailjs.send("service_6ts0ar5", "template_mrnnj7r", payload, "ytS2soZClzphPnz9m")
            .then(() => {
                toast.success("Votre message a bien été envoyé, nous vous répondrons dans 24h");
                setPayload({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi de l'e-mail :", error);
                toast.error("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.");
            });
    };

    const changePayload = (e) => {
        const { name, value } = e.target;
        setPayload(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
        <Toaster />
            <div className=" w-2/6 mt-20  m-auto">
                <div className="">
                    <h1 className="text-3xl text-center mb-3">Contact</h1>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={applySendMail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" value={payload.name} onChange={changePayload} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" value={payload.email}  onChange={changePayload} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                            <textarea placeholder="message" name="message" value={payload.message}  onChange={changePayload} className="textarea h-24 textarea-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary uppercase text-xl">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
