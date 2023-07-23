
import Layout from "../layout/layout";
import BlogList from "../component/BlogList";


const HomePage = () => {
    return (
        <Layout>
            <h3>I'm from home page / latest post will be show here</h3>
           
                <BlogList />
          
        </Layout>
    );
};

export default HomePage;