import React, { useState } from 'react'
import { Col,Form, Row } from 'react-bootstrap'
import DatePicker from 'react-date-picker';


const GeneralDetails = () => {

    const [petType, setPetType] = useState("")
    const [genderType, setGenderType] = useState("")
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div className="bg-img">
                <div className="responsive-logo_name">
                    <div className="signin_logo_content">
                        <img src="./assets/img/color-logo.png" alt="" />
                        <p className="page_name">Sign In</p>
                    </div>
                </div>
                <div className="signin">
                    <Row className='p-0' style={{ height: "100%",}}>
                        <Col sm={12} md={12} lg={5} xl={5} xxl={4} className="p-0 general-info">
                            <div className="signin_forn">
                                <h1 className="titel-text">General details</h1>
                                <div className="profile">
                                    <img src='./assets/img/Claw.png' className='claw-img' alt=""/>
                                    <div className='camera-div'>
                                        <img src="./assets/img/camera.png" className='camera-img' alt="" />
                                    </div>
                                </div>
                                <label htmlFor="Petname">Pet name</label>
                                <input type="text" id='Petname'/>
                                    <label htmlFor="" className='petTypeLabel'>type</label>
                                <div className='typeofPet'>
                                    <button  className={petType === "dog" ?' active' :"disable" } onClick = {()=>{setPetType("dog")}}><img src="./assets/img/dog.png" alt="" />dog</button>
                                    <button  className={petType === "cat" ?' active' :"disable" } onClick = {()=>{setPetType("cat")}}><img src="./assets/img/cat.png" alt="" />cat</button>
                                </div>
                                    <label htmlFor="" className='genderLabel'>gender</label>
                                <div className='typeofgender'>
                                    <button className={genderType === "female" ?' active' :' disable'} onClick = {()=>{setGenderType("female")}}>female<img src="./assets/img/female.png" alt="" /></button>
                                    <button className={genderType === "male" ?' active' :' disable'} onClick={()=>{setGenderType("male")}}>male<img src="./assets/img/male.png" alt="" /></button>
                                </div>
                                <div className='datePicker-div'>
                                    <label htmlFor="" >date of birth</label>
                                    <DatePicker  className="datepicker" onChange={onChange} value={value} />
                                    <p>* If not known, then approximate</p>
                                </div>
                                <div className='chip-num-div'>
                                    <label htmlFor="">Chip number (if known)</label>
                                    <input type="text" />
                                </div>
                                <div className='physical-info-div'>
                                    <h1 className='titel-text'>physical characteristics</h1>
                                    <label htmlFor="">breed</label>
                                    <input type="text" />
                                    <p>* If mixed breed, write the dominant breed down</p>
                                    <label htmlFor="">Weight</label>
                                    <div className='Weight-div'>  
                                        <p>Kg</p>                                   
                                        <input type="text" className='Weight'/>
                                    </div>
                                </div>
                                <div className='medical-info-div'>
                                    <h1 className='titel-text'>medical details</h1>
                                    <p>medical documents</p>
                                    <p className='sub-p'>*recommended to ask the attending clinic</p>
                                    <input type="file" className='input-file' />
                                    <input type="text" className='input-file-name'/>
                                    <label htmlFor="" className='text-aeria'>Things the vet should know</label>
                                    <textarea className='textarea' placeholder='Allergies, chronic diseases, medical history, what he is afraid of, his favorite candy, etc.' />
                                 
                                        <Form.Group className="ckeckbox-label-div">
                                            <label htmlFor="" className='check-label'>Sterilized / neutered</label>
                                            <Form.Check
                                                type="checkbox"
                                                className='checkbox'
                                             />
                                        </Form.Group>
                                        <button className='add-pet'> + Add another pet</button>
                                        <button className='finish-btn'>Finish Sign Up</button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={7} xl={7} xxl={8} className="p-0">
                            <div className="signin_logo">
                                <div className="signin_logo_content">
                                    <img src="./assets/img/logo.png" alt="" />
                                    <p className="page_name">add pet</p>
                                    <img src="./assets/img/firstadd-kit.png" alt="" className="firstadd-kit" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default GeneralDetails