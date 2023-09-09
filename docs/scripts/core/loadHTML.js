
    async function getJson(Raw_URL_JSON){
      
      try{
        let response = await fetch(Raw_URL_JSON);
        const content = await response.json();
        console.log(content);
        return content;
      }
      catch{
        console.log('ER');
      }
    }
    async function createList(jsonObj){
      try{

        for(i = 0; i < jsonObj.Content; i++){ 
          
          let A = document.getElementById("content-load");

        }



      }
      catch {
        console.log('ER');
      }
    }

    // package of fetching json, creating elements, binding together and then listing them on document 

    async function PackageAll(){

      let content  = await getJson("https://raw.githubusercontent.com/TheeVoid/TheeVoid.github.io/main/navigation.json");
      let list        = await createList(content);
      let element     = createElement();

    }


/*
    // idk not SAT solver but i need some binging-creating elements function so i dont have to specify every single one  - multiple paranthesis grind 

    function createElement(shitshow){
      if(shitshow == null) 
      {
        console.log(shitshow);
        return;
      }

      else{


        return createElement();

      }
    }

    /sshit thing to implement, maybe later */

  