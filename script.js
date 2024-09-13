function delay(ms){
    new Promise(resolve => setTimeout(resolve,ms))
}
function logOutput(text){
    const output=document.getElementById("output");
    output.innerText+=text+"\n";
    output.scrollTop=output.scrollHeight;
}
async function startHacking(){
    const output=document.getElementById("output");
    output.innerText="";
    logOutput("Hackerman initialized......")
    await delay(1000);
    logOutput("Cracking password.......")
    await delay(2000);
    logOutput("Password cracked!")


    logOutput("Branching firewall.....")
    await delay(3000)
    logOutput("firewall branched!")
    logOutput("Accessing confidental data...")
    await delay(1500)
    logOutput("Data accessed!")

    logOutput("Mission accomplished! Hackerman is out!")
}