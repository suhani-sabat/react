function renderElement(element, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target:"_blank"
    },
    children: "Visit google"
}

const root = document.querySelector("#root")

renderElement(reactElement, root);


// NOTES

// in jsx for injecting variable we are using {var_name}. This is the final evaluated expression. We cannot write any js inside {} but only the final evaluated expression we can inject
// In react, it was made like this 
const variable = "Me"
const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target:"_blank"},
    "Visit Google",
    variable
)

// That means after completing everything we are injecting our variables. Here also there varibale must be a evaluated expression.