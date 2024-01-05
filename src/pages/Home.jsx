import React, { useEffect } from 'react'
import Picture from './../assets/photo.jpg'
export default function Home() {

    useEffect(() => {
        document.title = "Carlos Alognon";
    })

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src={Picture} alt="Carlos Alognon" />
                        </div>
                        </div>
                        <h1 className="text-5xl font-bold">Carlos Alognon</h1>
                        <p className="py-6">
                            Je suis un développeur web full stack basé à Cotonou, Bénin. Je suis passionné par la création de logiciels qui améliorent la vie des gens.
                        </p>
                        <button className="btn btn-primary">
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
