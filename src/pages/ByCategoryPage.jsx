
import Layout from "../layout/layout";
import BlogList from "../component/BlogList";


const ByCategoryPage = () => {
    return (
        <Layout>
            <h2>Hi I'm from by category page / category wise blog will be show here</h2>
            
                <BlogList />
           
        </Layout>
    );
};

export default ByCategoryPage;