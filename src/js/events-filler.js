import { app } from "./firebase-init";
import { getDatabase, ref, get} from "firebase/database";

const database=getDatabase(app);

async function readDB(reference) {
    return await get(ref(database, reference));
}

async function EventsFiller(){
    let data=await readDB("data");
    data=await data.val();
    data=await [...data];
    data=data.sort((a,b)=>{
        if(a["date"]>b["date"]){
            return 1;
        }
        else if(b["date"]===a["date"]){
            return 0;
        }
        else{
            return -1;
        }
    });
    console.log(data);
    await data.forEach(d=>{
        let element=document.createElement("div");
        element.classList.add("event-cont");
        element.innerHTML=` <div class="img-cont">
        <img src="${d["url"]}" alt="Event Image">
        </div>
        <div class="text-cont">
        <h1 class="event-head">
          ${d["name"]}
        </h1>
        <div class="event-des">
        </div>
        <div class="enroll-cont">
            <div class="wrapper">
                <div class="event-date-cont">
                    <h2 class="happen-cont">Happened On:</h2>
                    <div class="date-cont">${d["date"]}</div>
                </div>
            </div>
        </div>
      </div>`;
      element.querySelector(".event-des").textContent=d["des"];
      document.querySelector(".main-cont").appendChild(element);
    })
}

EventsFiller();