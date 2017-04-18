import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs';

// const badges = [
//   {
//     name: "The Beginner",
//     image: "01.png",
//   },
//   {
//     name: "The Cleaner",
//     image: "02.png",
//   },
//   {
//     name: "Sanitizer Adept",
//     image: "03.png",
//   },
//   {
//     name: "The Health Seeker",
//     image: "04.png",
//   },
//   {
//     name: "Flu Fighter",
//     image: "05.png",
//   },
//   {
//     name: "Master Cleaner",
//     image: "06.png",
//   },
//   {
//     name: "Hand Hygiene Pro",
//     image: "07.png",
//   },
//   {
//     name: "Sanitizing Expert",
//     image: "08.png",
//   },
//   {
//     name: "The Alchemist",
//     image: "09.png",
//   },
//   {
//     name: "Flu Fighter Legend",
//     image: "10.png",
//   },
//   {
//     name: "Healthy and Whole",
//     image: "11.png",
//   },
//   {
//     name: "Hand Hygiene Expert",
//     image: "12.png",
//   },
//   {
//     name: "Sanitizer Legend",
//     image: "13.png",
//   },
//   {
//     name: "Flu Fighter Hero",
//     image: "14.png",
//   },
//   {
//     name: "Germ Free Specialist",
//     image: "15.png",
//   },
// ];

@Injectable()
export class ProfileService {
  constructor(private af: AngularFire) {
  }

  getAllBadges(uid) {
    return Observable.combineLatest(this.af.database.list('badge'),
                                    this.af.database.object(`users/${uid}/progress/actions`),
                                    (badges, actions) => {
                                      
                                      badges.forEach(function(badgeItem){
                                        let enableFlag = true;
                                        let tipPart = '';
                                        badgeItem.actions = {};

                                        Object.keys(badgeItem.condition).forEach(function(key){
                                          if (actions[key] == undefined) actions[key] = 0;
                                          if (actions[key] < badgeItem.condition[key]) enableFlag = false;

                                          if (badgeItem.condition[key] == 0) return;

                                          let starNum = Math.round(actions[key] * 5 / badgeItem.condition[key]);

                                          tipPart += key + '&nbsp; <div class="ui star rating">';
                                          tipPart += "<i class='active icon'></i>".repeat(starNum);
                                          tipPart += "<i class='icon'></i>".repeat(5 - starNum);
                                          tipPart += "</div>";
                                          tipPart += '&nbsp; &nbsp;' + actions[key] + '/' + badgeItem.condition[key];
                                          tipPart += "<br>";

                                          badgeItem.actions[key] = actions[key];
                                        });

                                        badgeItem.tip =`<div class='header'>
                                                          ${badgeItem.description}
                                                        </div>
                                                        <div class='content'>` + tipPart + `</div>`;

                                        badgeItem.enabled = enableFlag;
                                      });

                                      return badges;
                                    }
                              );
  }

  getAwardedBadges(uid) {
    return this.af.database.list(`users/${uid}/progress/badges`);
  }

