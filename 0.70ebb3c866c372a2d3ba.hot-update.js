webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Created by Edward_J_Apostol on 2017-01-28.\n */\n\n// this class is responsible for displaying the product data...\n// Perhaps in a carousel.\nvar CatalogView = function () {\n    function CatalogView() {\n        _classCallCheck(this, CatalogView);\n\n        this.initCarousel();\n        this.theApp = null;\n    }\n\n    _createClass(CatalogView, [{\n        key: \"initCarousel\",\n        value: function initCarousel() {\n            console.log(\"initializing carousel\");\n\n            this.carousel = document.getElementsByClassName(\"container\");\n        }\n    }, {\n        key: \"onClickCartButton\",\n        value: function onClickCartButton(theApp) {\n\n            return function (e) {\n                console.log(e.target.getAttribute[\"data-sku\"]); //getAttribute.data-sku\n                var theSku = e.target.getAttribute(\"data-sku\");\n                this.theApp.shoppingCart.addItemToCart(theSku);\n            }; //create function addItemToCart ()\n        }\n    }, {\n        key: \"addProductsToCarousel\",\n        value: function addProductsToCarousel(products, theApp) {\n\n            this.theApp = theApp;\n\n            if (products === undefined || products == null) {\n                return; // do not do anything! there is no data\n            }\n\n            /* the loop creates all the elements for each item in the carousel.\n             * it recreates the following structure\n             * <div class=\"product-wrapper\">\n             * <img src=\"images/stretch-knit-dress.jpg\" alt=\"Image of stretch knit dress\" />\n             * <p class=\"product-type\">Dresses</p>\n             * <h3>Stretch Knit Dress</h3>\n             * <p class=\"price\">$169.00</p>\n             * </div>\n              * */\n            for (var p = 0; p < products.length; p++) {\n                var product = products[p];\n                console.log(product);\n                // each product is a product object\n                // use it to create the element\n\n                // create the DIV tag with class 'product-wrapper'\n                var newDiv = document.createElement(\"div\");\n                newDiv.setAttribute(\"class\", \"product-wrapper\");\n\n                // create a new IMG tag. Suggest to add data-sku attribute here too\n                // so that if you 'click' on the image, it would pop up a quick-view\n                // window and you can use the sku.\n                var newImg = document.createElement(\"img\");\n                newImg.setAttribute(\"src\", product.image);\n                newImg.setAttribute(\"alt\", \"\" + product.name); // this works too\n                newImg.setAttribute(\"data-sku\", product.sku);\n\n                // create a new Paragraph to show a description\n                var newPara = document.createElement(\"p\");\n                newPara.setAttribute(\"class\", \"product-type\");\n                var newParaTextNode = document.createTextNode(product.longDescription);\n                newPara.appendChild(newParaTextNode);\n\n                // create a new H3 tag to show the name\n                var newH3Tag = document.createElement(\"h3\");\n                var newH3TagTextNode = document.createTextNode(product.name);\n                newH3Tag.appendChild(newH3TagTextNode);\n\n                var newPricePara = document.createElement(\"p\");\n                newPricePara.setAttribute(\"class\", \"price\");\n                var newPriceParaTextNode = document.createTextNode(product.regularPrice);\n                newPricePara.appendChild(newPriceParaTextNode);\n\n                /* you will need similar code to create\n                an add to cart and a quick view button\n                remember that each button you create should have\n                a data-sku attribute that corresponds to the sku\n                of each product.\n                */\n\n                var quickViewButton = document.createElement(\"button\");\n                quickViewButton.setAttribute(\"id\", \"qv\" + product.sku);\n                quickViewButton.setAttribute(\"data-sku\", product.sku);\n                quickViewButton.setAttribute(\"type\", \"button\");\n                var quickViewTextNode = document.createTextNode(\"Quick View\");\n                quickViewButton.appendChild(quickViewTextNode);\n\n                var addToCartButton = document.createElement(\"button\");\n                addToCartButton.setAttribute(\"id\", \"cart_\" + product.sku);\n                addToCartButton.setAttribute(\"data-sku\", product.sku);\n                addToCartButton.setAttribute(\"type\", \"button\");\n                var addCartTextNode = document.createTextNode(\"Add To Cart\");\n                addToCartButton.appendChild(addCartTextNode);\n                addToCartButton.addEventListener(\"click\", this.onClickCartButton(this.theApp), false);\n\n                newDiv.appendChild(newImg);\n                newDiv.appendChild(newPara);\n                newDiv.appendChild(newH3Tag);\n                newDiv.appendChild(newPricePara);\n                newDiv.appendChild(quickViewButton); // added new quickView Button\n                newDiv.appendChild(addToCartButton); // added new addToCartButton\n                /*\n                * <div>\n                    <img src=\"somepicfrombestbuy\"></img.\n                    <p>buy me now</p>\n                    <h3>Dell Inspirion 12\"</h3>\n                    <p>299.99</p>\n                    <button id=\"qv_${product.sku}\" data-sku\" type=\"button\">Quick View</button>\n                    <button id = \"cart_${product.sku}\" data-sku=\"\" type =\"button\">Add To Cart</button>\n                    </div>\n                         */\n                document.getElementById('c').appendChild(newDiv);\n            }\n        }\n    }]);\n\n    return CatalogView;\n}();\n\nexports.default = CatalogView;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQ2F0YWxvZ1ZpZXcuanM/OTBmMSJdLCJuYW1lcyI6WyJDYXRhbG9nVmlldyIsImluaXRDYXJvdXNlbCIsInRoZUFwcCIsImNvbnNvbGUiLCJsb2ciLCJjYXJvdXNlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVTa3UiLCJzaG9wcGluZ0NhcnQiLCJhZGRJdGVtVG9DYXJ0IiwicHJvZHVjdHMiLCJ1bmRlZmluZWQiLCJwIiwibGVuZ3RoIiwicHJvZHVjdCIsIm5ld0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJuZXdJbWciLCJpbWFnZSIsIm5hbWUiLCJza3UiLCJuZXdQYXJhIiwibmV3UGFyYVRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJsb25nRGVzY3JpcHRpb24iLCJhcHBlbmRDaGlsZCIsIm5ld0gzVGFnIiwibmV3SDNUYWdUZXh0Tm9kZSIsIm5ld1ByaWNlUGFyYSIsIm5ld1ByaWNlUGFyYVRleHROb2RlIiwicmVndWxhclByaWNlIiwicXVpY2tWaWV3QnV0dG9uIiwicXVpY2tWaWV3VGV4dE5vZGUiLCJhZGRUb0NhcnRCdXR0b24iLCJhZGRDYXJ0VGV4dE5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0NhcnRCdXR0b24iLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBSUE7QUFDQTtJQUNxQkEsVztBQUVqQiwyQkFBYTtBQUFBOztBQUNULGFBQUtDLFlBQUw7QUFDQSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUVIOzs7O3VDQUdhO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVksdUJBQVo7O0FBSUcsaUJBQUtDLFFBQUwsR0FBZ0JDLFNBQVNDLHNCQUFULENBQWdDLFdBQWhDLENBQWhCO0FBRUg7OzswQ0FFaUJMLE0sRUFBTzs7QUFFckIsbUJBQU8sVUFBU00s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WUFBaEIsQ0FBNkIsTUFBN0IsRUFBcUMsUUFBckM7QUFDQSxvQkFBSWtCLGtCQUFrQmpDLFNBQVNzQixjQUFULENBQXdCLGFBQXhCLENBQXRCO0FBQ0FVLGdDQUFnQlIsV0FBaEIsQ0FBNEJTLGVBQTVCO0FBQ0FELGdDQUFnQkUsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUtDLGlCQUFMLENBQXVCLEtBQUt2QyxNQUE1QixDQUExQyxFQUE4RSxLQUE5RTs7QUFFQWlCLHVCQUFPVyxXQUFQLENBQW1CUixNQUFuQjtBQUNBSCx1QkFBT1csV0FBUCxDQUFtQkosT0FBbkI7QUFDQVAsdUJBQU9XLFdBQVAsQ0FBbUJDLFFBQW5CO0FBQ0FaLHVCQUFPVyxXQUFQLENBQW1CRyxZQUFuQjtBQUNBZCx1QkFBT1csV0FBUCxDQUFtQk0sZUFBbkIsRUE3RGlDLENBNkRJO0FBQ3JDakIsdUJBQU9XLFdBQVAsQ0FBbUJRLGVBQW5CLEVBOURpQyxDQThESTtBQUNyQzs7Ozs7Ozs7OztBQVdBaEMseUJBQVNvQyxjQUFULENBQXdCLEdBQXhCLEVBQTZCWixXQUE3QixDQUF5Q1gsTUFBekM7QUFDQztBQUdSOzs7Ozs7a0JBM0hnQm5CLFciLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBFZHdhcmRfSl9BcG9zdG9sIG9uIDIwMTctMDEtMjguXG4gKi9cblxuLy8gdGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgZGlzcGxheWluZyB0aGUgcHJvZHVjdCBkYXRhLi4uXG4vLyBQZXJoYXBzIGluIGEgY2Fyb3VzZWwuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nVmlld3tcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XG4gICAgICAgIHRoaXMudGhlQXBwID0gbnVsbDtcblxuICAgIH1cblxuXG4gICAgaW5pdENhcm91c2VsKCl7XG4gICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nIGNhcm91c2VsXCIpO1xuXG5cblxuICAgICAgICB0aGlzLmNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKTtcblxuICAgIH1cblxuICAgIG9uQ2xpY2tDYXJ0QnV0dG9uKHRoZUFwcCl7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlW1wiZGF0YS1za3VcIl0pOyAvL2dldEF0dHJpYnV0ZS5kYXRhLXNrdVxuICAgICAgICAgICAgbGV0IHRoZVNrdSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIpO1xuICAgICAgICAgICAgdGhpcy50aGVBcHAuc2hvcHBpbmdDYXJ0LmFkZEl0ZW1Ub0NhcnQodGhlU2t1KTtcbiAgICAgICB9IC8vY3JlYXRlIGZ1bmN0aW9uIGFkZEl0ZW1Ub0NhcnQgKClcbiAgICB9ICAgXG5cbiAgICBcbiAgICAgICAgYWRkUHJvZHVjdHNUb0Nhcm91c2VsKHByb2R1Y3RzLCB0aGVBcHApe1xuXG4gICAgICAgICAgICB0aGlzLnRoZUFwcCA9IHRoZUFwcDtcblxuICAgICAgICBpZiAocHJvZHVjdHMgPT09IHVuZGVmaW5lZCB8fCBwcm9kdWN0cyA9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiA7IC8vIGRvIG5vdCBkbyBhbnl0aGluZyEgdGhlcmUgaXMgbm8gZGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgLyogdGhlIGxvb3AgY3JlYXRlcyBhbGwgdGhlIGVsZW1lbnRzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGNhcm91c2VsLlxuICAgICAgICAgKiBpdCByZWNyZWF0ZXMgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmVcbiAgICAgICAgICogPGRpdiBjbGFzcz1cInByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgICAgKiA8aW1nIHNyYz1cImltYWdlcy9zdHJldGNoLWtuaXQtZHJlc3MuanBnXCIgYWx0PVwiSW1hZ2Ugb2Ygc3RyZXRjaCBrbml0IGRyZXNzXCIgLz5cbiAgICAgICAgICogPHAgY2xhc3M9XCJwcm9kdWN0LXR5cGVcIj5EcmVzc2VzPC9wPlxuICAgICAgICAgKiA8aDM+U3RyZXRjaCBLbml0IERyZXNzPC9oMz5cbiAgICAgICAgICogPHAgY2xhc3M9XCJwcmljZVwiPiQxNjkuMDA8L3A+XG4gICAgICAgICAqIDwvZGl2PlxuICAgICAgICAgICogKi9cbiAgICAgICAgZm9yIChsZXQgcD0wOyBwPHByb2R1Y3RzLmxlbmd0aDsgcCsrKXtcbiAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdHNbcF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcbiAgICAgICAgICAgIC8vIGVhY2ggcHJvZHVjdCBpcyBhIHByb2R1Y3Qgb2JqZWN0XG4gICAgICAgICAgICAvLyB1c2UgaXQgdG8gY3JlYXRlIHRoZSBlbGVtZW50XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgRElWIHRhZyB3aXRoIGNsYXNzICdwcm9kdWN0LXdyYXBwZXInXG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvZHVjdC13cmFwcGVyXCIpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgSU1HIHRhZy4gU3VnZ2VzdCB0byBhZGQgZGF0YS1za3UgYXR0cmlidXRlIGhlcmUgdG9vXG4gICAgICAgICAgICAvLyBzbyB0aGF0IGlmIHlvdSAnY2xpY2snIG9uIHRoZSBpbWFnZSwgaXQgd291bGQgcG9wIHVwIGEgcXVpY2stdmlld1xuICAgICAgICAgICAgLy8gd2luZG93IGFuZCB5b3UgY2FuIHVzZSB0aGUgc2t1LlxuICAgICAgICAgICAgbGV0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBuZXdJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xuICAgICAgICAgICAgbmV3SW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBgJHtwcm9kdWN0Lm5hbWV9YCk7IC8vIHRoaXMgd29ya3MgdG9vXG4gICAgICAgICAgICBuZXdJbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1za3VcIixwcm9kdWN0LnNrdSk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBQYXJhZ3JhcGggdG8gc2hvdyBhIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBsZXQgbmV3UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbmV3UGFyYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvZHVjdC10eXBlXCIpO1xuICAgICAgICAgICAgbGV0IG5ld1BhcmFUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2R1Y3QubG9uZ0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIG5ld1BhcmEuYXBwZW5kQ2hpbGQobmV3UGFyYVRleHROb2RlKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IEgzIHRhZyB0byBzaG93IHRoZSBuYW1lXG4gICAgICAgICAgICBsZXQgbmV3SDNUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgICAgICBsZXQgbmV3SDNUYWdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2R1Y3QubmFtZSk7XG4gICAgICAgICAgICBuZXdIM1RhZy5hcHBlbmRDaGlsZChuZXdIM1RhZ1RleHROb2RlKTtcblxuICAgICAgICAgICAgbGV0IG5ld1ByaWNlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbmV3UHJpY2VQYXJhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwcmljZVwiKTtcbiAgICAgICAgICAgIGxldCBuZXdQcmljZVBhcmFUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2R1Y3QucmVndWxhclByaWNlKTtcbiAgICAgICAgICAgIG5ld1ByaWNlUGFyYS5hcHBlbmRDaGlsZChuZXdQcmljZVBhcmFUZXh0Tm9kZSk7XG5cbiAgICAgICAgICAgIC8qIHlvdSB3aWxsIG5lZWQgc2ltaWxhciBjb2RlIHRvIGNyZWF0ZVxuICAgICAgICAgICAgYW4gYWRkIHRvIGNhcnQgYW5kIGEgcXVpY2sgdmlldyBidXR0b25cbiAgICAgICAgICAgIHJlbWVtYmVyIHRoYXQgZWFjaCBidXR0b24geW91IGNyZWF0ZSBzaG91bGQgaGF2ZVxuICAgICAgICAgICAgYSBkYXRhLXNrdSBhdHRyaWJ1dGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgc2t1XG4gICAgICAgICAgICBvZiBlYWNoIHByb2R1Y3QuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcXVpY2tWaWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHF1aWNrVmlld0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXYke3Byb2R1Y3Quc2t1fWApO1xuICAgICAgICAgICAgcXVpY2tWaWV3QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIsIHByb2R1Y3Quc2t1KTtcbiAgICAgICAgICAgIHF1aWNrVmlld0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbGV0IHF1aWNrVmlld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJRdWljayBWaWV3XCIpO1xuICAgICAgICAgICAgcXVpY2tWaWV3QnV0dG9uLmFwcGVuZENoaWxkKHF1aWNrVmlld1RleHROb2RlKTtcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIGxldCBhZGRUb0NhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2FydF8ke3Byb2R1Y3Quc2t1fWApO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIsIHByb2R1Y3Quc2t1KTtcbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIsKTtcbiAgICAgICAgICAgIGxldCBhZGRDYXJ0VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZCBUbyBDYXJ0XCIpO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnV0dG9uLmFwcGVuZENoaWxkKGFkZENhcnRUZXh0Tm9kZSk7XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGlja0NhcnRCdXR0b24odGhpcy50aGVBcHApLGZhbHNlKTtcblxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0ltZyk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3SDNUYWcpO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1ByaWNlUGFyYSk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocXVpY2tWaWV3QnV0dG9uKTsgLy8gYWRkZWQgbmV3IHF1aWNrVmlldyBCdXR0b25cbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChhZGRUb0NhcnRCdXR0b24pOyAvLyBhZGRlZCBuZXcgYWRkVG9DYXJ0QnV0dG9uXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic29tZXBpY2Zyb21iZXN0YnV5XCI+PC9pbWcuXG4gICAgICAgICAgICAgICAgPHA+YnV5IG1lIG5vdzwvcD5cbiAgICAgICAgICAgICAgICA8aDM+RGVsbCBJbnNwaXJpb24gMTJcIjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+Mjk5Ljk5PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJxdl8ke3Byb2R1Y3Quc2t1fVwiIGRhdGEtc2t1XCIgdHlwZT1cImJ1dHRvblwiPlF1aWNrIFZpZXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYXJ0XyR7cHJvZHVjdC5za3V9XCIgZGF0YS1za3U9XCJcIiB0eXBlID1cImJ1dHRvblwiPkFkZCBUbyBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjJykuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9DYXRhbG9nVmlldy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})