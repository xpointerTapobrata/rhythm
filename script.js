const play = document.getElementById('play');
const pause = document.getElementById('pause');
const state = document.querySelectorAll('.state');
const audio = document.getElementById('audio');
const input = document.getElementById('search-input');
const hamburger = document.getElementById('menu-button');
const sidebar = document.getElementById('side');
const closeBar = document.getElementById('close');
const sidebarTabs = document.querySelectorAll('.sidebar');
const footerTabs = document.querySelectorAll('.inneritem');
const footerTabOne = document.getElementById('tab-1');
const footerTabTwo = document.getElementById('tab-2');
const footerTabThree = document.getElementById('tab-3');
const screens = document.querySelectorAll('.screen');
const songscreen = document.getElementById('song-screen');
const favscreen = document.getElementById('fav-screen');
const searchscreen = document.getElementById('search-screen');
const sclose = document.getElementById('sclose');
const favclose = document.getElementById('favclose');
const art = document.getElementById('art');
const title = document.getElementById('title');
const singer = document.getElementById('singer');
const erase = document.getElementById('cancel');
const prev = document.getElementById('back');
const next = document.getElementById('forward');
let progress = document.getElementById('range-complete');
let current = document.getElementById('current');
let totalTime = document.getElementById('duration');
let range = document.getElementById('range');
const referimg = document.getElementById('referimg');
const refertitle = document.getElementById('refertitle');
const referartist = document.getElementById('referartist');
const musix = document.getElementById('musix');
const list = document.getElementById('list');
let coverimg = document.getElementById('cover-img');
let covertitle = document.getElementById('cover-title');
let coversing = document.getElementById('cover-sing');
const early = document.getElementById('earlier');
const run = document.getElementById('run');
const later = document.getElementById('later');
const stop = document.getElementById('stop');
const bottom = document.querySelectorAll('.bottom');

const tracks = [
    {
        id: 1,
        track: 'track-1.mp3',
        title: 'Faded',
        artist: 'Alan Walker',
        link: "https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png"
    },
    {
        id: 2,
        track: 'track-2.mp3',
        title: 'The Sims 4 - Dine Out',
        artist: 'Ilan Eshkeri',
        link: 'https://image.api.playstation.com/vulcan/img/cfn/11307QettyrhGxdefLz21aKEyQTGtukry3NkHpwpZSV97ddsJUTuCvD16urUqeAXHFZkOWuxOf4_A94k8cpD8BkCO4orqUT_.png'
    },
    {
        id: 3,
        track: 'track-3.mp3',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        link: 'https://e-cdns-images.dzcdn.net/images/cover/000a9228cecfcc7c2093d9cd7bb66447/350x350.jpg'
    },
    {
        id: 4,
        track: 'track-4.mp3',
        title: 'Ready for that Heartbreak',
        artist: 'Lovely Caliber',
        link: 'https://fsa.zobj.net/crop.php?r=FHk_c3rj5wBwvh1Pk0l_HgDYWVY4keAoNSQXmDf9IIRdCjL7jyON3u79O2fcZiLWzdGz3v0pzH_Anu1RbDO1pXLMlHF3e5QTzjP2BTuxwIyOYFer35HV9N1Xq5ezX4i5qvO94aiHFgHiUssq'
    },
    {
        id: 5,
        track: 'track-5.mp3',
        title: 'Eclipse',
        artist: 'Jay Price',
        link: 'https://images.shazam.com/coverart/t54426092-b1161960968_s400.jpg'
    },
    {
        id: 6,
        track: 'track-6.mp3',
        title: 'Jurassic Park Theme',
        artist: 'John Williams',
        link: 'https://images-na.ssl-images-amazon.com/images/I/71%2BnqZgoViL._SL1425_.jpg'
    },
    {
        id: 7,
        track:'track-7.mp3',
        title: 'Vaishnava Jana To | Civ-6',
        artist: 'Geoff Knorr',
        link: 'https://vgmsite.com/soundtracks/civilization-vi-2016/AlbumArtwork.png'
    },
    {
        id: 8,
        track: 'track-8.mp3',
        title: `Chocolate`,
        artist: `Landon Austin`,
        link: 'https://images.genius.com/41356a96715df22e4bc4881ca787a913.500x500x1.jpg'
    },
    {
        id: 9,
        track: 'track-9.mp3',
        title: 'Beatrix',
        artist: 'Ilan Eshkeri',
        link: 'https://lastfm.freetls.fastly.net/i/u/ff6b52aaeeadf7151c40903ecd852436.png'
    }
]

