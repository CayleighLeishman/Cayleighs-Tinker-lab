may 22nd

okay i figired ut why i felt like i had nothing done.

Basically i did two pages for "this is my project." I ha "about cayleigh" and the index (home) page. 

So because of that I was stuck. I decided to move everyuthing onto the index page, and remove the about cayleigh page. I think it was a good idea, because now it's all on the same page. 

but now im doubting the pink design. i love the color scheme, and I''m sticking to it, howver, i don't think that I wanat to keep it the way it is? 

i looked at some other sites for some inspriation and to see if i can narrow down what is sticking out at me. First off, most navigation pages are at the top TOP of the paeg. So i think i might make the navigation bar at the top of the page. I also think I might make the header a little bit smaller, and have it so that the text is more centered.

I still like the idea of having sparkles and ading annimation for the scavengerhunt page. so I'm going to add a frog animation once I can figure out how to do that. i found a site called "lottie" that has a lot of cute free animations. it looks like it should have the style I'm looking for, so I'm going to see if i can get that to work tomorrow. 

I also am a little stuck on how to "display" my projects, especially because not all of them are done. and while I love the idea of displaying the website and I want to keep it. I dont like the idea of doing screenshots as that dosen't feel accessible. I like the idea of having it so that it can "show" you the next page,and it would be cool if you could hover over it and it dosent open it but it shows you a preview of the page, and allows you to interact with it. I think that would be a cool idea, but I don't know if thats possible for how heavy the websites are. plus, not all of my websites have screensots or are even done.

I'm also goign to create a contact me page and have it set to send it to my work email. ("work" email is a little bit of a stretch, but it's the emial i use for anything where I might need to be proefssional.) I think it would be good to have a contact me page so that people can reach out to me. Plus its something I really want to add to my site for the "experience." 

debuggin gthough, I worked a lot on the navigation bar and the header. I finally got the header to be smaller and slightly more centered. I also got the navigation bar to be at the top of the page, and I think I like it. I also fixed inconsistenties with the navigation bar. (one page had home, and contact but not about me, and the other page had about me and contact but not home. I think I like it better this way.)

aaaand now i need to figure out why the sparkles are not showing up.



May 20th

I'm doing a lot of debugging today and feel like i got nothing done, but honestly i know i did. I', just exausted and still a little bit sick. 

May 13th

heeeey

its been a while,

So I've found a way to have a hover effect for a logo, you litterally just type it in code you dont have an image for it, so I'm going to see if I can get that to work

I found this from  [keenan.co](https://gkeenan.co/)

```html

    <header>
    <h1 id="keename"><a href="/">Keenan</a></h1>
    </header>
```
```css
 body > header {
    text-align: left;
    text-decoration: none;
    padding: 2rem 0.5rem 0rem 0.5rem;
    margin: 0 -12rem;
    box-sizing: border-box;
  }
  
  body > header h1 {
    max-width: 100%;
    margin: 5rem auto;
    text-decoration: none;
    color: var(--text-light);
  }

  #keename a{
    color: var(--text-light);
    text-decoration: none;
    transition: color .25s;
    position: static;
    max-width: fit-content;
  }

  #keename a:hover {
    color: var(--accent);
    transition: color .25s;
  }
```

keenan is a blog post site, and its actually intruiging to me. It actually reminds me of Avalon because of keenan's mindset against AI and 



I always forget how to make links in .md. I ahve to remind myself what's in the box is whats visibly seen in the windows box [ ]   (it's shapped like a computer or laptop) and then the () is where we put the hidden information. 

every time I always forget.

Anyways I started to work on other projects, and neglected this one. I actually shared this site to a class to show people where my current skillsets are, and I actually got a lot of suprisingly postivive feedback. One said the website made her curious about what more there was to see and she loved the hover effect, and another lady also loved the hover effect (sparkles). I was debating removing it but now I'm going to keep it. I just need to figure out how to get the danged white part of th ebutton to get back where it's supposed to be. 

I want to try to make a goal to try to use chatgpt as a debugger, and if i do for some reason need to get code from it, I'm going to type it out more myself. Especially for my svelte project. That way I can ensure I remmeber what each section is neamed. Although I've named all if not most of my sections, i dnt remember what i namedeach of them so I want to get more practice. 

The good news, is that it's helpig me understand how to read code alot better! it's activly forcing me to learn how to read code. 


April 18th

This is showing me how much I have to learn of Javascirpt still. I'm grateful for chatgbt for showing me potential code, but also showing me what I still dont understand yet. So I'm going to try to learn alittl emore about javascript. I undesrtand the naming convention, but since I dont fully understand what I'm getting wrong, I'll need to have a refreshor on that.



April 17th

Since I do debugging text for all my projects I figured I'd start here!

so I already have some things set up, I created a set sparkles which works! It doesn't have the effect I was hoping, but I got it so when it's turned on something happens. The problem I'm having with it is that the white circle that helpes the user to see when something is on or off like normal keeps appearing in the top left corner instead of within the button, so I have to debug that. Also for some reason recently the "sparkeles" are not where the cursor is, it's actually a few spots above that. So I'm going to figure out how to get it functional. 

I'm also working on the layout of the header. I got to to the point  there's now padding and color, but I dont think I like the title "Welcome to my Project" I think I'd rather have Tinkering Lab or something to that effect. I'll find some ideas later.

I also don't have all my projects within there yet, I only have two practice sites that I worked on. (one is a mathflashcard app based on penguins) and another is the pocatello chamber practiec I did one year. I think I should also have a timeline to showcase which year I did each project to show how i've grown. Once I'm working on the content then I'll add that. 

To do:

* fix where sparkles show when you move the cursor 
* fix the white circle that appears on the left corner of the page instead of in the button for the sparkle effects.  Have it default to off for accessibility purposes. 
* confirm you have an aria label to explain what the button does effectivly.
* change the "My projects" section to showcase a timeline. See if there may be creative ways to showcase it than just a simple list. 
* create a database where people can send feedback and the feedback will go into a postgress table that you can review messages. 
    * in the form for it have it so there's a button to say "I understand I'm opting out and will not receive any responses to this message" if they choose not to include email or phone number


7:26 pm
I fixed the spacing between header and main

