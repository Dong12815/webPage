"use strict"
var music=document.getElementById("audio");
function togglemusic(){
	if(music.paused){
		music.play();
	}
	else{
		music.pause();
	}
}

function setVolume(){
	music.volume=volume.value;
}

var music1=new Array();
music1=["Lana Del Rey - Love song (Explicit)","Lana Del Rey - Happiness is a butterfly", "Lana Del Rey - The greatest", "Lana Del Rey - The Next Best American Record"]
var num=0;
var name=document.getElementById("title");

function lastMusic(){
	num=(num+3)%4;
	music.src="music/"+music1[num]+".mp3";
	title.innerHTML=music1[num];
	music.play();
}

function nextMusic(){
	num=(num+1)%4;
	music.src="music/"+music1[num]+".mp3";
	title.innerHTML=music1[num];
	music.play();
}