trackIndex= 0;

loadplayer = ((tracks) => {
    coverimg.src = tracks.link ;
    covertitle.textContent = tracks.title ;
    coversing.textContent = tracks.artist ;
})

loadsong = ((tracks) => {
    title.textContent = tracks.title ;
    singer.textContent = tracks.artist ;
    audio.src = tracks.track;
    art.src = tracks.link;
})
let listclass = []
let unique = 0
loadlist = ((tracks) => {
    //creating ul
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'refer');
    ul.setAttribute('class', 'song-details');
    ul.dataset.songs = tracks.id ;
    

    // creating img
    let img = document.createElement('img');
    img.setAttribute('id', 'referimg');
    //img.height = '100px';
    //img.width = '100px';
    img.src = tracks.link ;
    ul.appendChild(img);

    
    // creating div
    let div = document.createElement('div');
    div.setAttribute('class', 'details');

    //creating title
    let h5= document.createElement('H5');
    let titleTextNode = document.createTextNode(tracks.title);
    h5.appendChild(titleTextNode);
    div.appendChild(h5);

    //creating artist
    let p = document.createElement('p');
    let pTextNode = document.createTextNode(tracks.artist);
    p.appendChild(pTextNode);
    div.appendChild(p);
    div.dataset.name =tracks.id ;

    // appending div to ul
    ul.appendChild(div);


    //creating audio
    let audio = document.createElement('audio');
    audio.src = tracks.track ;
    audio.setAttribute('id', 'musix');

    //appending to ul
    ul.appendChild(audio)
    //attaching everything to list
    list.appendChild(ul)

    listclass = document.querySelectorAll('.song-details')

//    ul.addEventListener('click', ()=>{
   //     unique= tracks.id
    //    console.log(unique)
    //})

})
let getNum = 0
let getName = 0
let tempo = 0
let clickedonlist = false
list.addEventListener('click', (e) => {
        if(e.target.matches('ul')){
            let getNumber = (e.target.dataset.songs)
            getNum = getNumber
            audio.src = `track-${getNumber}.mp3`
            loadsong(tracks[(getNumber-1)])
            loadplayer(tracks[getNumber-1])
            play.classList.remove('show')
            pause.classList.add('show')
            run.classList.remove('display')
            stop.classList.add('display')
            audio.play()
            art.classList.add('animate')
            
            listclass.forEach(i => {
                i.classList.remove('list-colored')
            })
            e.target.classList.add('list-colored')
            console.log(getNum-1, 'num-1')
            console.log(getNum, 'getNum')
            console.log(e.target)
            trackIndex = getNum-1
            console.log(trackIndex, 'trackindex')
            tempo = 1
            clickedonlist = true
        }

        if(e.target.matches('div')){
            const getName = (e.target.dataset.name)
            getName = getName
            audio.src = `track-${getName}.mp3`
            loadsong(tracks[(getName-1)])
            loadplayer(tracks[getName-1])
            play.classList.remove('show')
            pause.classList.add('show')
            audio.play()
            art.classList.add('animate')
            listclass.forEach(i => {
                i.classList.remove('list-colored')
            })
            e.target.classList.add('list-colored')
            clickedonlist = true
        }
})

/*if (getNum > tracks.length-1){
    getNum = 0
}
if(getNum < 0){
    getNum= tracks.length-1
}*/

