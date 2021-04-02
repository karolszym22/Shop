export class SearchItem
{
    constructor()
    {
       this.enterWord();
    }
    enterWord()
    {
        const search = document.getElementById("search");
        const devices = JSON.parse(sessionStorage.devices);
        console.log(search);
        search.addEventListener("keypress", function()
        {
            for(let i in devices)
            {
                console.log(devices[i]);
            }
        })
    }
    compareLetters(value,devices)
    {
      
    }
}