import firebase from 'firebase';
import uuid from 'uuid';

export function imageSrcSet(content,whereCollection){
    return new Promise((resolve,reject)=>{
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;    
    
        let img = tempDiv.getElementsByTagName("img");
    
        if(img){
            let array = [];
                for(let i = 0; i <= img.length-1; i++){
                    let dataUrl = img[i].src;
                    const fileName = uuid.v1();
                    let extension = dataUrl.split(';')[0].split('/')[1];
                    console.log(extension)
                    switch(extension){
                        case '/' :
                            extension = "JPG"; break;
                        case 'p' : 
                            extension = "png"; break;
                        case 'r' : 
                            extension = "gif"; break;
                        case 'u' :
                            extension = "webp"; break;
                        default : 
                            extension = "?"; break;
                    }
                    const docName = `${whereCollection}/${fileName}.${extension}`;
                    let articleRef = firebase.storage().ref().child(docName);

                    articleRef.putString(dataUrl,'data_url').then((snapshot)=>{
                        return snapshot.ref.getDownloadURL();
                    }).then((downloadURL)=>{
                        tempDiv.getElementsByTagName("img")[i].src = downloadURL;
                        array.push(docName);
                        console.log(tempDiv.outerHTML);
                        if(i === img.length-1){
                            resolve({
                                content : tempDiv.outerHTML,
                                imgDocNames : array
                        })
                    }
                })
            }
        }else{
            resolve({
                content : tempDiv.outerHTML
            })
        }
    })
}


export function addArticle({whereCollection,title,userId,doc,userDisplayName, userProfileUrl }) {
    if(doc.imgDocNames){
        const articleId = uuid.v1();
        return firebase.firestore().collection(`${whereCollection}`).doc(articleId).set({
            id: articleId,
            title : title,
            content : doc.content,
            imgDocNames : doc.imgDocNames,
            userId,
            userDisplayName,
            userProfileUrl,
            likeCnt: 0,
            commentCnt: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }else{
        const articleId = uuid.v1();
        return firebase.firestore().collection(`${whereCollection}`).doc(articleId).set({
            id: articleId,
            title : title,
            content : doc.content,
            userId,
            userDisplayName,
            userProfileUrl,
            likeCnt: 0,
            commentCnt: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}

export function getArticleList(whereCollection,lastItem,count){
    const limitCount = count || 10;

    if(lastItem){
        return firebase.firestore().collection(whereCollection).orderBy("createdAt","desc").startAfter(lastItem).limit(limitCount).get();
    }else{
        return firebase.firestore().collection(whereCollection).orderBy("createdAt","desc").limit(limitCount).get()
    }
}

export function getArticle(where,articleId){
    return firebase.firestore().collection(where).doc(articleId).get();
}