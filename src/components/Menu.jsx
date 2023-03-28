import React, { useRef, useState } from 'react';
import {BsFillCloudUploadFill} from 'react-icons/bs';
import {AiOutlineLogin, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineManageAccounts} from 'react-icons/md'
import ImageUpload from './imageUpload';




function Menu(props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true)
    };

    const closeModal = () => {
        setShowModal(false)
    };



    const login = ()=> {
        console.log('Log me in')
    }

    const logout = ()=> {
        console.log('Log me out')
    }

    const account = () => {
        console.log('Go to Account page')
    }


    return (
        <div className='menu'>
            Menu
            <div className='menuItems'>
                <div className='icons'>
                    
                        <BsFillCloudUploadFill onClick={openModal}/>
                    
                </div>
                <div className='icons'><MdOutlineManageAccounts onClick={account}/></div>
                <div className='icons'><AiOutlineLogin onClick={login} /></div>
                <div className='icons'><AiOutlineLogout onClick={logout} /></div>
                
            </div>
            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <button className='close-button' onClick={closeModal}>
                            Close
                        </button>
                        <ImageUpload />
                    </div>
                </div>
            )}

        </div>
    );
}

export default Menu;