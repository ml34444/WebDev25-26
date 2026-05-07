let data, info;

async function init(){   
  let link = "311.json";
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
    build += `<div class="card">
                 <h3>${collisions.crash_date}</h3>
                 <h4>${collisions.crash_time}</h4>
                 <h5>${collisions.zip_code}<h5>
                  <hr>
                 <h6 style="font-size:12px;">${collisions.contributing_factor_vehicle_1}</h6>
                 <h6 style="font-size:12px;">${collisions.contributing_factor_vehicle_2}</h6>
                  <hr>
                 <p>${collisions.on_street_name}</p>
                 <p>${collisions.off_street_name}</p>
                  <hr>
                 <p>${collisions.number_of_pedestrians_injured} Pedestrians Injured</p>
                 <p>${collisions.number_of_pedestrians_killed} Pedestrians Killed</p>
                  <hr>
                 <p>${collisions.number_of_cyclist_injured} Cyclists Injured</p>
                 <p>${collisions.number_of_cyclist_killed} Cyclists Killed</p>
                  <hr>
                 <p>${collisions.number_of_motorist_injured} Motorists Injured</p>
                 <p>${collisions.number_of_motorist_killed} Motorists Killed</p>
              </div>`;
    ct+=1;
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterbyCar(){
  let output = document.getElementById("output");
  let car1 = document.getElementById("vehicle1").value;
  let car2 = document.getElementById("vehicle2").value;
  let search = document.getElementById("search");

  let build = "";
  let ct = 0;
  
  for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
    if(collisions.vehicle_type_code1 == car1 && collisions.vehicle_type_code2 == car2){
      build += `<div class="card">
                   <h3>${collisions.crash_date}</h3>
                   <h4>${collisions.crash_time}</h4>
                   <h5>${collisions.zip_code}<h5>
                    <hr>
                   <h6 style="font-size:12px;">${collisions.contributing_factor_vehicle_1}</h6>
                   <h6 style="font-size:12px;">${collisions.contributing_factor_vehicle_2}</h6>
                    <hr>
                   <p>${collisions.on_street_name}</p>
                   <p>${collisions.off_street_name}</p>
                    <hr>
                   <p>${collisions.number_of_pedestrians_injured} Pedestrians Injured</p>
                   <p>${collisions.number_of_pedestrians_killed} Pedestrians Killed</p>
                    <hr>
                   <p>${collisions.number_of_cyclist_injured} Cyclists Injured</p>
                   <p>${collisions.number_of_cyclist_killed} Cyclists Killed</p>
                    <hr>
                   <p>${collisions.number_of_motorist_injured} Motorists Injured</p>
                   <p>${collisions.number_of_motorist_killed} Motorists Killed</p>
                </div>`;
      ct += 1;
    }
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterbyFactor(){
  let output = document.getElementById("output");
  let factor1 = document.getElementById("factor1").value;
  let factor2 = document.getElementById("factor2").value;
  let search = document.getElementById("search");

  let build = "";
  let ct = 0;
  
  for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
    if(collisions.contributing_factor_vehicle_1 == factor1 || collisions.contributing_factor_vehicle_2 == factor1 || collisions.contributing_factor_vehicle_1 == factor2 || collisions.contributing_factor_vehicle_2 == factor2){
      build += `<div class="card">
                   <h3>${collisions.crash_date}</h3>
                   <h4>${collisions.crash_time}</h4>
                   <h5>${collisions.zip_code}<h5>
                    <hr>
                   <h6 style="font-size:12px;">${collisions.contributing_factor_vehicle_1}</h6>
                   <h6 style="font-size:12px;">${collisions.contributing_factor_vehicle_2}</h6>
                    <hr>
                   <p>${collisions.on_street_name}</p>
                   <p>${collisions.off_street_name}</p>
                    <hr>
                   <p>${collisions.number_of_pedestrians_injured} Pedestrians Injured</p>
                   <p>${collisions.number_of_pedestrians_killed} Pedestrians Killed</p>
                    <hr>
                   <p>${collisions.number_of_cyclist_injured} Cyclists Injured</p>
                   <p>${collisions.number_of_cyclist_killed} Cyclists Killed</p>
                    <hr>
                   <p>${collisions.number_of_motorist_injured} Motorists Injured</p>
                   <p>${collisions.number_of_motorist_killed} Motorists Killed</p>
                </div>`;
      ct += 1;
    }
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}
