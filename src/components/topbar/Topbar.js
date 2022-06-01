import './topbar.scss';
import { Person, Mail } from '@mui/icons-material'

export default function Topbar({open,setMenu}) {


    // const [menuOpen, setMenuOpen] = useState(false);

    // const HamburgerHandler = () => {
    //     setMenuOpen(!menuOpen)
    // }

    return (
        <div className={'topbar ' + (open && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>React Web</a>
                    <div className='itemContainer'>
                        <Person className='icon' />
                        <span >+234 231 44</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon' />
                        <span >react@.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenu(!open)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
