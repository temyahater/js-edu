/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let fullTimeEduction;
      let weeks;
      if(knowsProgramming == true) {
        fullTimeEduction = 800;
      }
      else fullTimeEduction = 1300;
      weeks = Math.ceil(fullTimeEduction/config[focus]);
      return weeks;
  };
  