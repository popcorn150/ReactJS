import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Discovering best buddies', body: 'lorem ispum...', author: 'luigi', id: 1 },
        { title: 'Welcome to the party', body: 'lorem ispum...', author: 'yoshi', id: 2 },
        { title: 'Drive fast cars', body: 'lorem ispum...', author: 'luigi', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('hin don load ooo!')
        console.log(blogs)
    })

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
        </div>
    );
}

export default Home;