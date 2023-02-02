import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { onSubmitData } from './hooks/usePostMail';

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onReset = () => {
        reset({
            prenom: "",
            nom: "",
            mail: "",
            texte: "",
        });
    };

    return (
        <div className='contactForm'>
            <h3>Contact</h3>
            <form className="formContact" onSubmit={handleSubmit(onSubmitData)}>
                <div className="formContainer">
                    <div className="divName">
                        <label className="labelForm" htmlFor="prenom">
                            Prénom <span id="obligatoire">*</span>
                        </label>
                        <input
                            id="userName"
                            type="text"
                            {...register("prenom", { required: true })}
                        />
                    </div>
                    <div className="divFirstName">
                        <label className="labelForm" htmlFor="nom">
                            Nom <span id="obligatoire">*</span>
                        </label>
                        <input
                            id="userFirstName"
                            type="text"
                            {...register("nom", { required: true })}
                        />
                    </div>
                    <div className="divMail">
                        <label className="labelForm" htmlFor="email">
                            E-mail <span id="obligatoire">*</span>
                        </label>
                        <input
                            id="userMail"
                            type="email"
                            {...register("mail", { required: true })}
                        />
                    </div>

                    <div className="divMessage">
                        <label className="labelForm" htmlFor="textearea">
                            Message <span id="obligatoire">*</span>
                        </label>
                        <textarea
                            name="formulaire-message"
                            id="formulaireMessage"
                            {...register("texte", { required: true })}
                        />
                    </div>
                    <span id="obligatoire">* les champs sont obligatoires</span>
                    <button id="btnFormEnvoyer" type="submit">Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;