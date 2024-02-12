import React from 'react';
import { Card, Grid } from '@mui/material';
import { blogimg1, blogimg2, blogimg3, blogimg4, blogimg5, blogimg6 } from '../../Assests/ImageExport/ImageExport';
import './BLogs.css'

const Blogs = () => {
    const Blogposts = [
        {
            title: "Web Design",
            Description: "Best Way to Design",
            img: blogimg1
        },
        {
            title: "Personal",
            Description: "Need to Get Started",
            img: blogimg2
        },
        {
            title: "Design",
            Description: "My Current Workspace",
            img: blogimg3
        },
        {
            title: "Technology",
            Description: "Latest Technology 2024",
            img: blogimg4
        },
        {
            title: "Best Editing Software",
            Description: "Inspired From",
            img: blogimg5
        },
        {
            title: "Latest UI Design",
            Description: "Best Software",
            img: blogimg6
        }
    ];

    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"70px"}}>Blogs</h1>
              <Grid container spacing={2}>
            {Blogposts && Blogposts.map((post, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className="blog-card"> 
                        <img src={post.img} alt="img" className="blog-img" />
                        <div className="blog-content">
                            <h3 className="blog-title">{post.title}</h3> 
                            <p className="blog-description">{post.Description}</p> 
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </div>
      
    );
};

export default Blogs;

