Halo! 🖖
==================

Pure and simple render function with hydrating.

How to run demo:
--------

#### Install NPM dependencies
```shell
npm i
```

#### Run dev server
```shell
npm run dev
```

How to use:
--------

#### Example 1:

See index.html and demo.js source code. 

#### Example 2:

Import as ESM module and run function from HEAD:

```html
    <head>
        <script type="module">
            import {ready, render} from './halo.js';

            const yo = { 
                type: "button",
                children: "Yo!",
                eventHandlers: {
                    click: [
                        () => alert("🖖")
                    ]
                }
            }

            ready(() => {
                render({
                    type: "div",
                    attr: {
                        derp: 42
                    },
                    children: {
                        title: { 
                            type: "h1",
                            children: "Halo! 🖖✨",
                            eventHandlers: {
                                click: [
                                    () => alert("🖖")
                                ]
                            }
                        },
                        buttons: {
                            type: "div",
                            attr: {
                                class: "buttons"
                            },
                            children: {
                                yo,
                                yo2: yo,
                                yo3: yo,
                                yo4: yo,
                                yo5: yo,
                                yo6: yo,
                                yo7: yo
                            }
                        }
                    }
                });
            });
        </script>
    </head>
```

#### Add root element to BODY:
```html
<body>
    <div id="root"></div>
</body>
```