webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdownContainer__3pqLs {\\n    display: flex;\\n    align-items: center;\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div {\\n    flex: 1 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background: var(--white);\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span {\\n    flex: 1 1;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:last-child {\\n    border-left: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n    background: var(--blue);\\n    color: var(--white);\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n\\n    transition: background-color 0.2s;\\n}\\n\\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\\n    background: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc{\\n    background: var(--white);\\n    color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover{\\n    background: var(--red);\\n    color: var(--white);\\n}\\n\\n.Countdown_countdownButton__2cSHU:disabled {\\n    background: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;;IAEP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,wBAAwB;IACxB,wCAAwC;IACxC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;;IAEhB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,mBAAmB;AACvB\",\"sourcesContent\":[\".countdownContainer {\\n    display: flex;\\n    align-items: center;\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.countdownContainer > div {\\n    flex: 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background: var(--white);\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n.countdownContainer > div span {\\n    flex: 1;\\n}\\n\\n.countdownContainer > div span:first-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > div span:last-child {\\n    border-left: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n    background: var(--blue);\\n    color: var(--white);\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n\\n    transition: background-color 0.2s;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n    background: var(--blue-dark);\\n}\\n\\n.countdownButtonActive{\\n    background: var(--white);\\n    color: var(--title);\\n}\\n\\n.countdownButtonActive:not(:disabled):hover{\\n    background: var(--red);\\n    color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n    background: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Countdown_countdownContainer__3pqLs\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzQyZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHlDQUF5QyxvQkFBb0IsMEJBQTBCLDRCQUE0Qix1QkFBdUIsMEJBQTBCLEdBQUcsZ0RBQWdELGdCQUFnQixzQkFBc0IsMEJBQTBCLG9DQUFvQyxpQ0FBaUMsK0NBQStDLHlCQUF5Qix3QkFBd0IseUJBQXlCLEdBQUcscURBQXFELGdCQUFnQixHQUFHLGlFQUFpRSxzQ0FBc0MsR0FBRyxnRUFBZ0UscUNBQXFDLEdBQUcsaURBQWlELHlCQUF5Qix1QkFBdUIsR0FBRyx1Q0FBdUMsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLDJCQUEyQix1QkFBdUIsMENBQTBDLEdBQUcsNERBQTRELG1DQUFtQyxHQUFHLDRDQUE0QywrQkFBK0IsMEJBQTBCLEdBQUcsaUVBQWlFLDZCQUE2QiwwQkFBMEIsR0FBRyxnREFBZ0QsK0JBQStCLHlCQUF5QiwwQkFBMEIsR0FBRyxTQUFTLDJHQUEyRyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSwrQ0FBK0Msb0JBQW9CLDBCQUEwQiw0QkFBNEIsdUJBQXVCLDBCQUEwQixHQUFHLCtCQUErQixjQUFjLHNCQUFzQiwwQkFBMEIsb0NBQW9DLGlDQUFpQywrQ0FBK0MseUJBQXlCLHdCQUF3Qix5QkFBeUIsR0FBRyxvQ0FBb0MsY0FBYyxHQUFHLGdEQUFnRCxzQ0FBc0MsR0FBRywrQ0FBK0MscUNBQXFDLEdBQUcsZ0NBQWdDLHlCQUF5Qix1QkFBdUIsR0FBRyxzQkFBc0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLDJCQUEyQix1QkFBdUIsMENBQTBDLEdBQUcsMkNBQTJDLG1DQUFtQyxHQUFHLDJCQUEyQiwrQkFBK0IsMEJBQTBCLEdBQUcsZ0RBQWdELDZCQUE2QiwwQkFBMEIsR0FBRywrQkFBK0IsK0JBQStCLHlCQUF5QiwwQkFBMEIsR0FBRyxxQkFBcUI7QUFDdDVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiB7XFxuICAgIGZsZXg6IDEgMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbiB7XFxuICAgIGZsZXg6IDEgMTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09je1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPYzpub3QoOmRpc2FibGVkKTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBTzs7SUFFUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7SUFFN0Isd0JBQXdCO0lBQ3hCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQU87QUFDWDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvdW50ZG93bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uQWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmU6bm90KDpkaXNhYmxlZCk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVVwiLFxuXHRcImNvdW50ZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css\n");

/***/ })

})