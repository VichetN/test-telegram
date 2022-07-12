import React, { useEffect, useState } from 'react'
import moment from 'moment'
function Voice() {

    const [count, setCount] = useState(0);
    const lyrics = [
        "Lim Vongvattanak",
        "Phoeurn Nareakmony",
        "Thim Sophal Rachna"
    ];
    const currentLyric = lyrics[count % lyrics.length];

    function speakPhrase(phrase) {
        if(phrase =="")
        {
            alert("Please enter a phrase before asking me to speak for you. Thank you!");
        }
        else
        {
            var speech = new SpeechSynthesisUtterance(phrase);
            var voices = window.speechSynthesis.getVoices();

            console.log(voices)

            speech.default = false;
            speech.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Mark - English (United States)'; })[0];
            speech.lang = 'en-US'; //Also added as for some reason android devices used for testing loaded spanish language 
            window.speechSynthesis.speak(speech);
        }
    }

    useEffect(() => {
        // let uttr = new SpeechSynthesisUtterance(currentLyric)
        // uttr.lang = 'en-US'
        // speechSynthesis.speak(uttr);
        // var voices = speechSynthesis.getVoices();
        // console.log(voices)

        speakPhrase("Student pickup")

    }, [currentLyric]);

    return (
        <div>
            {moment('2022-05-29T00:40:00+07:00').format('DD-MM-YY HH:mm:ss')}
            <h1>{currentLyric}</h1>
            <button
                onClick={() => setCount(count + 1)}
                style={{
                    width: 200,
                    height: 64,
                    fontSize: 16,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    marginBottom: 48
                }}
            >
                Sing
            </button>
        </div>
    )
}

export default Voice