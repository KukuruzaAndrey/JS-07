/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Fighter {
    constructor(name = 'Fighter', power = 10, health = 500) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage) {
        this.health = (this.health - damage > 0) ? this.health - damage : 0;
        const log = document.querySelector('.log');
        const li = document.createElement('li');
        li.innerText = `${this.name} health: ${this.health}`;
        log.appendChild(li);
    }
    hit(enemy, point = 1) {
        enemy.setDamage(point * this.power);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fighter;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fighters_Fight__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fighters_Fighter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fighters_ImprovedFighter__ = __webpack_require__(3);



const fighterNameEl = document.querySelector('.fighter .name');
const fighterPowerEl = document.querySelector('.fighter .power');
const fighterHealthEl = document.querySelector('.fighter .health');
const improvedFighterNameEl = document.querySelector('.improved-fighter  .name');
const improvedFighterPowerEl = document.querySelector('.improved-fighter  .power');
const improvedFighterHealthEl = document.querySelector('.improved-fighter  .health');
const pointsEl = document.querySelector('.points');
const buttonOkEl = document.querySelector('#ok');
const logEL = document.querySelector('.log');
let fighter;
let improvedFighter;
let points;
buttonOkEl.addEventListener('click', () => {
    fighter = new __WEBPACK_IMPORTED_MODULE_1__fighters_Fighter__["a" /* Fighter */](fighterNameEl.value, Number(fighterPowerEl.value), Number(fighterHealthEl.value));
    improvedFighter = new __WEBPACK_IMPORTED_MODULE_2__fighters_ImprovedFighter__["a" /* ImprovedFighter */](improvedFighterNameEl.value, Number(improvedFighterPowerEl.value), Number(improvedFighterHealthEl.value));
    logEL.innerHTML = '';
    points = pointsEl.value.split(',').map(el => Number(el));
    __WEBPACK_IMPORTED_MODULE_0__fighters_Fight__["a" /* Fight */].fight(fighter, improvedFighter, ...points);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Fight {
    static fight(fighter, improvedFighter, ...point) {
        let winner;
        const log = document.querySelector('.log');
        const start = document.createElement('li');
        start.innerText = `*** Fight started: ${fighter.name} vs. ${improvedFighter.name} ***`;
        log.appendChild(start);
        for (let index = 0;; index++) {
            if (fighter.health === 0) {
                winner = improvedFighter;
                break;
            }
            fighter.hit(improvedFighter, point[index % point.length]);
            if (improvedFighter.health === 0) {
                winner = fighter;
                break;
            }
            improvedFighter.doubleHit(fighter, point[index % point.length]);
        }
        const end = document.createElement('li');
        end.innerText = `*** ${winner.name} - winner! ***\nEnd  fight.`;
        log.appendChild(end);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fight;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Fighter__ = __webpack_require__(0);

class ImprovedFighter extends __WEBPACK_IMPORTED_MODULE_0__Fighter__["a" /* Fighter */] {
    doubleHit(enemy, point = 1) {
        super.hit(enemy, point * 2);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImprovedFighter;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODk3MWZhOWFlMmJjYWY0OTk2YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlnaHRlcnMvRmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZ2h0ZXJzL0ltcHJvdmVkRmlnaHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDM0RNO0lBS0YsWUFBWSxPQUFlLFNBQVMsRUFBRSxRQUFnQixFQUFFLEVBQUUsU0FBaUIsR0FBRztRQUMxRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwRSxNQUFNLEdBQUcsR0FB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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODk3MWZhOWFlMmJjYWY0OTk2YTgiLCJpbXBvcnQge0lGaWdodGVyfSBmcm9tIFwiLi9JRmlnaHRlclwiO1xuXG5leHBvcnQgY2xhc3MgRmlnaHRlciBpbXBsZW1lbnRzIElGaWdodGVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcG93ZXI6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9ICdGaWdodGVyJywgcG93ZXI6IG51bWJlciA9IDEwLCBoZWFsdGg6IG51bWJlciA9IDUwMCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgIH1cblxuICAgIHNldERhbWFnZShkYW1hZ2U6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmhlYWx0aCA9ICh0aGlzLmhlYWx0aCAtIGRhbWFnZSA+IDApID8gdGhpcy5oZWFsdGggLSBkYW1hZ2UgOiAwO1xuICAgICAgICBjb25zdCBsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJykgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IGhlYWx0aDogJHt0aGlzLmhlYWx0aH1gO1xuICAgICAgICBsb2cuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIGhpdChlbmVteTogSUZpZ2h0ZXIsIHBvaW50OiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgICAgIGVuZW15LnNldERhbWFnZShwb2ludCAqIHRoaXMucG93ZXIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9maWdodGVycy9GaWdodGVyLnRzIiwiaW1wb3J0IHtGaWdodH0gZnJvbSBcIi4vZmlnaHRlcnMvRmlnaHRcIjtcbmltcG9ydCB7RmlnaHRlcn0gZnJvbSBcIi4vZmlnaHRlcnMvRmlnaHRlclwiO1xuaW1wb3J0IHtJbXByb3ZlZEZpZ2h0ZXJ9IGZyb20gXCIuL2ZpZ2h0ZXJzL0ltcHJvdmVkRmlnaHRlclwiO1xuXG5jb25zdCBmaWdodGVyTmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ2h0ZXIgLm5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgZmlnaHRlclBvd2VyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlnaHRlciAucG93ZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgZmlnaHRlckhlYWx0aEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ2h0ZXIgLmhlYWx0aCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmNvbnN0IGltcHJvdmVkRmlnaHRlck5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXByb3ZlZC1maWdodGVyICAubmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBpbXByb3ZlZEZpZ2h0ZXJQb3dlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcHJvdmVkLWZpZ2h0ZXIgIC5wb3dlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBpbXByb3ZlZEZpZ2h0ZXJIZWFsdGhFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXByb3ZlZC1maWdodGVyICAuaGVhbHRoJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuY29uc3QgcG9pbnRzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRzJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGJ1dHRvbk9rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2snKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGxvZ0VMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG5cbmxldCBmaWdodGVyOiBGaWdodGVyO1xubGV0IGltcHJvdmVkRmlnaHRlcjogSW1wcm92ZWRGaWdodGVyO1xubGV0IHBvaW50czogQXJyYXk8bnVtYmVyPjtcbmJ1dHRvbk9rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmlnaHRlciA9IG5ldyBGaWdodGVyKGZpZ2h0ZXJOYW1lRWwudmFsdWUsIE51bWJlcihmaWdodGVyUG93ZXJFbC52YWx1ZSksIE51bWJlcihmaWdodGVySGVhbHRoRWwudmFsdWUpKTtcbiAgICBpbXByb3ZlZEZpZ2h0ZXIgPSBuZXcgSW1wcm92ZWRGaWdodGVyKFxuICAgICAgICBpbXByb3ZlZEZpZ2h0ZXJOYW1lRWwudmFsdWUsXG4gICAgICAgIE51bWJlcihpbXByb3ZlZEZpZ2h0ZXJQb3dlckVsLnZhbHVlKSxcbiAgICAgICAgTnVtYmVyKGltcHJvdmVkRmlnaHRlckhlYWx0aEVsLnZhbHVlKSk7XG5cbiAgICBsb2dFTC5pbm5lckhUTUwgPSAnJztcbiAgICBwb2ludHMgPSBwb2ludHNFbC52YWx1ZS5zcGxpdCgnLCcpLm1hcChlbCA9PiBOdW1iZXIoZWwpKTtcbiAgICBGaWdodC5maWdodChmaWdodGVyLCBpbXByb3ZlZEZpZ2h0ZXIsIC4uLnBvaW50cyk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAudHMiLCJpbXBvcnQge0ZpZ2h0ZXJ9IGZyb20gXCIuL0ZpZ2h0ZXJcIjtcbmltcG9ydCB7SW1wcm92ZWRGaWdodGVyfSBmcm9tIFwiLi9JbXByb3ZlZEZpZ2h0ZXJcIjtcbmltcG9ydCB7SUZpZ2h0ZXJ9IGZyb20gXCIuL0lGaWdodGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWdodCB7XG4gICAgc3RhdGljIGZpZ2h0KGZpZ2h0ZXI6IEZpZ2h0ZXIsIGltcHJvdmVkRmlnaHRlcjogSW1wcm92ZWRGaWdodGVyLCAuLi5wb2ludDogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuICAgICAgICBsZXQgd2lubmVyOiBJRmlnaHRlcjtcbiAgICAgICAgY29uc3QgbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgc3RhcnQuaW5uZXJUZXh0ID0gYCoqKiBGaWdodCBzdGFydGVkOiAke2ZpZ2h0ZXIubmFtZX0gdnMuICR7aW1wcm92ZWRGaWdodGVyLm5hbWV9ICoqKmA7XG4gICAgICAgIGxvZy5hcHBlbmRDaGlsZChzdGFydCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyA7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChmaWdodGVyLmhlYWx0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdpbm5lciA9IGltcHJvdmVkRmlnaHRlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ2h0ZXIuaGl0KGltcHJvdmVkRmlnaHRlciwgcG9pbnRbaW5kZXggJSBwb2ludC5sZW5ndGhdKTtcblxuICAgICAgICAgICAgaWYgKGltcHJvdmVkRmlnaHRlci5oZWFsdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB3aW5uZXIgPSBmaWdodGVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1wcm92ZWRGaWdodGVyLmRvdWJsZUhpdChmaWdodGVyLCBwb2ludFtpbmRleCAlIHBvaW50Lmxlbmd0aF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGVuZC5pbm5lclRleHQgPSBgKioqICR7d2lubmVyLm5hbWV9IC0gd2lubmVyISAqKipcXG5FbmQgIGZpZ2h0LmA7XG4gICAgICAgIGxvZy5hcHBlbmRDaGlsZChlbmQpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmlnaHRlcnMvRmlnaHQudHMiLCJpbXBvcnQge0lGaWdodGVyfSBmcm9tIFwiLi9JRmlnaHRlclwiO1xuaW1wb3J0IHtGaWdodGVyfSBmcm9tIFwiLi9GaWdodGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBJbXByb3ZlZEZpZ2h0ZXIgZXh0ZW5kcyBGaWdodGVyIHtcbiAgICBkb3VibGVIaXQoZW5lbXk6IElGaWdodGVyLCBwb2ludDogbnVtYmVyID0gMSkge1xuICAgICAgICBzdXBlci5oaXQoZW5lbXksIHBvaW50ICogMik7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9maWdodGVycy9JbXByb3ZlZEZpZ2h0ZXIudHMiXSwic291cmNlUm9vdCI6IiJ9