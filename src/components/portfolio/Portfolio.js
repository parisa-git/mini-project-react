import { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss';
import { brandingPortfolio, designPortfolio, mobilePortfolio, webPortfolio, featuredPortfolio } from '../../data'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "branding":
                setData(brandingPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected]);

    return (
        <div className='protfolio' id='Portfolio'>
            <h1>Portfolio </h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} id={item.id}
                        setSelected={setSelected} />
                ))}
            </ul>
            <div className='container'>
                {data.map((d) => (
                    <div className='item' >
                        <img src={d.img} />
                        <h3>{d.tilte}</h3>
                    </div>
                ))}


            </div>

        </div>
    )
}
