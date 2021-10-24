(()=>{"use strict";var t,e=function(){function t(e){if(void 0===e&&(e="div"),this.constructor===t)throw Error("This abstract class and it can use only such supper class");this.element=t.createElement({tagName:e})}return t.createElement=function(t){var e=t.tagName,n=void 0===e?"div":e,r=t.className,a=t.children,o=void 0===a?[]:a,i=document.createElement(n);if(r&&i.classList.add(r),o.length)for(var s=0,l=o;s<l.length;s++){var d=l[s];i.appendChild(d)}return i},t.prototype.getElement=function(){return this.element},t.prototype.addChildren=function(t){if(t.length)for(var e=0,n=t;e<n.length;e++){var r=n[e];this.element.appendChild(r.getElement())}},t}(),n=(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),r=new(function(t){function r(){var n=t.call(this)||this;return n.element.classList.add("add-board"),n.addBoardButton=e.createElement({className:"add-board__button"}),n.addBoardButton.innerText="Add board",n.element.appendChild(n.addBoardButton),n}return n(r,t),r.prototype.onClick=function(t){this.element.addEventListener("click",t)},r}(e)),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},o.apply(this,arguments)},i=function(t,e,n){if(n||2===arguments.length)for(var r,a=0,o=e.length;a<o;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))},s=function(t){function n(){var n=t.call(this)||this;return n.state={value:"",items:[]},n.element.classList.add("board"),n.titleElement=e.createElement({className:"board__title"}),n.titleElement.contentEditable="true",n.titleElement.innerText="Input board title",n.element.appendChild(n.titleElement),n.listElement=e.createElement({className:"board__list"}),n.element.appendChild(n.listElement),n.textarea=e.createElement({className:"board__form-textarea",tagName:"textarea"}),n.textarea.ariaPlaceholder="Input your task",n.textarea.value=n.state.value,n.textarea.addEventListener("input",(function(t){n.setState({value:t.target.value})})),n.addButton=e.createElement({className:"board__form-button",tagName:"button"}),n.addButton.classList.add("board__form-button_success"),n.addButton.innerText="Add card",n.addButton.addEventListener("click",(function(t){t.preventDefault(),n.setState({items:i(i([],n.state.items,!0),[{id:(new Date).toString(),text:n.state.value}],!1)}),n.hiddenForm()})),n.cancelButton=e.createElement({className:"board__form-button",tagName:"button"}),n.cancelButton.classList.add("board__form-button_alert"),n.cancelButton.innerText="Cancel",n.cancelButton.addEventListener("click",(function(t){t.preventDefault(),n.hiddenForm()})),n.formButtons=e.createElement({className:"board__form-buttons",children:[n.addButton,n.cancelButton]}),n.form=e.createElement({className:"board__form",tagName:"div",children:[n.textarea,n.formButtons]}),n.element.appendChild(n.form),n.addCardButton=e.createElement({className:"board__add-card-button"}),n.addCardButton.innerHTML="<span>+</span> Add card",n.addCardButton.addEventListener("click",(function(t){n.showForm()})),n.element.appendChild(n.addCardButton),n}return a(n,t),n.prototype.showForm=function(){this.form.style.display="block",this.addCardButton.style.display="none",this.addButton.style.pointerEvents="none",this.addButton.style.opacity=".3",this.textarea.focus()},n.prototype.hiddenForm=function(){this.form.style.display="none",this.addCardButton.style.display="flex",this.setState({value:""})},n.prototype.renderItems=function(t,e){for(var n=Math.max(t.length,e.length),r=0;r<n;r++){var a=e[r],o=t[r];if(!a&&o)return void this.element.children[r].remove();!a||o?a.text!==o.text&&(this.element.children[r].innerHTML=a.text):this.addItem(a)}},n.prototype.addItem=function(t){var n=e.createElement({className:"board__item"});n.draggable=!0,n.innerText=t.text,n.dataset.id=t.id,this.listElement.appendChild(n)},Object.defineProperty(n.prototype,"items",{set:function(t){this.setState({items:t})},enumerable:!1,configurable:!0}),n.prototype.setState=function(t){var e=o({},this.state);this.state=o(o({},this.state),t),e.value!==this.state.value&&(this.textarea.value=this.state.value,this.state.value?(this.addButton.style.pointerEvents="auto",this.addButton.style.opacity="1"):(this.addButton.style.pointerEvents="none",this.addButton.style.opacity=".3")),this.renderItems(e.items,this.state.items)},n}(e),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(t){function e(e){var n=t.call(this)||this;return n.element.classList.add("boards__item"),n.addChildren([e]),n}return l(e,t),e}(e),c=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(){return u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},u.apply(this,arguments)};const p=new(function(t){function e(){var e=t.call(this)||this;return e.itemsWithPointerEventNone=[],e.element.classList.add("boards"),e.element.addEventListener("dragstart",(function(t){t.target.classList.contains("board__item")&&setTimeout((function(){t.target.style.display="none",e.dragItem=t.target}),0)})),e.element.addEventListener("dragend",(function(t){t.target.classList.contains("board__item")&&setTimeout((function(){t.target.style.display="block",e.dragItem=void 0}),0)})),e.element.addEventListener("dragover",(function(t){t.target.classList.contains("board__item")&&(t.target.style.pointerEvents="none",e.itemsWithPointerEventNone.push(t.target)),t.target.classList.contains("board__list")&&t.preventDefault()})),e.element.addEventListener("dragenter",(function(t){t.target.classList.contains("board__list")&&(t.target.style.background="rgb(34 54 71)")})),e.element.addEventListener("dragleave",(function(t){t.target.classList.contains("board__list")&&(t.target.style.background="none")})),e.element.addEventListener("drop",(function(t){t.target.classList.contains("board__list")&&(t.target.style.background="none",t.target.appendChild(e.dragItem)),e.itemsWithPointerEventNone.forEach((function(t){return t.style.pointerEvents="auto"})),e.itemsWithPointerEventNone=[]})),e.state={boards:[]},e}return c(e,t),e.prototype.addChildren=function(t){if(t.length)for(var e=0,n=t;e<n.length;e++){var r=n[e];this.element.appendChild(new d(r).getElement())}},e.prototype.updates=function(t){var e=u({},this.state);this.state=u(u({},this.state),t(this.state));for(var n=e.boards,r=this.state.boards,a=Math.max(n.length,r.length),o=0;o<a;o++){var i,l=r[o],d=n[o];if(!l&&d)return void this.element.children[o].remove();!l||d?l.id!==d.id&&(this.element.children[o].remove(),(i=new s).items=l.items,this.addChildren([i])):((i=new s).items=l.items,this.addChildren([i]))}},e}(e));var f,m=function(t,e,n){if(n||2===arguments.length)for(var r,a=0,o=e.length;a<o;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))};(f=document.getElementById("root")).innerHTML="",f.appendChild(p.getElement()),f.appendChild(r.getElement()),r.onClick((function(){p.updates((function(t){return{boards:m(m([],t.boards,!0),[{id:(new Date).toString(),items:[]}],!1)}}))}))})();