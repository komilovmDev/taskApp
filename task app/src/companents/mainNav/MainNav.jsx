import { BiSolidLock } from 'react-icons/bi'
import './mainNav.css'

export default function MainNav() {
    return (
        <>
            <div className="mainNav">
                <h5>All Boards</h5>
                <button>+ Add</button>
            </div>
            <div className="mainNavModel">
                <div className="mainNavModelCard">
                    <button className='close'>X</button>
                    <input type="text" placeholder="Add board title" />
                    <button><BiSolidLock /><h5>Private</h5></button>
                    <div className="btns">
                        <button>Canel</button>
                        <button>+ Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}