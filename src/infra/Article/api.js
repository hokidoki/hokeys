import firebase from 'firebase';
import uuid from 'uuid';

export async function imageSrcSet(content,whereCollection){
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;    
    
        let img = tempDiv.getElementsByTagName("img");
        if(img.length){
            let array = [];
                for(let i = 0; i <= img.length-1; i++){
                    let dataUrl = img[i].src;
                    if(isDataURL(dataUrl)){
                        console.log(19);
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
    
                        await putSting(dataUrl,docName).then((downloadURL)=>{
                            tempDiv.getElementsByTagName("img")[i].src = downloadURL;
                            tempDiv.getElementsByTagName("img")[i].className = "articleImg"
                            array.push(docName);
                        })
                    }
                }
                return new Promise((resolve)=>{
                                resolve({
                                    content : tempDiv.outerHTML,
                                    imgDocNames : array
                                })
                })
            }else{
                return new Promise((resolve)=>{
                    resolve({
                        content : tempDiv.outerHTML
                    })
                })
        }
}

function putSting(dataUrl,docName){
    return new Promise((resolve)=>{
        let articleRef = firebase.storage().ref().child(docName);
        articleRef.putString(dataUrl,'data_url').then((snapshot)=>{
            resolve(snapshot.ref.getDownloadURL());
        })
    })
}

function isDataURL(s) {
    const dataUrlRegex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)\s*$/i;
    return !!s.match(dataUrlRegex);
}


export function addArticle({whereCollection,title,userId,doc,userDisplayName, userProfileUrl }) {
    console.log(doc)
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

export function deleteArticle(whereCollection,articleId){
    return firebase.firestore().collection(whereCollection).doc(articleId).delete();
}

export function updateArticle({whereCollection, articleId, title, doc, userId, userDisplayName, userProfileUrl,createdAt }){
    if(doc.imgDocNames){
        return firebase.firestore().collection(`${whereCollection}`).doc(articleId).update({
            id: articleId,
            title : title,
            content : doc.content,
            imgDocNames : doc.imgDocNames,
            userId,
            userDisplayName,
            userProfileUrl,
            likeCnt: 0,
            commentCnt: 0,
            createdAt: createdAt,
            updatedAt: new Date()
        });
    }else{
        return firebase.firestore().collection(`${whereCollection}`).doc(articleId).update({
            id: articleId,
            title : title,
            content : doc.content,
            userId,
            userDisplayName,
            userProfileUrl,
            likeCnt: 0,
            commentCnt: 0,
            createdAt: createdAt,
            updatedAt: new Date()
        });
    }
}