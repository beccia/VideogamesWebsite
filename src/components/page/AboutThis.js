import React, { Component } from 'react';
import Header from '../Header'


const AboutThis = () => {
        return (
            <div className="article">
                <h1 className="header">
                    <Header text="About this website" />
                </h1>
                <div className="article-main-body">
                <div>
                    <img className="about-img" src={require("../../images/forum_romanum.jpg")}></img> <br/>
                    </div>
                <div className="article-main-text">
                    <p>
                    The aim of this website and of it’s reviews is to get a certain way of looking at and enjoying videogames more out there. Throughout the years I have notice that many times I had a point of view that was often different then most opinions out in mainstream videogame journalism (of course, not to say that I don't like AAA titles or anything, I do many times love those as well) and on the internet there were always some  othr people with similar opinions as well so I thought it was time to just send it all out there. I probably won’t finish new games fast enough to have a review ready near release date, so the reviews are meant for people who are curious to try some game out or who just want to exchange points of view rather than to have a verdict for any freshly released game, or to discuss upcoming games & trends in the world of videogames.  
                    <br/><br/>I am not a professional reviewer with limited time for playing games. You might think “hey there’s only positively rated games, where the 4/10’s and ranty reviews? “. Since I review the games I have played because I want to play them, and I play games I like I probably will be positive in all my reviews. But it’s not about the grade anyway, it’s about the exchange of ideas and perspectives about a certain game.
                    <br/><br/>I believe all reviewing is subjective. Sure, things like “bad” gameplay mechanics or graphically ugly or erroneous execution exist, but especially if you leave out the extremes of things that are shit or that everybody loves there is a lot of room for tastes, opinions and matching with what you want form a game. For example 2 games which gave me one some of my all-time favourite gaming experience have been Ring of Red (PS2) Resonance of Fate (Ps3/Xbox 360, with PS4 remake) which have never been famous “must play” titles. I just really loved some aspects of these games which made them amazing for me while maybe not everyone would think they’re great. So in my reviewing it is always implied that I’m sharing my view and not to make a judgement that “objectively” means anything about the quality of a game. 
                    <br/><br/>Quantifying subjective information doesn’t make it less subjective. In my reviews you find an overall report style “score” and a 5 star scale sub scores. But these are not directly related and they might diverge. The reason for the subscores is because they might be , how I’d say for example Yakuza 0 might not be the best game overall but it has this vibe to it which is awesome so you might want to give it a try just for that. So the numbered scores should be treated as a way to express an opinion on a min-max scale but not as a way of expressing truth or objectivity.
                    <br/><br/>Playtime is not a linearly positive thing. I’ll probably do a separate article about this point of view soon, but in short: game length is not treated as a scoring thing. I vaguely remember thinking “wow that ended quickly” and feeling a bit disappointed after playing the first Rage game so a game can be too short, however this is very rare and most games are well between an okay range. What I mean is that a 30 hour game is not necessarily better than a 100 hour one, and a game that rewards your for doing 3 playthroughs more than one that doesn’t. And if it’s really good it’s always worthy of additional playthroughs anyway. 
                    <br/><br/>The purpose of games is positive experience. Well in a lot of cases this means “fun” but I avoided saying that the point of a game is fun explicitly. I believe games can be not per se “fun” but still “good”.  I’ll avoid the “is videogames art” discussion for now, but I will say that I believe that videogames as a medium is underestimated and that a lot of people miss out how as a storytelling medium it can have similar power to a good book or a good movie to stimulate people’s creative thinking, development of ideas and emptions and inspiration. The quality nowadays is ridiculously high already but if I cherrypick: f.e. the writing of Red Dead redemption 2 or (at least the original game of) Mass Effect is easily better than most movies and books out there today. Happy times.

                    </p>
                </div>
                </div>
            </div>
        );
    }

export default AboutThis;