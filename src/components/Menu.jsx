import React from 'react';
import {BsFillCloudUploadFill} from 'react-icons/bs';
import {AiOutlineLogin, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineManageAccounts} from 'react-icons/md'




function Menu(props) {

    const uploadPhoto = () => {
        console.log('I upload a Photo')
    }

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
                <div className='icons'><BsFillCloudUploadFill onClick={uploadPhoto} /></div>
                <div className='icons'><MdOutlineManageAccounts onClick={account}/></div>
                <div className='icons'><AiOutlineLogin onClick={login} /></div>
                <div className='icons'><AiOutlineLogout onClick={logout} /></div>
                
            </div>

        </div>
    );
}

export default Menu;