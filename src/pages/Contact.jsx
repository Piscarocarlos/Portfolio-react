import React from 'react'

export default function Contact() {
    return (
        <>
            <div className=" w-2/6 mt-20  m-auto">
                <div className="">
                    <h1 className="text-3xl text-center mb-3">Contact</h1>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                            <textarea placeholder="message" className="textarea h-24 textarea-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary uppercase text-xl">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
