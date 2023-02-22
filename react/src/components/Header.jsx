import React from "react";
import { useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


function Header () {
    const [hire, setHire] = useState('')
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Hello, I Am</h2>
                                <h1>Hsiaohan Yeh</h1>
                                <p>GCP Customer Engineer with 2 years of work experience, successfully coordinating with interdepartmental personnel and fulfilling customer needs systematically.</p>
                                {/* <div className="header_buttons"> */}
                                    {/* <a href="header" className="btn btn-outline"> */}
                                        <Button label="Hire Me" icon="pi pi-external-link" onClick={() => setHire(true)} />
                                        <Dialog header="My advantage" visible={hire} style={{ width: '50vw' }} onHide={() => setHire(false)}>
                                            <p className="m-0">
                                            Learning and acquiring new skills motivate me. Possesses an eye for beauty, displays a confident attitude, and eagerly embraces challenges.
                                            </p>
                                        </Dialog>
                                    {/* </a> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./image/header-right-img.png" alt="" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;