  getUpdateBadgeList(uid) {

    return this.getAwardedBadges(uid).switchMap(function(badgeList){
      return this.getAllBadges().map( function(badges){
          let updateList = [];

          badges.forEach(function(badgeItem){
            if (badgeItem.enabled && !contains(badgeList, badgeItem)) updateList.push(badgeItem);
          });

          return updateList;
        }
      );
      // return this.af.database.object(`users/${uid}/progress/actions`).map(function(actions){

      //   let updateList = [];

      //   if (!contains(badgeList, badges[0])) updateList.push(badges[0]);

      //   if (actions['Sanitizing Wipes'] != undefined && actions['Sanitizing Wipes'] > 0)
      //     if (!contains(badgeList, badges[1])) updateList.push(badges[1]);

      //   if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] > 0)
      //     if (!contains(badgeList, badges[2])) updateList.push(badges[2]);

      //   if (actions['Phone'] != undefined)
      //     if (!contains(badgeList, badges[3])) updateList.push(badges[3]);

      //   if (actions['Sanitizing Wipes'] != undefined && actions['Sanitizing Wipes'] >= 10)
      //     if (!contains(badgeList, badges[5])) updateList.push(badges[5]);

      //   if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 5)
      //     if (!contains(badgeList, badges[6])) updateList.push(badges[6]);

      //   if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 10)
      //     if (!contains(badgeList, badges[7])) updateList.push(badges[7]);

      //   if (actions['Medicine'] != undefined && actions['Medicine'] >= 10)
      //     if (!contains(badgeList, badges[8])) updateList.push(badges[8]);

      //   if (actions['Wash Hands'] != undefined && actions['Wash Hands'] >= 20)
      //     if (!contains(badgeList, badges[10])) updateList.push(badges[10]);

      //   if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 20)
      //     if (actions['Wash Hands'] != undefined && actions['Wash Hands'] >= 20)
      //       if (!contains(badgeList, badges[11])) updateList.push(badges[11]);

      //   if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 50)
      //     if (!contains(badgeList, badges[12])) updateList.push(badges[12]);
        
      //   return updateList;
        
      // });
    }.bind(this));
  }

  getProgramProgressPercent(uid, programName){
    // Timer Way
    // let casesCompleted  = 0;
    // let casesOfProgram = -1;

    // this.af.database.list(`users/${uid}/progress/programs/${programName}/casesCompleted`).subscribe(function(obj){
    //   casesCompleted = obj.length - 1;
    // });
    
    // this.af.database.list(`sim/${programName}`).subscribe(function(obj){
    //   casesOfProgram = obj.length - 1;
    // });

    // return Observable.create(subscriber => {
    //   setInterval(() => {
    //     let percent = casesCompleted / casesOfProgram * 100;
    //     if (percent < 0) percent = 0;
    //     if (percent > 100) percent = 100;
    //       subscriber.next(percent);
    //     }, 1000);
    // });

    return Observable.combineLatest(this.af.database.list(`users/${uid}/progress/programs/${programName}/casesCompleted`),
                                    this.af.database.list(`sim/${programName}`),
                                    (casesCompleted, casesOfProgram) => {
                                       if (casesOfProgram.length != 1) return Math.round(100 * (casesCompleted.length - 1) / (casesOfProgram.length - 1));
                                       else return 0;
                                    }
    );
  }

  getNextCase(uid, programName) {
    // let nextCase = null; // This is possible, but it is stored into combineLatest function context so it could be not null, previous value. so it returns incorrect result.

    return Observable.combineLatest(this.af.database.list(`users/${uid}/progress/programs/${programName}/casesCompleted`),
                                    this.af.database.list(`sim/${programName}`),
                                    (casesCompleted, casesOfProgram) => {
                                      let nextCase = null;
                                      // console.log(casesCompleted);
                                      // console.log(casesOfProgram);
                                      for(let i in casesOfProgram) {
                                        let flag = false;
                                        // console.log(flag);

                                        if(casesOfProgram[i].$key == "program") continue;

                                        for(let j in casesCompleted) {
                                          // console.log(`${casesOfProgram[i].$key} ${casesCompleted[j].$value}`)
                                          if (casesOfProgram[i].$key == casesCompleted[j].$value) { flag=true; break; };
                                        }

                                        if(flag) continue; else {
                                          nextCase = casesOfProgram[i];
                                          break;
                                        }
                                      }
                                      
                                      // console.log(nextCase);
                                      return (nextCase != null) ? nextCase : casesOfProgram[0];
                                    }
    );
  }

  awardBadgeToUser(uid, badge){
    this.af.database.list(`users/${uid}/progress/badges`).push(badge);
  }
}

function contains(a, obj) {
  // console.log(obj);
    for (var i = 0; i < a.length; i++) {
      // console.log(a[i]);
        if (a[i].name === obj.name) {
            return true;
        }
    }
    return false;
}