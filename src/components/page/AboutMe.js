import React, { Component } from 'react';
import Header from '../Header'


const AboutMe = () => {
        return (
            <div className="article">
                <h1 className="header">
                    <Header text="About me" />
                </h1>
                <div className="article-main-body">
                <img className="about-img" src={require("../../images/wario_land.jpg")}></img> <br/>
                <div className="article-main-text">
                    <p>
                    I live in a small country called The Netherlands with my fiancé and cat and work as a software developer, but I’ll keep it videogame-related form here on:<br/><br/>
        At 7 years old I got a Game Boy for the holidays, with Wario Land. The music and the world map were full of magic and I loved the hell out of that game. Besides this one, I don’t really remember so many but that’s probably also because I got a SNES shortly after and played mostly on that since.
        <br/><br/>My most memorable games where the Donkey Kong Country trilogy and Lufia: Rise of the Sinistrals. In my opinions the SNES was glorious because the graphics were at a sweet spot of simple pixely but good looking, and there’s some really amazing video game music in this time. Thinking of the artwork and OST of Yoshi’s Island for example still gives me this warm fuzzy feeling inside.
        N64. This was Nintendo’s prime for me. Mario 64 was beyond amazing at that time, and to this day Zelda: OO is my all time greatest videogame memory. It looked insanely good the music and artwork were so full of soul and the first time getting out of Kokiri forest, having the Hyrule field theme kick in and seeing this whole world there before you is still the pea feeling of videogames ever. I used to actually set my alarm clock 2 hour earlier to play that shit before school.  
        <br/><br/>After that I picked up a Playstation 2 rather than what would’ve been the obvious choice, the Nintendo Gamecube. Why? Because as an early high-schooler I made short-term decisions and I got the money to buy one at the start of school’s summer recession and looking at the games available at that time, I saw GTA III and Final Fantasy next to each other among the PS games, while for the Gamecube there’s was basically nothing out I wanted to play at that time (it was still quite new). And I have enjoyed it loads. 
        <br/><br/>Some years later I got a Xbox 360, around that time I was around 20 years old and my social life was  at that time more important to me than before and I basically went Xbox because friends I wanted to play online with (Modern Warfare, Borderlands, Battlefield) were on that system. My only worry initially  was  JRPG’s but I still had some cool ones like  Lost Odyssey, Resonance of fate and Final Fantasy XIII on that so I was happy.
        <br/><br/>At some point I got a bit tired of online multiplayer shooters and got a PS4 and I love it. There’s always people out there complaining that videogames today are bad and that it’s not what it used to be, and I really don’t get this. Sure, I sometimes mis the charm of the SNES era but there’s so many great, beautiful games out there today and the polish and detail to help you immerse is so great. Playing Bloodborne on my fresh PS4 I realized sgreatness. 
        At the time of writing I am playing Death Stranding, Red Dead Redemption 2 with still the occasional game of Mortal Kombat 11 game in between because I just love the MK universe ever since having to hide the first one under my bed to play it at night when I was little. I have started some small game development passion projects as well and will probably link to it somewhere here when there is something to show. <br/><br/>
        For sharing your opinions, requests, suggestions etc.olive you can contact me at basedvideogames@gmail.com. Please keep it polite.
                    </p>
                </div>
                </div>
            </div>
        );
    }

export default AboutMe;