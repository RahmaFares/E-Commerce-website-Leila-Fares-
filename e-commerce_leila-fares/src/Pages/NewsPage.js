import React, { useEffect, useState } from "react";
import { NewsContainer, Heading, VideoContainer, VideoDescription } from '../styles/News.style'
import YouTube from 'react-youtube';
import { CHANNEL_ID } from '../Pages/config.js'

const NewsPage = () => {
    const API_KEY = 'AIzaSyCud3vzcKMigzo7Co7plAlcPLE7bhdIUkM';
    const CHANNEL_ID = 'UCm1nVrSaHhNWeWx2vMgpxzw';
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
                );
                const data = await response.json();

                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <NewsContainer>
            <Heading>NEWS</Heading>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>
            <p> Here you will find all the TV programs that I have joined before and any upcoming new</p>

            {videos.map((video) => (
                <VideoContainer key={video.id}>
                    <YouTube videoId={video.id} />
                    <VideoDescription>This is the first tv program I joined </VideoDescription>
                </VideoContainer>
            ))}
        </NewsContainer>
    );
};

export default NewsPage;
