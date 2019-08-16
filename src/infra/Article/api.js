import firebase from 'firebase';
import uuid from 'uuid';


export function addArticle({whereCollection,title,userId,content,file, userDisplayName, userProfileUrl }) {
    if(file == null){
        const articleId = uuid.v1();
        return firebase.firestore().collection(`${whereCollection}`).doc(articleId).set({
            id: articleId,
            title : title,
            content,
            userId,
            userDisplayName,
            userProfileUrl,
            likeCnt: 0,
            commentCnt: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }else{
        const filename = uuid.v1();
        //중복된 파일명을 피하기 위한 uuid 작업
        const extension = file.name.split('.').pop();
        //파일의 확장자를 때내기위한 작업
        const url = `articles/${filename}.${extension}`;
        //url 새롭게 만들기. 
        const articleRef = firebase.storage().ref().child(url);
        // 해당 url 을 가리키는 포인터 생성.
        return articleRef.put(file)
            .then((snapshot) => {
                return snapshot.ref.getDownloadURL();
            })
            .then((downloadUrl) => {
                const articleId = uuid.v1();
                return firebase.firestore().collection(`${whereCollection}`).doc(articleId).set({
                    id: articleId,
                    title : title,
                    downloadUrl,
                    content,
                    userId,
                    userDisplayName,
                    userProfileUrl,
                    likeCnt: 0,
                    commentCnt: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
        )
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