// import 'fs'
var songPlaying=false
var play=document.getElementById('play')
var pause=document.getElementById('pause')
var song=document.getElementById('song')
var progress=document.getElementById('progres')
song.onloadedmetadata=function(){
    progress.max=song.duration
    progress.value=song.currentTime;
    song.pause()
}


function change(){
    song.duration=progress.max
    song.currentTime=progress.value;
}
var songlist=[
    {  songSrc:'./songs/[iSongs.info] 04 - Anuvanuvuu.mp3',
       title:'Anuvanuvu Alalegase Teleyani O Anandhame',
       img:'song1.jpg',
       Telugulyrics:`ఆణువణువూ అలలెగసెయ్ 
       తెలియని ఓ ఆనందమే 
       కనులెదుటే నిలిచెనుగా 
       మనాసేతికే నా స్వప్నమే

       కాలాలు కళ్లారా చూసెనులే
       వసంతాలు వీచింది ఈ 
       రోజుకే భరించాను
       ఈ దూర తీరాలు నీ కోసమే

       ఆణువణువూ అలలెగసెయ్ 
       తెలియని ఓ ఆనందమే 
       కనులెదుటే నిలిచెనుగా 
       మనాసేతికే నా స్వప్నమే

       ఓ చోటే ఉన్నాను వేచాను 
       వేడానుగా కలవమని 
       నాలోనే ఉంచాను 
       ప్రేమంతా దాచనుగా పిలవమని
       
       తారలైన తాకలేని
       తాహతున్న ప్రేమని
       కష్టమేది కానరాని
       ఏది ఏమైనా ఉంటానని
       
       కాలాలు కళ్లారా చూసెనులే
       వసంతాలు వేచింది ఈ రోజుకే
       భరించాను ఈ దూర
       తీరాలు నీ కోసమే
       
       కలిసెనుగా కలిపెనుగా
       జన్మల భందమే
       కరిగెనుగా ముగిసెనుగా
       ఇన్నాళ్ల వేదనే
       
       మరిచా ఏనాడో
       ఇంత సంతోషమే
       తీరే ఇపుడే
       పథ సందేహమే

       నాలో లేదే మనసే
       నీతో చేరే
       మాటే ఆగి పోయే
       పోయే పోయే
       ఈ వేళనే

       ఆణువణువూ అలలెగసెయ్
       తెలియని ఓ ఆనందమే
       కనులెదుటే నిలిచెనుగా
       మనాసేతికే నా స్వప్నమే`,
       Englishlyrics:`Anuvanuvu alalegase
Teleyani oo anandhamey
Kanuledhate nilichenuga
Manasethike na swapnamey

Kaalalu kallara chusenuley
Vasantalu vechindhi ee rojukey
Barinchaanu ee doora
Teeralu nee kosamey

Anuvanuvu alalegase
Teleyani oo anandhamey
Kanuledhate nilichenuga
Manasethike na swapnamey

O chote unnanu vechanu vedanugaa kalawamani
Nalone unchanu premantha dachanuga pilawamani
Taralaina takaleni tahatunna premani
Kashtamedhi kanarani edhi emaina untanani

Kaalalu kallara chusenuley
Vasantalu vechindhi ee rojukey
Barinchaanu ee doora
Teeralu nee kosamey

Kalisenugaa kalipenga
Janmala bhandhamey
Karigenuga mugisenuga
Inalla vedhaney

Maricha yenado intha santhoshamey
Teere ippude patha sandehamey
Nalo ledhe manase netho cherey
Maate aagi poye poye poye ee velaney

Anuvanuvu alalegase
Teleyani oo anandhamey
Kanuledhate nilichenuga
Manasethike na swapnamey`,
       Hindhilyrics:`Hindhi`,
       Tamillyrics:`Tamil`
    },
    {  songSrc:'./songs/[iSongs.info] 06 - Poolamme Pilla.mp3',
       title:'Poolamme Pilla',
       img:'song2.avif',
       Telugulyrics:`Telugu`,
       Englishlyrics:`English`,
       Hindhilyrics:`Hindhi`,
       Tamillyrics:`Tamil`
    },
    {
        songSrc:'./songs/Ney Veyrey.mp3',
        title:'Ney Veyrey song Animal Movie',
        img:'song3.jpg',
        Telugulyrics:`Telugu`,
        Englishlyrics:`English`,
        Hindhilyrics:`Hindhi`,
        Tamillyrics:`Tamil`
    },
    {
        songSrc:'./songs/[iSongs.info] 02 - Radhika.mp3',
        title:'Radhika Radhika song Tillu-2 Movie',
        img:'song4.webp',
        Telugulyrics:`Telugu`,
        Englishlyrics:`English`,
        Hindhilyrics:`Hindhi`,
        Tamillyrics:`Tamil`
    },
    {
        songSrc:'./songs/Nijame Ne Chebuthunna.mp3',
        title:'Nijame Ne Chebuthunna song Ooru Peru Bhairavakona Movie',
        img:'song5.webp',
        Telugulyrics:`Telugu`,
        Englishlyrics:`English`,
        Hindhilyrics:`Hindhi`,
        Tamillyrics:`Tamil`
    }
]
var i=0
function PlayPause(){
    if(play.classList.contains("show")){
        song.play()
        play.classList.add('hide')
        play.classList.remove('show')
        pause.classList.add('show')
        pause.classList.remove('hide')
        if(song.play()){
            setInterval(()=>{
                progress.value=song.currentTime;
            },500)
           
        }
        //song is playing the songPlaying variable override to true value
        songPlaying=true
    }
    else{
        song.pause()
        play.classList.add('show')
        play.classList.remove('hide')
        pause.classList.add('hide')
        pause.classList.remove('show')

         //song is playing the songPlaying variable override to false value
        songPlaying=false
    }
}

