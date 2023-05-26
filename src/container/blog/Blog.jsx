import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog06, blog04, blog05, aaaa, blog07 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 >"A project is complete when it starts working for you, rather than you working for it."<br /> Here are some of my Projects..</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      </div>
      <div className="gpt3__blog-container_groupB">
      <Article link="https://github.com/anshikabhatia13/Brain-Tumour-Subregion-Segmentation_Brats21" imgUrl={blog06} date="May 12, 2023"          text="This is the End Semester project for CS517 Image Processing and Analysis under Dr Puneet Goyal. In this project, we had to apply deep learning models for the subregion segmentation of brain tumour on Brats21 Dataset. Click here for more information." />
        <Article link="https://github.com/anshikabhatia13/Vehicle_Speed_tracker"  imgUrl={blog02} date="Dec 15, 2022"                              text="This project is done under Dr Shashi Shekher Jha. It detects speed of a moving object using microcontroller using Jetson Nano." />
        <Article link="https://github.com/anshikabhatia13/Real-Time-Image-Processing-in-Security-Applications" imgUrl={aaaa} date="March 31, 2023" text="This project is done under Dr Puneet Goyal. In this project, I analyze the results and techniques used in three research papers." />
        <Article link="https://github.com/anshikabhatia13/CS201_DSA_Quadtrees" imgUrl={blog01} date="Nov 7, 2022"                                  text="This project is done under Dr Anil Shukla.In this project, Quadtrees are implemented to detect collision in Autonomous Vehicles." />
        <Article link="https://github.com/anshikabhatia13/Mie-Theory-Nanoparticle-Tracking" imgUrl={blog07} date="May 26, 2023"                    text="In this project I am including the codes that I wrote for nano particle tracking and Analysis using Mie-Theory for my Matlab and Image Processing Internship. This is an ongoing project done under Dr Neelkanth Nirmalkar." />
        <Article link="https://github.com/anshikabhatia13/CS202-B---Compiler" imgUrl={blog05} date="May 6, 2023"                                   text="This project is done under Dr Deepti Bathula. We have created a compiler for a toy language B-- using the languages Flex and Bison." />
      </div>
    </div>
  </div>
);

export default Blog;