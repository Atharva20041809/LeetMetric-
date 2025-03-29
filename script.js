async function callinga_api(user_name){
    let leetcode_fetch= await fetch(`https://leetcode-stats-api.herokuapp.com/${user_name}`)
    let response=await leetcode_fetch.json()
    console.log(response)
    let visual=document.querySelector(".visual")
    if (response.status=="success"){
        visual.innerHTML=`
        <p class="details">Easy Solved:${response.easySolved}</p>
        <p class="details">Hard Solved:${response.hardSolved}</p>
        <p class="details">Medium Solved:${response.mediumSolved}</p>
        <p class="details">Ranking:${response.ranking}</p>
        `
    }else{
        visual.innerHTML=`<p class="error">Incorrect username, Please Enter correct username</p>`
    }
    
}
document.querySelector(".show").addEventListener("click",()=>{
    let user_name=document.querySelector(".userinput").value.trim()
    callinga_api(user_name)
})