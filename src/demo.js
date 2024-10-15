import { ready, render } from './halo';

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
            derp: 420
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
            derp: {
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