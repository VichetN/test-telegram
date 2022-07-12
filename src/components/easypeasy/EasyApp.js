import React, { useEffect, useState } from 'react'
import { StoreProvider, createStore } from 'easy-peasy'
import Todos from './Todos'
import store from '../store'
import MobilePdf from '../../assets/mobile.pdf'
import generatePdfThumbnails from 'pdf-thumbnails-generator';
import WebViewer from '@pdftron/webviewer'
import {getDocument} from 'pdfjs-dist'

function EasyApp() {

    const [viewImage, setViewImage] = useState();
    const [thumbnail, setThumbnail] = useState();

    const urlToObject = async (image) => {
        const response = await fetch(image,{mode:'no-cors'});
        // here image is url/location of image
        const blob = await response.blob();
        console.log(blob)
        const file = new File([blob], 'image.pdf', { type: blob.type });

        console.log(file);

        return file
    }

    async function generateThumbnails() {
        try {
            const file = await urlToObject("https://www.vkangkor.com/img/test.pdf");
            const thumbnails = await generatePdfThumbnails(URL.createObjectURL(file), 600);
            console.log(thumbnails);
            // setViewImage(thumbnails[0]?.thumbnail)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        // generateThumbnails()
        // const getThumbnail = async () => {
        //     // Core.setWorkerPath()
        //     // const core = window.Core
        //     const doc = await Core.createDocument(MobilePdf,{extension:'pdf'})

        //     doc.loadCanvasAsync({
        //         pageNumber:1,
        //         drawComplete:(thumbnail)=>{
        //             setThumbnail(thumbnail)
        //         }
        //     })
        // }
        // getThumbnail()

        function makeThumb(page) {
            // draw page to fit into 96x96 canvas
            // var vp = page.getViewport(1);
            // var canvas = document.createElement("canvas");
            // canvas.width = canvas.height = 96;
            // var scale = Math.min(canvas.width / vp.width, canvas.height / vp.height);
            // return page.render({ canvasContext: canvas.getContext("2d"), viewport: page.getViewport(scale) }).promise.then(function () {
            //     return canvas;
            // });
        }
  
        getDocument("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf").promise.then(function (doc) {
            var pages = []; while (pages.length < doc.numPages) pages.push(pages.length + 1);
            // return Promise.all(pages.map(function (num) {
            //     // create a div for each page and build a small canvas for it
            //     var div = document.createElement("div");
            //     document.body.appendChild(div);
            //     return doc.getPage(num).then(makeThumb)
            //         .then(function (canvas) {
            //             div.appendChild(canvas);
            //         });
            // }));
        }).catch(console.error);
    }, []);



    return (
        <StoreProvider store={store}>
            <Todos />
            {thumbnail && <img src={thumbnail} alt='img' width={1500} />}
        </StoreProvider>
    )
}

export default EasyApp