let bool = false
let secbool = false
let clickedprevafterlist = false
next.addEventListener('click', ()=> {

    trackIndex ++


    trackIndex = trackIndex % tracks.length

    loadplayer(tracks[trackIndex])
    loadsong(tracks[trackIndex])
    play.classList.remove('show')
    pause.classList.add('show')
    run.classList.remove('display')
    stop.classList.add('display')
    audio.play()
    art.classList.add('glow')
    art.classList.add('animate')

    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++

    getNum++

    if (getNum > tracks.length-1){
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })

        if(clickedonlist){
            if(clickedprevafterlist){
                listclass[getNum].classList.add('list-colored')

            }
            else{
                listclass[getNum-1].classList.add('list-colored')
            }
            getNum=0
        }
        else{
            listclass[getNum].classList.add('list-colored')
        }
    }

    if(getNum < 0){
        getNum= tracks.length-1
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })

        if(clickedonlist){
            if(clickedprevafterlist){
                listclass[getNum].classList.add('list-colored')
            }
            else{
                listclass[getNum-1].classList.add('list-colored')
            }    
        }
        else{
            listclass[getNum].classList.add('list-colored')
        }
        
    }

    if(getNum >= 0 && getNum <= tracks.length-1){
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })

        if(clickedonlist){
            if(clickedprevafterlist){
                listclass[getNum-1].classList.add('list-colored')
                console.log('jjj')
                //clickedprevafterlist = false
            }
            else if(getNum===0){
                listclass[tracks.length-1].classList.add('list-colored')
                console.log(`wert`)
            }
            else{
                listclass[getNum-1].classList.add('list-colored')
                console.log('rty')
            }    
            
        }
        else{
            listclass[getNum].classList.add('list-colored')
        }
    }

   bool = true
   secbool = true
})

later.addEventListener('click', ()=> {
    trackIndex ++


    trackIndex = trackIndex % tracks.length

    loadplayer(tracks[trackIndex])
    loadsong(tracks[trackIndex])
    play.classList.remove('show')
    pause.classList.add('show')
    run.classList.remove('display')
    stop.classList.add('display')
    audio.play()
    art.classList.add('glow')
    art.classList.add('animate')

    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++

    getNum++

    if (getNum > tracks.length-1){
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })

        if(clickedonlist){
            if(clickedprevafterlist){
                listclass[getNum].classList.add('list-colored')

            }
            else{
                listclass[getNum-1].classList.add('list-colored')
            }
            getNum=0
        }
        else{
            listclass[getNum].classList.add('list-colored')
        }
    }

    if(getNum < 0){
        getNum= tracks.length-1
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })

        if(clickedonlist){
            if(clickedprevafterlist){
                listclass[getNum].classList.add('list-colored')
            }
            else{
                listclass[getNum-1].classList.add('list-colored')
            }    
        }
        else{
            listclass[getNum].classList.add('list-colored')
        }
        
    }

    if(getNum >= 0 && getNum <= tracks.length-1){
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })

        if(clickedonlist){
            if(clickedprevafterlist){
                listclass[getNum-1].classList.add('list-colored')
                console.log('jjj')
                //clickedprevafterlist = false
            }
            else if(getNum===0){
                listclass[tracks.length-1].classList.add('list-colored')
                console.log(`wert`)
            }
            else{
                listclass[getNum-1].classList.add('list-colored')
                console.log('rty')
            }    
            
        }
        else{
            listclass[getNum].classList.add('list-colored')
        }
    }

   bool = true
   secbool = true
})

let fff = 0
let anothertemp = false

