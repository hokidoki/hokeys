'use strict';

// [START import]
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp()

// [END import]

// [START generateThumbnail]
/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 */
// [START generateThumbnailTrigger]
exports.putElasticSearch = functions.firestore
    .document('agora/{wildcard}')
    .onCreate((snap,context)=>{
        const newDoc = snap.data();
        const jsonDoc = JSON.stringify(newDoc);

        axios.post(`172.30.1.52:9200/article/test/6`,jsonDoc)
        
    })
// [END generateThumbnail]