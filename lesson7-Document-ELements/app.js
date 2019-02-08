
// elementCss.forEach(i=0; i < elementCss.length; i++ => {
//         elementCss[i].style.backgroundcolor = 'green'
// )};
var elementCss = document.getElementsByClassName('btn-style')
elementCss.forEach(element => {
	element.style.backgroundcolor = 'green'

});

var newLiElement = document.createElement('li');
var ul2 = document.getElementsByTagName();
ul2.appendChild(newLiElement);

var textNode = document.createTextNode("test 4");
newLiElement.appendChild(textNode);
ul2.appendChild(newLiElement);

$0.style.color = 'red';

var createDiv = document.createElement('div');
createDiv.createTextNode('HI Good');
createDiv.style.backgroundColor = 'red';
createDiv.style.color = 'green';

document.body.appendChild(createDiv);

////

getComputedStyle(createDiv);
getComputedStyle(createDiv).display;
createDiv.getBoundingClientRect()


setTimeout(() => { createDiv.style.display = 'none' }, 5000);

///
class UiComponent {
	constructor(elementName, color, backgroundColor) {
		this.element = document.createElement(elementName);
		this.element.style.color = color;
		this.element.style.backgroundColor = backgroundColor;
		this.show =	(parent) => {
			parent.appendChild(this.element);
		};
	}
}

myDiv = new UiComponent('div', 'red', 'green');
myDiv.show(document.body);