prev.addEventListener('click', ()=> {
    if(clickedonlist){
        clickedprevafterlist = true
    }
    trackIndex --

    if(trackIndex < 0){
        trackIndex = Math.abs((trackIndex % tracks.length) * (tracks.length - 1))
     
    }
    else{
        trackIndex = Math.abs(trackIndex % tracks.length)
    }
    loadplayer(tracks[trackIndex])
    loadsong(tracks[trackIndex])
    play.classList.remove('show')
    pause.classList.add('show')
    run.classList.remove('display')
    stop.classList.add('display')
    audio.play();
    art.classList.add('glow')
    art.classList.add('animate')

    
    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++


    getNum--
    getName--

    if (getNum > tracks.length-1){
        getNum = 1
        listclass.forEach(i => {
            i.classList.remove('list-colored')
         })
         listclass[getNum-1].classList.add('list-colored')
         console.log('triggerfirst')
    }

    if(getNum < 1){
        
        fff = tracks.length
        listclass.forEach(i => {
            i.classList.remove('list-colored')
         })
         if(clickedonlist){
 
            if(clickedprevafterlist){
                listclass[0].classList.add('list-colored')
                console.log('ewooo')
                anothertemp = true
                getNum = tracks.length-1
            }
            else{
                listclass[getNum].classList.add('list-colored')
                console.log('hye')
                getNum = tracks.length-1 
            }
             
        }

        else if(secbool){
            listclass[0].classList.add('list-colored')
            console.log('secbooltriggermid')
            getNum = tracks.length
         }

         else{
            getNum = tracks.length
            listclass[getNum-1].classList.add('list-colored')
            console.log('triggermid')
         }
         
    }


    let backrotate = false
    let rotatecounter = 0
    if(getNum >= 1 && getNum <= tracks.length-1){
        listclass.forEach(i => {
            i.classList.remove('list-colored')
         })

        if(clickedonlist){
            if(clickedprevafterlist){
                if(anothertemp){
                    listclass[getNum%tracks.length].classList.add('list-colored')
                    backrotate = !backrotate
                    rotatecounter ++
                    anothertemp = !anothertemp
                }
                else{
                    listclass[getNum%tracks.length-1].classList.add('list-colored')
                    console.log('h2e')
                }
                
            }
            else{
                listclass[getNum].classList.add('list-colored')
                console.log('hye')
            }
            
        }

        else if(secbool){
            listclass[getNum].classList.add('list-colored')
            console.log('secbooltriggerlast')
         }

        else{
            listclass[getNum-1].classList.add('list-colored')
            console.log('triggerlast')
         }
    }
  
    /*if(getNum<0){
        if(getNum<-tracks.length+1){
            getIndex = 0
            console.log(getNum)
            console.log(trackIndex)
            console.log(getIndex)
        
            listclass.forEach(i => {
                i.classList.remove('list-colored')
            })
            listclass[getIndex].classList.add('list-colored')
            getNum = 0
        
       }

        if(getNum<-1){
            getIndex = Math.abs(getNum % tracks.length) + (tracks.length - Math.abs(getNum*2))
            console.log(getNum)
            console.log(trackIndex)
            console.log(getIndex-1)
        
            listclass.forEach(i => {
                i.classList.remove('list-colored')
            })
            listclass[getIndex].classList.add('list-colored')
        }

        if(getNum === -1){
            getIndex = Math.abs((getNum % tracks.length) * (tracks.length - 1))
            console.log(getNum)
            console.log(trackIndex)
            console.log(getIndex-1)
        
            listclass.forEach(i => {
                i.classList.remove('list-colored')
            })
            listclass[getIndex].classList.add('list-colored')

        }
        
    }

    if (getNum === 0 && tempo >= 1) {
        getIndex = Math.abs(((getNum+1) % tracks.length) * (tracks.length - 1))
        console.log(getNum)
        console.log(trackIndex)
        console.log(getIndex)
    
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })
        listclass[getIndex].classList.add('list-colored')
        temp = 0
    } 

    if (getNum > 0){
        getIndex = Math.abs(getNum%tracks.length)
        listclass.forEach(i => {
            i.classList.remove('list-colored')
        })
        listclass[trackIndex].classList.add('list-colored')
    }

    //console.log(getNum)
    

    console.log(getNum-1, 'getnum-1')
    console.log(getNum, 'getnum')
  console.log(trackIndex, 'index')
   console.log(listclass[getNum-1])

    /*listclass.forEach(i => {
       i.classList.remove('list-colored')
    })
    listclass[getNum-1].classList.add('list-colored')*/

    bool=false
    
})

