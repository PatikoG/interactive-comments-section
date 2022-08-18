import myJson from "../data.json" assert { type: "json" };

const wrapper = document.querySelector(".wrapper");

for (let i = 0; i < myJson.comments.length; i++) {
  let comment = myJson.comments[i];
  wrapper.innerHTML += `
    <div class="amyrobson">
          <div class="personinfo">
            <img class="avatars" src="${comment.user.image.png}">
            <span class="amy"><strong>${comment.user.username}</strong></span> 
            <p class="date">${comment.createdAt}</p>
          </div>
          <div class="texts">
            <p class="text">${comment.content} </p>
          </div>
          <div class="endfoot">
            <div class="plusminus">
                <img class="imgplus" src="./images/icon-plus.svg">
                <span class="score">${comment.score} </span>
                <img class="imgminus" src="./images/icon-minus.svg">
            </div>
            <div class="replybtn">
                <img src="./images/icon-reply.svg">
                <p class="reply">reply</p>
            </div>

          </div>
    </div>   
    

    
        <div class="commentsection"></div>
    `;

    const comsection = document.querySelectorAll(".commentsection");

    for (let p = 0; p < comment.replies.length; p++){
        const reply = comment.replies[p];
        
        comsection[i].innerHTML += `
        <div class="ramses">
            <div class="headers">
                <img src="${reply.user.image.png}">
                <span class="ramsesmiron">${reply.user.username}</span>
                <p class="date">${reply.createdAt}
            </div>

            <div class="textsreplies">
                <p class="text">${reply.content} </p>
            </div>
            <div class="endfoot">
                <div class="plusminus">
                    <img class="imgplus" src="./images/icon-plus.svg">
                    <span class="score">${reply.score} </span>
                    <img class="imgminus" src="./images/icon-minus.svg">
                </div>
                <div class="replybtn">
                    <img src="./images/icon-reply.svg">
                    <p class="reply">reply</p>
                </div>

          </div>
        
        </div>
        
        
        
        `
        




}

}






