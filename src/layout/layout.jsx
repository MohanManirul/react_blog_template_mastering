import { Link } from "react-router-dom";


const Layout = (props) => {
    return (
        <div className="container">
            <ul className="listDisplay">
                <li className="list">
                    <Link to={'/'}>Home</Link>
                </li>
                <li  className="list">
                    <Link to={'/by-category'}>CategoryItem</Link>
                </li>
                <li  className="list">

                <Link className="gitLink" to={'https://github.com/MohanManirul/react_blog_template_mastering'}>Git Link</Link>
                </li>
                
            </ul>
            {props.children}
        </div>
    );
};

export default Layout;