early.addEventListener('click', ()=> {
    if(clickedonlist){
        clickedprevafterlist = true
    }
    trackIndex --

    if(trackIndex < 0){
        trackIndex = Math.abs((trackIndex % tracks.length) * (tracks.length - 1))
     
    }
    else{
        trackIndex = Math.abs(trackIndex % tracks.length)
    }
    loadplayer(tracks[trackIndex])
    loadsong(tracks[trackIndex])
    play.classList.remove('show')
    pause.classList.add('show')
    run.classList.remove('display')
    stop.classList.add('display')
    audio.play();
    art.classList.add('glow')
    art.classList.add('animate')

    
    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++


    getNum--
    getName--

    if (getNum > tracks.length-1){
        getNum = 1
        listclass.forEach(i => {
            i.classList.remove('list-colored')
         })
         listclass[getNum-1].classList.add('list-colored')
         console.log('triggerfirst')
    }

    if(getNum < 1){
        
        fff = tracks.length
        listclass.forEach(i => {
            i.classList.remove('list-colored')
         })
         if(clickedonlist){
 
            if(clickedprevafterlist){
                listclass[0].classList.add('list-colored')
                console.log('ewooo')
                anothertemp = true
                getNum = tracks.length-1
            }
            else{
                listclass[getNum].classList.add('list-colored')
                console.log('hye')
                getNum = tracks.length-1 
            }
             
        }

        else if(secbool){
            listclass[0].classList.add('list-colored')
            console.log('secbooltriggermid')
            getNum = tracks.length
         }

         else{
            getNum = tracks.length
            listclass[getNum-1].classList.add('list-colored')
            console.log('triggermid')
         }
         
    }


    let backrotate = false
    let rotatecounter = 0
    if(getNum >= 1 && getNum <= tracks.length-1){
        listclass.forEach(i => {
            i.classList.remove('list-colored')
         })

        if(clickedonlist){
            if(clickedprevafterlist){
                if(anothertemp){
                    listclass[getNum%tracks.length].classList.add('list-colored')
                    backrotate = !backrotate
                    rotatecounter ++
                    anothertemp = !anothertemp
                }
                else{
                    listclass[getNum%tracks.length-1].classList.add('list-colored')
                    console.log('h2e')
                }
                
            }
            else{
                listclass[getNum].classList.add('list-colored')
                console.log('hye')
            }
            
        }

        else if(secbool){
            listclass[getNum].classList.add('list-colored')
            console.log('secbooltriggerlast')
         }

        else{
            listclass[getNum-1].classList.add('list-colored')
            console.log('triggerlast')
         }
    }
    bool=false
})

audio.addEventListener('ended', ()=> {
    trackIndex ++
    trackIndex = trackIndex % tracks.length
    loadsong(tracks[trackIndex])
    play.classList.remove('show')
    pause.classList.add('show')
    audio.play();
   // loadplayer(tracks[trackIndex])
    art.classList.add('glow')
    art.classList.add('animate')
    bottom.forEach(el => {
        el.classList.remove('display')
    })
    run.classList.add('display')
})

sclose.addEventListener('click', ()=> {
    sidebar.classList.remove('sidebar-show');
});

favclose.addEventListener('click', ()=> {
    sidebar.classList.remove('sidebar-show');
})

let counter = 0;
hamburger.addEventListener('click', ()=> {
    sidebar.classList.add('sidebar-show');

    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++
});



closeBar.addEventListener('click', ()=> {
    sidebar.classList.remove('sidebar-show');
});

footerTabOne.addEventListener('click', ()=> {
    footerTabs.forEach(tab => {
        tab.classList.remove('footer-active');
    });
    screens.forEach(screen => {
        screen.classList.remove('footer-show');
    });
    footerTabOne.classList.add('footer-active');
    songscreen.classList.add('footer-show');
});

footerTabTwo.addEventListener('click', ()=> {
    footerTabs.forEach(tab => {
        tab.classList.remove('footer-active');
    });
    screens.forEach(screen => {
        screen.classList.remove('footer-show');
    });
    footerTabTwo.classList.add('footer-active');
    favscreen.classList.add('footer-show');
});

footerTabThree.addEventListener('click', ()=> {
    footerTabs.forEach(tab => {
        tab.classList.remove('footer-active');
    });
    screens.forEach(screen => {
        screen.classList.remove('footer-show');
    });
    footerTabThree.classList.add('footer-active');
    searchscreen.classList.add('footer-show');
});

input.addEventListener('keydown', () => {
    
    if (input.value.length > 0){
        erase.classList.add('erase-show');
    }

    else if (input.value.length < 5){
        erase.classList.remove('erase-show');
    };
    console.log('working');
});

