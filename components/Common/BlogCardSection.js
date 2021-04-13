import React, { Component } from 'react';
import Link from 'next/link';

class BlogCardSection extends Component {
    render() {
        return (
            <section className="blog-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Blog</span>
                        <h3>Read Our Latest Articles</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog/blog-1.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>02</li>
                                        <li>November</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li> */}
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="#">
                                            <a>
                                                <h3>Startup Marketing Solution for Business Owner</h3>
                                            </a>
                                        </Link>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="#">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog/blog-2.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>03</li>
                                        <li>November</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li> */}
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="#">
                                            <a>
                                                <h3>How To Boost Your Digital Marketing Agency</h3>
                                            </a>
                                        </Link>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="#">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog/blog-3.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>03</li>
                                        <li>November</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li> */}
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="#">
                                            <a>
                                                <h3>Creative solutions to improve your business!</h3>
                                            </a>
                                        </Link>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="#">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogCardSection;