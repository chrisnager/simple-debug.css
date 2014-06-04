![simple-debug.css logo](logo.png "simple-debug.css logo")

# simple-debug.css

Debug your layouts with one line of CSS



## How to use

There are a few ways you can run simple-debug.css.

- Include `simple-debug.css` just before the `</head>` closing tag.

```html
    …
    <link rel="stylesheet" href="app.css">
    <link rel="stylesheet" href="simple-debug.css">
</head>
```

- Go to the [project page](//chrisnager.github.io/simple-debug.css/#bookmarklet) and drag the bookmarklet link to your bookmarks bar.

![simple-debug.css bookmarklet](bookmarklet.png "simple-debug.css bookmarklet")

- Paste in this single line of code at the bottom of your site's last CSS file.

```css
*{outline:1px solid #fff!important;background-color:rgba(0,2,54,.1)!important}
```

![simple-debug.css in action](screenshot.png "simple-debug.css in action")

Try it out on [CodePen](//codepen.io/chrisnager/pen/saxeL).



## License

The MIT License (MIT)

Copyright (c) 2014 [Chris Nager](//twitter.com//chrisnager)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
