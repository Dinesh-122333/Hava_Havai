import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ter from "../assets/ter_img.png";
import more from "../assets/More.png";
import btn from "../assets/Button.png";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Terminal() {
    const [cards, setCards] = useState([
        {
            id: 1,
            terminalName: "Terminal 1",
            metadata: "Optional metadata should be two lines."
        },
        {
            id: 2,
            terminalName: "Terminal 2",
            metadata: "Optional metadata should be two lines."
        }
    ]);
    const [lost, setLost] = useState(false);
    const [lounge, setLounge] = useState(false);
    const [moneyExchange, setMoneyExchange] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [selectedTerminal, setSelectedTerminal] = useState(null);

    const addCard = () => {
        const newCard = {
            id: cards.length + 1,
            terminalName: `Terminal ${cards.length + 1}`,
            metadata: "Optional metadata should be two lines."
        };
        setCards([...cards, newCard]);
    };

    const handleServiceClick = (service) => {
        setLost(service === 'lost');
        setLounge(service === 'lounge');
        setMoneyExchange(service === 'moneyExchange');
    };

    const handleCardClick = (card) => {
        setSelectedTerminal(card);
        setModalShow(true);
    };

    return (
        <>
            <div className="container">
                <div className="d-flex align-items-start" style={{ cursor: "pointer" }}>
                    <div className="row w-100">
                        {cards.map((card) => (
                            <div key={card.id} className="col-12 col-md-6 mb-4">
                                <div className="card h-100" onClick={() => handleCardClick(card)}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-5">
                                            <img src={ter} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-7">
                                            <div className="card-body">
                                                <div className="mb-1 d-flex justify-content-between align-items-start">
                                                    <h5 className="mb-0">{card.terminalName}</h5>
                                                    <img src={more} alt="" />
                                                </div>
                                                <p className="card-text">{card.metadata}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="m-5">
                        <button className="btn btn-outline-dark rounded-pill" style={{ whiteSpace: 'nowrap' }} onClick={addCard}>+ Add Terminal</button>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <h3>Services</h3>
                <p className="pt-5" style={{ cursor: "pointer" }} onClick={() => handleServiceClick('lost')}>Lost & found</p>
                <p className="border-bottom"></p>
                {lost && (
                    <div className="d-flex justify-content-between align-items-start">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Services Name</Form.Label>
                                    <Form.Control type="text" placeholder="Lost & found" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select defaultValue="Option1">
                                        <option>Option1</option>
                                        <option>Option2</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Sub Category</Form.Label>
                                    <Form.Select defaultValue="Option1">
                                        <option>Option1</option>
                                        <option>Option2</option>
                                    </Form.Select>
                                </Form.Group>
                               
                            </Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="" className="w-50" />
                            </Form.Group>
                        </Form>
                        
                        <div className="d-flex align-item-start mt-2">
                        <img src={btn} className=" me-5 my-4" style={{ cursor: "pointer" }} alt="" />
                        <Form className="pt-4 me-5">
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="Show image"
                            />
                        </Form>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-dark rounded-pill ">Save</button>
                            
                        </div> 
                    </div>
                )}

                <p style={{ cursor: "pointer" }} onClick={() => handleServiceClick('lounge')}>Lounge</p>
                <p className="border-bottom"></p>
                {lounge && (
                    <div className="d-flex align-items-start">
                        <p>This is Lounge Container</p>
                    </div>
                )}

                <p style={{ cursor: "pointer" }} onClick={() => handleServiceClick('moneyExchange')}>Money Exchange</p>
                <p className="border-bottom"></p>
                {moneyExchange && (
                    <div className="d-flex align-items-start">
                        <p>This is Money Exchange Container</p>
                    </div>
                )}          

            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                <Modal.Body className="m-3">
                    <h4>Terminal title</h4>
                    <p className="border-bottom"></p>
                    <p className="mb-4">Description</p>
                    <div className="d-flex justify-content-center mx-2">
                        <img src={btn} alt="" className="img-fluid me-5 my-2" />
                        <button className="rounded-pill px-3 py-2 ms-5 me-3 ">Cancel</button>
                        <button className="btn btn-outline-dark rounded-pill px-3 py-2">Continue</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
