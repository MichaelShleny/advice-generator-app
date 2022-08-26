let adviceButton = document.getElementById("btn")
const post = document.querySelector('.post')

adviceButton.addEventListener("click", ()=>{

    async function sendApiRequest(){
        const response = await fetch(`https://api.adviceslip.com/advice`)
        const adviceData = await response.json();
        console.log(adviceData)
        post.innerHTML = useApiData(adviceData)
        return adviceData;
    }
    sendApiRequest()
        .then(whatever => console.log(whatever))
        .catch(error => console.log(error))

})

function useApiData(adviceData){
    return `
        <div class = "advice__wrapper">
           <p class = "advice__id"> Advice #${adviceData.slip.id} <p/>
           <p class = "advice__para"> "${adviceData.slip.advice}" <p/>
        </div>`
}