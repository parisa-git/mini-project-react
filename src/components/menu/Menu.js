import './menu.scss'

export default function Menu({ open, setMenu }) {
    return (
        <div className='menu'>
            <ul>
                <li onClick={() => setMenu(!open)}>
                    <a href='#Intro'>Intro</a>
                </li>
                <li onClick={() => setMenu(!open)}>
                    <a href='#Portfolio'>Portfolio</a>
                </li>
                <li onClick={() => setMenu(!open)}>
                    <a href='#Works'>Works</a>
                </li>
                <li onClick={() => setMenu(!open)}>
                    <a href='#Testiminials'>Testiminials</a>
                </li>
                <li onClick={() => setMenu(!open)}>
                    <a href='#Contact'>Contact</a>
                </li>
            </ul>
        </div >
    )
}