//select the language of the lyrics of select option
function selectLanguage(){
    var selectLanguage=document.getElementById('languages')
    if(selectLanguage.value=='TELUGU'){
        document.getElementById('content').innerText=`${songlist[i].Telugulyrics}`
    }
    else if(selectLanguage.value=='ENGLISH'){
        document.getElementById('content').innerText=`${songlist[i].Englishlyrics}`
    }
    else if(selectLanguage.value=='HINDHI'){
        document.getElementById('content').innerText=`${songlist[i].Hindhilyrics}`
    }
    else if(selectLanguage.value=='TAMIL'){
        document.getElementById('content').innerText=`${songlist[i].Tamillyrics}`
    }
    else if(selectLanguage.value=='default'){
        document.getElementById('content').innerText=``
    }
}

function next(){
        if(!songPlaying){
            if(songlist.length>i){
                i+=1
                
                song.src=songlist[i].songSrc
                document.querySelector("#imageSrc").src=`./images/${songlist[i].img}`
                document.querySelector(".musictitle").innerHTML=`${songlist[i].title}`
                play.classList.add('show')
                play.classList.remove('hide')
                pause.classList.add('hide')
                pause.classList.remove('show')
         
               //if privous song is not playing and if click on next button next song not start
               selectLanguage()
            
            }
        }
        else if(songPlaying){
        if(songlist.length>i){
            i+=1

            song.src=songlist[i].songSrc
            document.querySelector("#imageSrc").src=`./images/${songlist[i].img}`
            document.querySelector(".musictitle").innerHTML=`${songlist[i].title}`
            play.classList.add('show')
            play.classList.remove('hide')
            pause.classList.add('hide')
            pause.classList.remove('show')
            
            selectLanguage()

           //if privous song is playing and if click on next button next song start at 3 seconds
            setTimeout(function(){PlayPause()},3000)
        }
    }

    
}


song.onended=()=>{
   next()
}
function prev(){
    if(!songPlaying){
        if(i>0)
        {
            i-=1
            song.src=songlist[i].songSrc
            document.querySelector("#imageSrc").src=`./images/${songlist[i].img}`
            document.querySelector(".musictitle").innerHTML=`${songlist[i].title}`
            play.classList.add('show')
            play.classList.remove('hide')
            pause.classList.add('hide')
            pause.classList.remove('show')
            

            selectLanguage()

              //if next song is playing and if click on privoue button privous song not started
        }
    }
        else if(songPlaying){
            if(i>0)
                {
                    i-=1
                    song.src=songlist[i].songSrc
                    document.querySelector("#imageSrc").src=`./images/${songlist[i].img}`
                    document.querySelector(".musictitle").innerHTML=`${songlist[i].title}`
                    play.classList.add('show')
                    play.classList.remove('hide')
                    pause.classList.add('hide')
                    pause.classList.remove('show')
                    


                    selectLanguage()

                    //if next song is playing and if click on privoue button privous song start at 3 seconds
                    setTimeout(function(){PlayPause()},3000)
                }

        }
  
}


var menu=document.getElementById('open')
var close=document.getElementById('close')

var lyricsOption=document.getElementById('LyricsOption')
var lyricsSpace=document.getElementById('Lyrics')


function MenuHide(){
    if(lyricsSpace.classList.contains('hideSongLYrics')){
        if(menu.classList.contains("showMenu")){
            menu.classList.add('hideMenu')
            menu.classList.remove('showMenu')
            close.classList.add('showMenu')
            close.classList.remove('hideMenu')
            lyricsOption.classList.add('LyricsOption')
            lyricsOption.classList.remove('hideLyricsOPtion')
        }
        else{
            menu.classList.add('showMenu')
            menu.classList.remove('hideMenu')
            close.classList.add('hideMenu')
            close.classList.remove('showMenu')
            lyricsOption.classList.remove('LyricsOption')
            lyricsOption.classList.add('hideLyricsOPtion')
        }
    }
    else{
        alert("your already opend the lyrics space")
    }
    
}


var lyricsSpace=document.getElementById('Lyrics')


function ShowLyricsBar(){
     if(lyricsSpace.classList.contains('hideSongLYrics')){
        lyricsSpace.classList.add('lyricsSpace')
        lyricsSpace.classList.remove('hideSongLYrics')
        menu.classList.add('showMenu')
        menu.classList.remove('hideMenu')
        close.classList.add('hideMenu')
        close.classList.remove('showMenu')
        lyricsOption.classList.remove('LyricsOption')
        lyricsOption.classList.add('hideLyricsOPtion')

     }
}


//close the lyrics space

function closeLyrics(){
    if(lyricsSpace.classList.contains('lyricsSpace')){
        lyricsSpace.classList.remove('lyricsSpace')
        lyricsSpace.classList.add('hideSongLYrics')  
    }
}

