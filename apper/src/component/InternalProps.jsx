import React, { useState } from "react";
import '../App.css'; // Adjust the import according to your file structure
import Terminal from "./Terminal";

const InternalProps = () => {
    const [activeTab, setActiveTab] = useState('terminal');

    const renderContent = () => {
        switch (activeTab) {
            case 'terminal':
                return <p><Terminal/></p>;
            case 'transport':
                return <p>Transport Page Content</p>;
            case 'contact':
                return <p>Contact Details Page Content</p>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="d-flex align-items-start">
                <p
                    onClick={() => setActiveTab('terminal')}
                    className={`tab ${activeTab === 'terminal' ? 'active' : ''}`}
                >
                    Terminal
                </p>
                <p
                    onClick={() => setActiveTab('transport')}
                    className={`tab ms-4 ${activeTab === 'transport' ? 'active' : ''}`}
                >
                    Transport
                </p>
                <p
                    onClick={() => setActiveTab('contact')}
                    className={`tab ms-4 ${activeTab === 'contact' ? 'active' : ''}`}
                >
                    Contact Details
                </p>
            </div>
            <div className="full-underline"></div>
            <div className="mt-3">
                {renderContent()}
            </div>
        </div>
    );
};

export default InternalProps;
