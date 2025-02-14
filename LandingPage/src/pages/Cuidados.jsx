import React from "react";

const Cuidados = () => {
    return (
        <article className="container-fluid mt-4 d-flex flex-column justify-content-center align-items-center">            
            <h1 className="text-center text-light mb-4">Informações importantes sobre Remoção e Micropigmentação</h1>
            <div className="justify-content-center row">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Cuidados Pós procedimento de Remoção de tatuagens e micropigmentação</h5>
                            <p className="card-text"></p>
                            <a type="button" className="btn btn-primary" href="https://drive.google.com/file/d/1_kP-BrcD5ZVIPajoqc4cwLAZzAB7NpgC/view?usp=drivesdk" target="_blank">Ler mais</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Cuidados Pós procedimento de Micropigmentação</h5>
                            <p className="card-text"></p>
                            <a type="button" className="btn btn-primary" href="https://drive.google.com/file/d/1_nqTFG7sJyw3arw1QkTdi59H_SGTCazX/view?usp=drivesdk" target="_blank">Ler mais</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/ROwSBhG2INs?si=ZLESqv1FK23RtM5Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </article>
    );
}

export default Cuidados;