play.addEventListener('click', () => {
    audio.play()
    state.forEach(i => {
        i.classList.remove('show')
    })
    pause.classList.add('show')

    bottom.forEach(el => {
        el.classList.remove('display')
    })
    stop.classList.add('display')

    art.classList.add('animate')
    
    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++


    let getIndex = getNum%tracks.length
    
    listclass.forEach(i => {
        i.classList.remove('list-colored')
    })

    if(clickedprevafterlist){
        listclass[getNum-1].classList.add('list-colored')
    }

    else if(clickedonlist){
        listclass[getNum-1].classList.add('list-colored')
        console.log(getNum, getNum-1, trackIndex)
    }

    else if(getNum === 0 || bool){
        listclass[getNum].classList.add('list-colored')
    }

    else if(secbool){
        listclass[getNum].classList.add('list-colored')
    }
    else{
        listclass[getNum].classList.add('list-colored')
    }
})


run.addEventListener('click', ()=> {
    audio.play()
    state.forEach(i => {
        i.classList.remove('show')
    })
    pause.classList.add('show')

    bottom.forEach(el => {
        el.classList.remove('display')
    })
    stop.classList.add('display')
    art.classList.add('animate')
    
    if(counter < 1){
        tracks.forEach(tr => {
            loadlist(tr)
        })
    }
    counter++


    let getIndex = getNum%tracks.length
    
    listclass.forEach(i => {
        i.classList.remove('list-colored')
    })

    if(clickedprevafterlist){
        listclass[getNum-1].classList.add('list-colored')
    }

    else if(clickedonlist){
        listclass[getNum-1].classList.add('list-colored')
        console.log(getNum, getNum-1, trackIndex)
    }

    else if(getNum === 0 || bool){
        listclass[getNum].classList.add('list-colored')
    }

    else if(secbool){
        listclass[getNum].classList.add('list-colored')
    }
    else{
        listclass[getNum].classList.add('list-colored')
    }
})

stop.addEventListener('click', ()=> {
    audio.pause();
    state.forEach(i => {
        i.classList.remove('show')
    })
    play.classList.add('show')

    bottom.forEach(el => {
        el.classList.remove('display')
    })
    run.classList.add('display')

    art.classList.remove('animate')
})

pause.addEventListener('click', () => {
    audio.pause();
    state.forEach(i => {
        i.classList.remove('show')
    })
    play.classList.add('show')

    bottom.forEach(el => {
        el.classList.remove('display')
    })
    run.classList.add('display')

    art.classList.remove('animate')
})

audio.addEventListener('timeupdate', (e) =>{
    const { currentTime, duration } = e.srcElement;
    let completedTime = (currentTime/duration *100) * 2/5
    progress.style.width = `${completedTime}%`
    
    //inserting duration
    
    let durationMinute = Math.floor(duration/60);
    let durationSecond = Math.floor(duration%60);
    if(durationSecond < 10){
        durationSecond = `0${durationSecond}`
    }
    //console.log(`${durationMinute}:${durationSecond}`);
    if(duration){
        totalTime.textContent = `${durationMinute}:${durationSecond}`;
    }
    

    //inserting current time

    let currentMinute = Math.floor(currentTime/60);
    let currentSecond = Math.floor(currentTime%60);
    if(currentSecond < 10){
        currentSecond = `0${currentSecond}`
    }
    //console.log(`${currentMinute}:${currentSecond}`);
    current.textContent = `${currentMinute}:${currentSecond}`;
})

let storeRangeduration = 0
let storeRangeWidth = 0

range.addEventListener('click', (e) => {
    let { duration } = audio
    let offset = e.offsetX
    let totaloffset = e.srcElement.clientWidth
    let clickedTime = (offset/ totaloffset * duration)
    audio.currentTime = clickedTime
    storeRangeduration = duration
    storeRangeWidth = totaloffset
})

progress.addEventListener('click', (e)=> {
    let offsetProgress = e.offsetX
    let clickedProgress = (offsetProgress/storeRangeWidth*storeRangeduration)
    audio.currentTime = clickedProgress
})

audio.addEventListener('ended', (e)=>{
    getNum++
    let getIndex = getNum%tracks.length
    
    audio.src = `track-${getIndex}.mp3`
    loadsong(tracks[getIndex-1])
    loadplayer(tracks[getIndex-1])
    audio.play()
    
    listclass.forEach(i => {
        i.classList.remove('list-colored')
    })
    listclass[getIndex-1].classList.add('list-colored')
    run.classList.remove('display')
    stop.classList.add('display')
    
})

