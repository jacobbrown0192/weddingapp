import React, { Component } from 'react'

class FullWidthCentered extends Component
{
    render()
    {
        return(
            <div className="full_width_centered">
                <div className="latest_posts">
                    <h2>FROM THE BLOG</h2>
                    <div className="left13">
                        <div className="latest_post">
                            <div className="post_info">
                                <span className="post_date">20 JUNE 2015</span>
                                <h3><a href="blog-single.html">THE PROPOSAL WAS AMAZING</a></h3>
                                <a href="blog-single.html" className="post_read_more">READ MORE</a>
                            </div>
                            <img src="images/post_thumb1.jpg" alt="" title="" />
                        </div>
                    </div>
                    <div className="left13">
                        <div className="latest_post">
                            <div className="post_info">
                                <span className="post_date">18 MAY 2015</span>
                                <h3><a href="blog-single.html">OUR ROMANTIC HONEYMOON IN VENICE</a></h3>
                                <a href="blog-single.html" className="post_read_more">READ MORE</a>
                            </div>
                            <img src="images/post_thumb2.jpg" alt="" title="" />
                        </div>
                    </div>
                    <div className="left13_last">
                        <div className="latest_post">
                            <div className="post_info">
                                <span className="post_date">31 MARCH 2015</span>
                                <h3><a href="blog-single.html">LOVE IS COMPOSED OF A SINGLE SOUL</a></h3>
                                <a href="blog-single.html" className="post_read_more">READ MORE</a>
                            </div>
                            <img src="images/post_thumb3.jpg" alt="" title="" />
                        </div>
                    </div>
                    <a href="blog.html" className="view_all">VIEW ALL POSTS</a>
                    <div className="clear"></div>
                </div>
            </div>
    )
    }
}

export default FullWidthCentered