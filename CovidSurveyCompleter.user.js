// ==UserScript==
// @name         Covid Survey Completor
// @description  Automatically complete Marist College Covid Survey
// @match     https://my.marist.edu/covid-19-self-report*
// @author Mitchell Macijauskas, Kyle DePace 2021
// ==/UserScript==


// Implementation: Use TamperMonkey for Chrome, copy and paste entire code and File --> Save

document.querySelector(".form-2 > .control-group:nth-of-type(2) > label:nth-child(2)").click()
document.querySelector(".form-2 > .control-group:nth-of-type(3) > label:nth-child(2)").click()
document.querySelector(".form-4 > .control-group > label:nth-child(2)").click()

document.querySelector("#_Covid19Form_WAR_Kitsunesenportlet_submitBtn").click()
