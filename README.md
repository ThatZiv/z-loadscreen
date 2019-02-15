# z-loadscreen: A Decent Looking Loading Screen.
**z-loadscreen** is a loading screen....

![alt-text](https://github.com/ThatZiv/z-loadscreen/blob/master/ss/ss2.png?raw=true)

## __Installation__
1. Download [Here](https://github.com/ThatZiv/z-loadscreen).
2. Add `start z-loadscreen` to your server.cfg
 ## __Preview__
 https://youtu.be/fQqR_QEaXQQ
## __Configuration__

| *To Configure* | *How-To* |
| ------- | ------ | 
| **Footer text** | `Config.js` - Change the *string* under the object **text** and var **link**  |
| **Time to change to next image** | `Config.js` - Change the *integer*  under **imgInterval** (in milliseconds)  |
| **Transition Time Length** *(how long the transition {fade} to next image lasts)*  | `Config.js` - Change the *integer*  under **transitionInterval** (in milliseconds)  |
| **YouTube Audio Presence** | `Config.js` - To have no music at all, make *boolean* var **music** false |
| **YouTube Audio** | `Config.js` - To change the video, change the *string*  **videoID** to your YouTube Video ID. [What is a Video ID?](https://docs.joeworkman.net/rapidweaver/stacks/youtube/video-id "What is a Video ID?") |
| **YouTube Audio Volume** | `Config.js` - To change the default audio volume, change the *integer*  **musicVolume** ( 0-100: Higher is louder, Lower is more quiet )  |
| **Add/Remove Images** | `Config.js` `__resource.lua` -  To add/remove images, make sure they are added in the **images** array (following sytax or else it will break) and also add them in your `__resource.lua` |
| ***Configurating Styling Attributes (simplified)*** |  ***How-To***  |
| **Amount of Blur to Background** | `Config.css` - Change var **--background-blur** (Higher *px*: more intense blur) |
| **Height of Loadbar** | `Config.css` - Change var **--loadbar-height** (Higher *px*: higher the loadbar) |
| **Background Color** *(The color that the image fades out to)* | `Config.css` - Change var **--fadeTo-Color** (hash color) [What is a Hash Color?](http://www.color-hex.com/ "What is a Hash Color?") |

`config.js`
```js
var config = {
"transitionInterval": 1250,
"imgInterval": 8000,
"music": true,
"videoID": "jo4-FhqkNwQ",
"text": {
	"title": "My Arpee Server",
	"link": "discord.gg/yeet",
},
"images": ['bg0.png', 'bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', 'bg6.png', 'bg7.png']
}
```
---
`config.css`
```css
:root {
--background-contrast: 95%;
--background-blur: 3px;
--loadbar-color: #ffffff5b;
--loadbar-progress-color: #0000009f;
--loadbar-height: 27px;
--footer-font-color: #dfdfdf98;
--footer-font-size: 24px;
--fadeTo-Color: #222222;
}
```
## __What's Configurable?__
- YouTube Video (audio) ID
- Colors, Contrast, Blur, etc.
- Images
- Text instead of a server logo
- Logo
- Presence of Music
- The Transition Intervals
## __Support__
If you need any help/support, join my [discord](https://discordapp.com/invite/yWddFpQ) and ask in **#support**

## __Screenshots__
![alt-text](https://github.com/ThatZiv/z-loadscreen/blob/master/ss/ss1.png?raw=true)
![alt-text](https://github.com/ThatZiv/z-loadscreen/blob/master/ss/ss3.png?raw=true)
![alt-text](https://github.com/ThatZiv/z-loadscreen/blob/master/ss/ss2.png?raw=true)


-------
