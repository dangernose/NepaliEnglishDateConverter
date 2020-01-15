converter = require('./main');

solar_year = 31536000 //seconds
solar_day = 86400 //seconds

sidereal_year = 31558149.504  //seconds

sidereal_day = 86164.0905 //seconds = 23.9344696 hour

sidereal_month_duration = (sidereal_year / 12)

// Baisakh 1 2027, Meen to Mesha
// April 14 1970, 12:04 am
                            // Duration of sun in Mesha Rashi
                            // Difference 2672700 seconds
                            // 30 days 22 hours 25 minutes 0 seconds
// Jestha 1 2027, mesh to vrishabha
// May 14 1970, 10:29 pm
                            // Duratioin of sun in Vrishabha Rashi
                            // Diff 2714700 seconds
                            // 31 days 10 hours 5 minutes
// Ashar 1 2027 birhsav to mithun
// June 15 1970, 8:34 am
                            // 2734080 seconds
                            // 31 days 15 hours 28 minutes
// Shrawan 1 2027, mithun to karka
// July 16 1970, 24:02 ie. july 17 00:02
                            // 2719440 seconds
                            // 31 days 11 hours 24 minutes
// Bhadra 1 2027, karka to simha
// Aug 17 1970, 11:26: am
                            // 2680080 seconds
                            // 31 days 0 hours 28 minutes
// Ashoj 1 2027, simha to kanya 
// Sep 17 1970, 11:54 am
                            //   2586960 seconds
                            //   29 days 22 hours 0 minutes
// Kartik 1 2027, kanya to tula
// Oct 17 1970, 10:30 PM
                            //   2626020 seconds
                            //   30 days 09 hours 27 minutes
// Mangsir 1 2027, tula to vrishchik
//Nov 16 1970, 7:57 pm
                            //   2548020 seconds
                            //   29 days 11 hours 47 minutes
// Push 1 2027, vrishik to dhanu 
// Dec 16 1970, 7:44 am
                            //    2533080 seconds
                            // 29 days 7 hours 38 minutes
// Magh 1 2027, dhanu to makar
// Jan 14 1971, 3:22 pm
                            //    2544240 seconds
                            //    29 days 10 hours 44 minutes
// Falgun 1 2027, makar to kumbha
// Feb 13 1971, 2:06 am
                            //    2576520 seconds
                            //    29 days 19 hours 42 minutes
// Chitra 2027 kumbha to meena
// 14 March 1971, 9:48 pm 
                            //    2622540 seconds
                            //    30 days 8 hours 29 minutes
//Baisakh 1 2028, meena to mesh
// April 14 1971: 6:17 am
                           //    2672700 seconds
                           //    30 days 22 hours 25 minutes  
// Jestha 1 2028, mesh to brish
// May 15 1971: 4:42 am 
                            //    2714700 seconds
                            //    31 days 10 hours 5 minutes
// Asar 1 2028, birsh to mithun
// june 15 1971: 2:47 pm

// Today research ends here  ;) duration of sun in Mesha Rashi and Vrishabha Rashi is same in 1970 and 1971
// Time of transition of sun from one rashi to another is picked from drikpanchang.com
// Further research is required for this project



console.log("from google : 2667060")
console.log("sidereal month duration " + sidereal_month_duration);
console.log("solar month duration " + (solar_year/12))
console.log(~~(sidereal_year/(24*60*60)));
console.log(sidereal_year/sidereal_day/12);

// Name of Rashi(Zodiac)
/**
 * Mesh Brish Mithun Karka
 * Sinh Kanya Tula   Brisck
 * Dhanu Makar Kumbha Meen
 */

 /**
  * Aries  Taurus Gemini Cancer
  * Leo    Virgo  Libra  Scorpio
  * Saggt  Capri  Aqua   Pieces
  */

  /**
   * Baisakh  Jestha  Ashar   Sawan
   * Bhadra   Ashoj   Kartik  Mangsir
   * Poush    Magha   Falgun  Chitra
   */
  
   /**
    * the day when the sun transit to each rashi
    * the day is also called sankranti
    * is the first day of the month
    * for e.g sun transit to Aries is 1st day of Baisakh
    * Not to be confused with transition of sun in zodiac in tropical calendar system
    * because transition of sun in zodiac is different in hindu calendar
    * i.e. sidereal calendar system.
    */