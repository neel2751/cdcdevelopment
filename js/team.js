import { TEAMDATAPD } from "./data.js";

const teamData = document.getElementById("team-data");

TEAMDATAPD.map((item) => {
  let str = `<div class="text-center"><img class="rounded-full object-cover aspect-auto size-24 border-[#703bf7] border-2 mx-auto" src="${item.image}" alt="Image Description"/><div class="mt-2 sm:mt-4"><h3 class="font-medium text-gray-800">${item.firstName} ${item.lastName}</h3><p class="text-sm text-gray-600">${item.company.department}</p></div></div>`;
  teamData.innerHTML += str;
});
